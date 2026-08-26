import type { D1Database } from './env';

export type AuditAction =
  | 'affiliate.registered'
  | 'affiliate.suspended'
  | 'affiliate.reactivated'
  | 'referral.created'
  | 'referral.paid'
  | 'settings.updated';

export interface AuditEntry {
  id: number;
  actor: string;
  action: string;
  target_id: string | null;
  before_json: string | null;
  after_json: string | null;
  created_at: string;
}

export async function writeAudit(
  db: D1Database,
  entry: {
    actor: string;
    action: AuditAction;
    targetId?: string;
    before?: unknown;
    after?: unknown;
  },
): Promise<void> {
  await db
    .prepare(
      'INSERT INTO audit_log (actor, action, target_id, before_json, after_json) VALUES (?, ?, ?, ?, ?)',
    )
    .bind(
      entry.actor,
      entry.action,
      entry.targetId ?? null,
      entry.before === undefined ? null : JSON.stringify(entry.before),
      entry.after === undefined ? null : JSON.stringify(entry.after),
    )
    .run();
}

export async function listAudit(db: D1Database, limit = 200): Promise<AuditEntry[]> {
  const { results } = await db
    .prepare('SELECT * FROM audit_log ORDER BY id DESC LIMIT ?')
    .bind(limit)
    .all<AuditEntry>();
  return results;
}
