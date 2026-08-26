import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Miniflare } from 'miniflare';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createAffiliate, listAffiliates, setAffiliateStatus } from '../affiliates';
import { listAudit } from '../audit';
import { CODE_FORMAT } from '../code';
import type { D1Database } from '../env';
import { createReferral, listReferrals, markReferralPaid, referralTotals } from '../referrals';
import { getSettings, updateSettings } from '../settings';
import { checkThrottle, clearThrottle, recordFailure } from '../throttle';

// Integration tests against a real D1 (miniflare/workerd, in-memory), running
// the exact migration the deploy applies.

let mf: Miniflare;
let db: D1Database;

async function applyMigration() {
  const sql = readFileSync(
    join(__dirname, '../../../../migrations/0001_affiliate_program.sql'),
    'utf8',
  );
  // Strip comment lines first — they contain semicolons — then split into
  // statements. No statement in the migration contains a literal ';'.
  const withoutComments = sql
    .split('\n')
    .filter((line) => !line.trim().startsWith('--'))
    .join('\n');
  for (const statement of withoutComments.split(';')) {
    if (statement.trim()) await db.prepare(statement).run();
  }
}

async function resetTables() {
  for (const table of ['referrals', 'audit_log', 'login_throttle', 'affiliates']) {
    await db.prepare(`DELETE FROM ${table}`).run();
  }
  await db
    .prepare(
      `UPDATE program_settings SET discount_amount_cents = 100000,
       commission_amount_cents = 100000, currency = 'EUR', program_active = 1 WHERE id = 1`,
    )
    .run();
}

beforeAll(async () => {
  mf = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response(null) } }',
    d1Databases: ['DB'],
  });
  db = (await mf.getD1Database('DB')) as unknown as D1Database;
  await applyMigration();
});

afterAll(async () => {
  await mf.dispose();
});

beforeEach(resetTables);

const PERSON = {
  firstName: 'Piotr',
  lastName: 'Testowy',
  email: 'Piotr@Example.com',
  phone: '+48 600 000 000',
  password: 'long-enough-password',
  termsVersion: '2026-08-v1',
  marketingConsent: false,
};

describe('program_settings seed', () => {
  it('starts at EUR 1000 discount / EUR 1000 commission, active', async () => {
    const settings = await getSettings(db);
    expect(settings.discount_amount_cents).toBe(100_000);
    expect(settings.commission_amount_cents).toBe(100_000);
    expect(settings.currency).toBe('EUR');
    expect(settings.program_active).toBe(1);
  });
});

describe('affiliate registration', () => {
  it('creates the row with code, consents and lowercased email', async () => {
    const affiliate = await createAffiliate(db, PERSON);
    expect(affiliate.code).toMatch(CODE_FORMAT);
    expect(affiliate.code.startsWith('PIOTR-')).toBe(true);
    expect(affiliate.email).toBe('piotr@example.com');
    expect(affiliate.terms_version).toBe('2026-08-v1');
    expect(affiliate.terms_accepted_at).toBeTruthy();
    expect(affiliate.privacy_acknowledged_at).toBeTruthy();
    expect(affiliate.marketing_consent).toBe(0);
    expect(affiliate.password_hash).not.toContain('long-enough-password');

    const audit = await listAudit(db);
    expect(audit.some((entry) => entry.action === 'affiliate.registered')).toBe(true);
  });

  it('rejects a duplicate email regardless of case', async () => {
    await createAffiliate(db, PERSON);
    await expect(createAffiliate(db, { ...PERSON, email: 'PIOTR@example.com' })).rejects.toThrow(
      'email-taken',
    );
  });
});

