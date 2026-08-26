import type { D1Database } from './env';

// D1-backed throttling — an in-memory counter would reset with every worker
// isolate and never fire. Keys are "scope:identifier", e.g. "admin-login:<ip>".

const FREE_ATTEMPTS = 3;
const BASE_DELAY_SECONDS = 2;
const MAX_DELAY_SECONDS = 300;

export interface ThrottleState {
  blocked: boolean;
  retryAfterSeconds: number;
}

function requiredDelay(attempts: number): number {
  if (attempts < FREE_ATTEMPTS) return 0;
  return Math.min(BASE_DELAY_SECONDS * 2 ** (attempts - FREE_ATTEMPTS), MAX_DELAY_SECONDS);
}

export async function checkThrottle(db: D1Database, key: string): Promise<ThrottleState> {
  const row = await db
    .prepare('SELECT attempts, last_attempt_at FROM login_throttle WHERE key = ?')
    .bind(key)
    .first<{ attempts: number; last_attempt_at: string }>();
  if (!row) return { blocked: false, retryAfterSeconds: 0 };
  const waitUntil = Date.parse(`${row.last_attempt_at}Z`) + requiredDelay(row.attempts) * 1000;
  const remaining = Math.ceil((waitUntil - Date.now()) / 1000);
  return remaining > 0
    ? { blocked: true, retryAfterSeconds: remaining }
    : { blocked: false, retryAfterSeconds: 0 };
}

export async function recordFailure(db: D1Database, key: string): Promise<void> {
  await db
    .prepare(
      `INSERT INTO login_throttle (key, attempts, last_attempt_at)
       VALUES (?, 1, datetime('now'))
       ON CONFLICT (key) DO UPDATE SET attempts = attempts + 1, last_attempt_at = datetime('now')`,
    )
    .bind(key)
    .run();
}

export async function clearThrottle(db: D1Database, key: string): Promise<void> {
  await db.prepare('DELETE FROM login_throttle WHERE key = ?').bind(key).run();
}
