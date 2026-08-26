import { writeAudit } from './audit';
import { generateUniqueCode, normalizeCode } from './code';
import { hashPassword } from './crypto';
import type { D1Database } from './env';

export interface AffiliateRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password_hash: string;
  code: string;
  status: 'active' | 'suspended';
  terms_accepted_at: string;
  terms_version: string;
  privacy_acknowledged_at: string;
  marketing_consent: number;
  marketing_consent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AffiliateListRow extends AffiliateRow {
  sales_count: number;
  pending_cents: number;
}

const LIST_SELECT = `
  SELECT a.*,
         COUNT(r.id) AS sales_count,
         COALESCE(SUM(CASE WHEN r.payout_status = 'pending' THEN r.commission_amount_cents ELSE 0 END), 0) AS pending_cents
  FROM affiliates a
  LEFT JOIN referrals r ON r.affiliate_id = a.id`;

/** Search matches the normalized code (case/hyphen-insensitive), name, email or phone. */
export async function listAffiliates(db: D1Database, search?: string): Promise<AffiliateListRow[]> {
  const term = search?.trim();
  if (!term) {
    const { results } = await db
      .prepare(`${LIST_SELECT} GROUP BY a.id ORDER BY a.created_at DESC LIMIT 500`)
      .all<AffiliateListRow>();
    return results;
  }
  const like = `%${term.toLowerCase()}%`;
  const { results } = await db
    .prepare(
      `${LIST_SELECT}
       WHERE replace(a.code, '-', '') = ?
          OR lower(a.first_name || ' ' || a.last_name) LIKE ?
          OR lower(a.email) LIKE ?
          OR a.phone LIKE ?
       GROUP BY a.id ORDER BY a.created_at DESC LIMIT 500`,
    )
    .bind(normalizeCode(term), like, like, `%${term}%`)
    .all<AffiliateListRow>();
  return results;
}

export async function getAffiliate(db: D1Database, id: string): Promise<AffiliateRow | null> {
  return db.prepare('SELECT * FROM affiliates WHERE id = ?').bind(id).first<AffiliateRow>();
}

export async function findAffiliateByEmail(
  db: D1Database,
  email: string,
): Promise<AffiliateRow | null> {
  return db
    .prepare('SELECT * FROM affiliates WHERE email = ?')
    .bind(email.trim().toLowerCase())
    .first<AffiliateRow>();
}

/**
 * Registration write path. Hashes the password, generates the unique code and
 * stamps the consent record. Throws 'email-taken' when the address exists —
 * the unique index is the authoritative guard against races.
 */
export async function createAffiliate(
  db: D1Database,
  input: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    termsVersion: string;
    marketingConsent: boolean;
  },
): Promise<AffiliateRow> {
  const email = input.email.trim().toLowerCase();
  if (await findAffiliateByEmail(db, email)) throw new Error('email-taken');

  const id = crypto.randomUUID();
  const code = await generateUniqueCode(db, input.firstName);
  const passwordHash = await hashPassword(input.password);
  const now = new Date().toISOString();
  try {
    await db
      .prepare(
        `INSERT INTO affiliates
           (id, first_name, last_name, email, phone, password_hash, code,
            terms_accepted_at, terms_version, privacy_acknowledged_at,
            marketing_consent, marketing_consent_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        id,
        input.firstName,
        input.lastName,
        email,
        input.phone,
        passwordHash,
        code,
        now,
        input.termsVersion,
        now,
        input.marketingConsent ? 1 : 0,
        input.marketingConsent ? now : null,
      )
      .run();
  } catch (error) {
    if (String(error).includes('UNIQUE')) throw new Error('email-taken');
    throw error;
  }
  await writeAudit(db, {
    actor: `affiliate:${id}`,
    action: 'affiliate.registered',
    targetId: id,
    after: { code, terms_version: input.termsVersion, marketing_consent: input.marketingConsent },
  });
  const created = await getAffiliate(db, id);
  if (!created) throw new Error('affiliate insert failed');
  return created;
}

export async function updateAffiliatePassword(
  db: D1Database,
  id: string,
  newPassword: string,
): Promise<void> {
  await db
    .prepare("UPDATE affiliates SET password_hash = ?, updated_at = datetime('now') WHERE id = ?")
    .bind(await hashPassword(newPassword), id)
    .run();
}

export async function setAffiliateStatus(
  db: D1Database,
  id: string,
  status: 'active' | 'suspended',
  actor: string,
): Promise<void> {
  const before = await getAffiliate(db, id);
  if (!before || before.status === status) return;
  await db
    .prepare("UPDATE affiliates SET status = ?, updated_at = datetime('now') WHERE id = ?")
    .bind(status, id)
    .run();
  await writeAudit(db, {
    actor,
    action: status === 'suspended' ? 'affiliate.suspended' : 'affiliate.reactivated',
    targetId: id,
    before: { status: before.status },
    after: { status },
  });
}