describe('settings snapshotting', () => {
  it('freezes amounts into the referral at creation; later edits never touch it', async () => {
    const affiliate = await createAffiliate(db, PERSON);

    await updateSettings(
      db,
      { discount_amount_cents: 100_000, commission_amount_cents: 150_000, currency: 'EUR', program_active: true },
      'admin@test',
    );
    const bumped = await getSettings(db);
    const referralId = await createReferral(
      db,
      {
        affiliateId: affiliate.id,
        saleDate: '2026-08-26',
        buyerLabel: null,
        propertyReference: 'CY-101',
        adminNote: null,
        discountCents: bumped.discount_amount_cents,
        commissionCents: bumped.commission_amount_cents,
        currency: bumped.currency,
      },
      'admin@test',
    );

    // Back to 1000 — the recorded sale must keep 1500.
    await updateSettings(
      db,
      { discount_amount_cents: 100_000, commission_amount_cents: 100_000, currency: 'EUR', program_active: true },
      'admin@test',
    );

    const [referral] = await listReferrals(db, affiliate.id);
    expect(referral.id).toBe(referralId);
    expect(referral.commission_amount_cents).toBe(150_000);

    const audit = await listAudit(db);
    expect(audit.filter((entry) => entry.action === 'settings.updated')).toHaveLength(2);
    expect(audit.some((entry) => entry.action === 'referral.created')).toBe(true);
  });
});

describe('totals and payout', () => {
  it('pending = unpaid commissions; earned = all; paid flips on mark-as-paid', async () => {
    const affiliate = await createAffiliate(db, PERSON);
    expect(await referralTotals(db, affiliate.id)).toEqual({
      sales_count: 0,
      pending_cents: 0,
      earned_cents: 0,
    });

    const referralId = await createReferral(
      db,
      {
        affiliateId: affiliate.id,
        saleDate: '2026-08-26',
        buyerLabel: 'J.K.',
        propertyReference: null,
        adminNote: null,
        discountCents: 100_000,
        commissionCents: 150_000,
        currency: 'EUR',
      },
      'admin@test',
    );
    expect(await referralTotals(db, affiliate.id)).toEqual({
      sales_count: 1,
      pending_cents: 150_000,
      earned_cents: 150_000,
    });

    await markReferralPaid(db, referralId, 'admin@test');
    expect(await referralTotals(db, affiliate.id)).toEqual({
      sales_count: 1,
      pending_cents: 0,
      earned_cents: 150_000,
    });
    const [referral] = await listReferrals(db, affiliate.id);
    expect(referral.payout_status).toBe('paid');
    expect(referral.paid_at).toBeTruthy();
    expect((await listAudit(db)).some((entry) => entry.action === 'referral.paid')).toBe(true);
  });
});

describe('own-data scoping at the data layer', () => {
  it('one affiliate never sees another affiliate’s referrals or totals', async () => {
    const a = await createAffiliate(db, PERSON);
    const b = await createAffiliate(db, { ...PERSON, email: 'anna@example.com', firstName: 'Anna' });
    await createReferral(
      db,
      {
        affiliateId: a.id,
        saleDate: '2026-08-26',
        buyerLabel: null,
        propertyReference: null,
        adminNote: null,
        discountCents: 100_000,
        commissionCents: 100_000,
        currency: 'EUR',
      },
      'admin@test',
    );

    expect(await listReferrals(db, b.id)).toHaveLength(0);
    expect((await referralTotals(db, b.id)).sales_count).toBe(0);
    expect(await listReferrals(db, a.id)).toHaveLength(1);
  });
});

describe('admin search', () => {
  it('finds an affiliate by lowercase code without the hyphen', async () => {
    const affiliate = await createAffiliate(db, PERSON);
    const results = await listAffiliates(db, affiliate.code.toLowerCase().replace('-', ' '));
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe(affiliate.id);
  });
});

describe('suspension', () => {
  it('flips status and writes the audit trail', async () => {
    const affiliate = await createAffiliate(db, PERSON);
    await setAffiliateStatus(db, affiliate.id, 'suspended', 'admin@test');
    const [row] = await listAffiliates(db, affiliate.email);
    expect(row.status).toBe('suspended');
    expect((await listAudit(db)).some((entry) => entry.action === 'affiliate.suspended')).toBe(true);
  });
});

describe('throttle', () => {
  it('blocks after repeated failures and clears on demand', async () => {
    const key = 'admin-login:198.51.100.7';
    expect((await checkThrottle(db, key)).blocked).toBe(false);
    for (let i = 0; i < 4; i++) await recordFailure(db, key);
    const state = await checkThrottle(db, key);
    expect(state.blocked).toBe(true);
    expect(state.retryAfterSeconds).toBeGreaterThan(0);
    await clearThrottle(db, key);
    expect((await checkThrottle(db, key)).blocked).toBe(false);
  });
});
