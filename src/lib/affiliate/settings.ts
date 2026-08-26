import { writeAudit } from './audit';
import type { D1Database } from './env';

export interface ProgramSettings {
  discount_amount_cents: number;
  commission_amount_cents: number;
  currency: string;
  program_active: number;
  updated_at: string;
  updated_by: string | null;
}

export async function getSettings(db: D1Database): Promise<ProgramSettings> {
  const row = await db
    .prepare('SELECT * FROM program_settings WHERE id = 1')
    .first<ProgramSettings>();
  if (!row) throw new Error('program_settings row missing — was the migration applied?');
  return row;
}

// Never touches referrals: recorded sales keep the amounts they were created
// with, whatever the settings say afterwards.
export async function updateSettings(
  db: D1Database,
  next: {
    discount_amount_cents: number;
    commission_amount_cents: number;
    currency: string;
    program_active: boolean;
  },
  actor: string,
): Promise<void> {
  const before = await getSettings(db);
  await db
    .prepare(
      `UPDATE program_settings
       SET discount_amount_cents = ?, commission_amount_cents = ?, currency = ?,
           program_active = ?, updated_at = datetime('now'), updated_by = ?
       WHERE id = 1`,
    )
    .bind(
      next.discount_amount_cents,
      next.commission_amount_cents,
      next.currency,
      next.program_active ? 1 : 0,
      actor,
    )
    .run();
  await writeAudit(db, {
    actor,
    action: 'settings.updated',
    targetId: 'program_settings',
    before: {
      discount_amount_cents: before.discount_amount_cents,
      commission_amount_cents: before.commission_amount_cents,
      currency: before.currency,
      program_active: before.program_active === 1,
    },
    after: next,
  });
}
