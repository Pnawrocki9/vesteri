import { constantTimeEqual, fromBase64Url, hmacSign, toBase64Url } from './crypto';

// Two deliberately separate cookies: an affiliate session must never be
// mistaken for an admin one, and clearing one login leaves the other intact.
export const AFFILIATE_COOKIE = 'vesteri_aff_session';
export const ADMIN_COOKIE = 'vesteri_admin_session';

export const ADMIN_SESSION_HOURS = 12;
export const AFFILIATE_SESSION_DAYS = 30;

export type SessionRole = 'affiliate' | 'admin';

export interface SessionPayload {
  role: SessionRole;
  /** Affiliate id, or the admin email for the admin role. */
  sub: string;
  /** Expiry, unix seconds. */
  exp: number;
}

const encoder = new TextEncoder();

/** `v1.<payload b64url>.<hmac b64url>` — signed, not encrypted; carries no secrets. */
export async function createSessionToken(payload: SessionPayload, secret: string): Promise<string> {
  const body = toBase64Url(encoder.encode(JSON.stringify(payload)));
  const signature = toBase64Url(await hmacSign(`v1.${body}`, secret));
  return `v1.${body}.${signature}`;
}

export async function verifySessionToken(
  token: string | undefined,
  secret: string,
): Promise<SessionPayload | null> {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') return null;
  try {
    const expected = await hmacSign(`v1.${parts[1]}`, secret);
    if (!constantTimeEqual(fromBase64Url(parts[2]), expected)) return null;
    const payload = JSON.parse(
      new TextDecoder().decode(fromBase64Url(parts[1])),
    ) as SessionPayload;
    if (typeof payload.exp !== 'number' || payload.exp * 1000 < Date.now()) return null;
    if (payload.role !== 'affiliate' && payload.role !== 'admin') return null;
    if (typeof payload.sub !== 'string' || !payload.sub) return null;
    return payload;
  } catch {
    return null;
  }
}
