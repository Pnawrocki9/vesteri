import { writeAudit } from './audit';
import type { D1Database } from './env';

export interface ReferralRow {
  id: string;
  affiliate_id: string;
  buyer_label: string | null;
  property_reference: string | null;
  sale_date: string;
  discount_amount_cents: number;
  commission_amount_cents: number;
  currency: string;
  payout_status: 'pending' | 'paid';
  paid_at: string | null;
  admin_note: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export async function listReferrals(db: D1Database, affiliateId: string): Promise<ReferralRow[]> {
  const { results } = await db
    .prepare('SELECT * FROM referrals WHERE affiliate_id = ? ORDER BY sale_date DESC, created_at DESC')
    .bind(affiliateId)
    .all<ReferralRow>();
  return results;
}

export interface ReferralTotals {
  sales_count: number;
  pending_cents: number;
  earned_cents: number;
}

export async function referralTotals(db: D1Database, affiliateId: string): Promise<ReferralTotals> {
  const row = await db
    .prepare(
      `SELECT COUNT(*) AS sales_count,
              COALESCE(SUM(CASE WHEN payout_status = 'pending' THEN commission_amount_cents ELSE 0 END), 0) AS pending_cents,
              COALESCE(SUM(commission_amount_cents), 0) AS earned_cents
       FROM referrals WHERE affiliate_id = ?`,
    )
    .bind(affiliateId)
    .first<ReferralTotals>();
  return row ?? { sales_count: 0, pending_cents: 0, earned_cents: 0 };
}

// The amounts arrive from the caller (pre-filled from program_settings,
// editable per sale) and are stored as an immutable snapshot on the row.
export async function createReferral(
  db: D1Database,
  input: {
    affiliateId: string;
    saleDate: string;
    buyerLabel: string | null;
    propertyReference: string | null;
    adminNote: string | null;
    discountCents: number;
    commissionCents: number;
    currency: string;
  },
  actor: string,
): Promise<string> {
  const id = crypto.randomUUID();
  await db
    .prepare(
      `INSERT INTO referrals
         (id, affiliate_id, buyer_label, property_reference, sale_date,
          discount_amount_cents, commission_amount_cents, currency, admin_note, created_by)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      id,
      input.affiliateId,
      input.buyerLabel,
      input.propertyReference,
      input.saleDate,
      input.discountCents,
      input.commissionCents,
      input.currency,
      input.adminNote,
      actor,
    )
    .run();
  await writeAudit(db, {
    actor,
    action: 'referral.created',
    targetId: id,
    after: {
      affiliate_id: input.affiliateId,
      sale_date: input.saleDate,
      discount_amount_cents: input.discountCents,
      commission_amount_cents: input.commissionCents,
      currency: input.currency,
      property_reference: input.propertyReference,
    },
  });
  return id;
}

export async function markReferralPaid(db: D1Database, id: string, actor: string): Promise<void> {
  const before = await db
    .prepare('SELECT * FROM referrals WHERE id = ?')
    .bind(id)
    .first<ReferralRow>();
  if (!before || before.payout_status === 'paid') return;
  await db
    .prepare(
      `UPDATE referrals SET payout_status = 'paid', paid_at = datetime('now'),
              updated_at = datetime('now') WHERE id = ?`,
    )
    .bind(id)
    .run();
  await writeAudit(db, {
    actor,
    action: 'referral.paid',
    targetId: id,
    before: { payout_status: before.payout_status },
    after: { payout_status: 'paid', commission_amount_cents: before.commission_amount_cents },
  });
}
