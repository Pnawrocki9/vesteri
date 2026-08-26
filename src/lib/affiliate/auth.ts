import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSecret } from './env';
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_HOURS,
  AFFILIATE_COOKIE,
  AFFILIATE_SESSION_DAYS,
  createSessionToken,
  type SessionPayload,
  verifySessionToken,
} from './session';

// Role checks live here, server-side, and every /affiliate/admin/* page and
// every mutating action calls them — not just a layout, which Next can skip
// on client-side navigation. The two roles use different cookies, so an
// affiliate session can never satisfy an admin check.

export async function getAdminSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  const session = await verifySessionToken(token, await getSecret('AFFILIATE_SESSION_SECRET'));
  return session?.role === 'admin' ? session : null;
}

/** Redirects to the admin login when there is no valid admin session. */
export async function requireAdmin(locale: string): Promise<SessionPayload> {
  const session = await getAdminSession();
  if (!session) redirect(`/${locale}/affiliate/admin/login`);
  return session;
}

export async function startAdminSession(email: string): Promise<void> {
  const token = await createSessionToken(
    {
      role: 'admin',
      sub: email,
      exp: Math.floor(Date.now() / 1000) + ADMIN_SESSION_HOURS * 3600,
    },
    await getSecret('AFFILIATE_SESSION_SECRET'),
  );
  (await cookies()).set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_HOURS * 3600,
  });
}

export async function endAdminSession(): Promise<void> {
  (await cookies()).delete(ADMIN_COOKIE);
}

export async function getAffiliateSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(AFFILIATE_COOKIE)?.value;
  const session = await verifySessionToken(token, await getSecret('AFFILIATE_SESSION_SECRET'));
  return session?.role === 'affiliate' ? session : null;
}

/** Redirects to the affiliate login when there is no valid affiliate session. */
export async function requireAffiliate(locale: string): Promise<SessionPayload> {
  const session = await getAffiliateSession();
  if (!session) redirect(`/${locale}/affiliate/login`);
  return session;
}

export async function startAffiliateSession(affiliateId: string): Promise<void> {
  const token = await createSessionToken(
    {
      role: 'affiliate',
      sub: affiliateId,
      exp: Math.floor(Date.now() / 1000) + AFFILIATE_SESSION_DAYS * 86400,
    },
    await getSecret('AFFILIATE_SESSION_SECRET'),
  );
  (await cookies()).set(AFFILIATE_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: AFFILIATE_SESSION_DAYS * 86400,
  });
}

export async function endAffiliateSession(): Promise<void> {
  (await cookies()).delete(AFFILIATE_COOKIE);
}

/** Best-effort client IP for throttle keys — Cloudflare sets the first header. */
export async function clientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get('cf-connecting-ip') ?? h.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  );
}
