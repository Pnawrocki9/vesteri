import { getCloudflareContext } from '@opennextjs/cloudflare';

// Minimal structural typing for the D1 surface this module uses. Pulling in
// @cloudflare/workers-types would fight the DOM lib the rest of the app
// compiles against; these few methods are all we call.
export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  run(): Promise<{ meta: { changes: number } }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface AffiliateEnv {
  DB?: D1Database;
  AFFILIATE_ADMIN_EMAIL?: string;
  AFFILIATE_ADMIN_PASSWORD_HASH?: string;
  AFFILIATE_SESSION_SECRET?: string;
}

// The async variant works everywhere getCloudflareContext exists: the worker,
// `next dev` (via initOpenNextCloudflareForDev) and build-time SSG. All
// affiliate pages are request-time rendered anyway — they read cookies or the
// database — so nothing here runs during prerender.
async function getEnv(): Promise<AffiliateEnv> {
  const { env } = await getCloudflareContext({ async: true });
  return env as unknown as AffiliateEnv;
}

export async function getDb(): Promise<D1Database> {
  const db = (await getEnv()).DB;
  if (!db) {
    throw new Error(
      'D1 binding "DB" is missing. Create the database (wrangler d1 create vesteri-affiliate), set its id in wrangler.jsonc and apply migrations.',
    );
  }
  return db;
}

type SecretName =
  | 'AFFILIATE_ADMIN_EMAIL'
  | 'AFFILIATE_ADMIN_PASSWORD_HASH'
  | 'AFFILIATE_SESSION_SECRET';

export async function getSecret(name: SecretName): Promise<string> {
  // process.env fallback covers plain-node contexts (unit tests).
  const value = (await getEnv())[name] ?? process.env[name];
  if (!value) {
    throw new Error(`Missing required secret ${name} — set it via "wrangler secret put" (locally: .dev.vars).`);
  }
  return value;
}
