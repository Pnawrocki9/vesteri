import { writeAudit } from './audit';
import { normalizeCode } from './code';
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
