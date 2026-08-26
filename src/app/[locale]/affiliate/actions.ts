'use server';

import { redirect } from 'next/navigation';
import { AFFILIATE_TERMS_VERSION } from '@/content/affiliate-legal';
import {
  createAffiliate,
  findAffiliateByEmail,
  getAffiliate,
  updateAffiliatePassword,
} from '@/lib/affiliate/affiliates';
import {
  clientIp,
  endAffiliateSession,
  requireAffiliate,
  startAffiliateSession,
} from '@/lib/affiliate/auth';
import { hashPassword, verifyPassword } from '@/lib/affiliate/crypto';
import { getDb } from '@/lib/affiliate/env';
import { getSettings } from '@/lib/affiliate/settings';
import { checkThrottle, clearThrottle, recordFailure } from '@/lib/affiliate/throttle';

// Public-side actions. Validation failures return an error code the client
// form translates; success redirects. Error codes, not sentences, cross the
// boundary so the messages stay in the i18n catalogue.

export interface AffiliateFormState {
  error?: string;
  /** Seconds to wait, set with error 'throttled'. */
  wait?: number;
  ok?: boolean;
}

const MIN_PASSWORD_LENGTH = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (formData: FormData, name: string) => {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
};

const locale = (formData: FormData) => {
  const value = text(formData, 'locale');
  return /^[a-z]{2}$/.test(value) ? value : 'en';
};

export async function registerAffiliate(
  _prev: AffiliateFormState,
  formData: FormData,
): Promise<AffiliateFormState> {
  const l = locale(formData);
  const db = await getDb();

  const settings = await getSettings(db);
  if (settings.program_active !== 1) return { error: 'closed' };

  const firstName = text(formData, 'first_name');
  const lastName = text(formData, 'last_name');
  const email = text(formData, 'email').toLowerCase();
  const phone = text(formData, 'phone');
  const password = formData.get('password');

  if (!firstName || !lastName || !phone) return { error: 'missing' };
  if (!EMAIL_RE.test(email)) return { error: 'email' };
  if (typeof password !== 'string' || password.length < MIN_PASSWORD_LENGTH) {
    return { error: 'password' };
  }
  // The two legal checkboxes are required; marketing is genuinely optional.
  if (formData.get('consent_terms') !== 'on' || formData.get('consent_privacy') !== 'on') {
    return { error: 'consent' };
  }

  // Per-IP registration rate limit, on the same throttle table as the logins.
  const throttleKey = `register:${await clientIp()}`;
  const throttle = await checkThrottle(db, throttleKey);
  if (throttle.blocked) return { error: 'throttled', wait: throttle.retryAfterSeconds };
  await recordFailure(db, throttleKey);

  let affiliateId: string;
  try {
    const affiliate = await createAffiliate(db, {
      firstName,
      lastName,
      email,
      phone,
      password,
      termsVersion: AFFILIATE_TERMS_VERSION,
      marketingConsent: formData.get('consent_marketing') === 'on',
    });
    affiliateId = affiliate.id;
  } catch (error) {
    if (error instanceof Error && error.message === 'email-taken') {
      return { error: 'email-taken' };
    }
    throw error;
  }

  await startAffiliateSession(affiliateId);
  redirect(`/${l}/affiliate/dashboard?welcome=1`);
}

export async function affiliateLogin(
  _prev: AffiliateFormState,
  formData: FormData,
): Promise<AffiliateFormState> {
  const l = locale(formData);
  const email = text(formData, 'email').toLowerCase();
  const password = formData.get('password');
  if (!EMAIL_RE.test(email) || typeof password !== 'string' || !password) {
    return { error: 'credentials' };
  }

  const db = await getDb();
  const throttleKey = `aff-login:${await clientIp()}`;
  const throttle = await checkThrottle(db, throttleKey);
  if (throttle.blocked) return { error: 'throttled', wait: throttle.retryAfterSeconds };

  const affiliate = await findAffiliateByEmail(db, email);
  if (!affiliate) {
    // Burn comparable time so a missing account is not distinguishable from a
    // wrong password by response latency.
    await hashPassword(password);
    await recordFailure(db, throttleKey);
    return { error: 'credentials' };
  }
  if (!(await verifyPassword(password, affiliate.password_hash))) {
    await recordFailure(db, throttleKey);
    return { error: 'credentials' };
  }

  // Suspended affiliates may still log in and see their history; only their
  // code is shown as inactive.
  await clearThrottle(db, throttleKey);
  await startAffiliateSession(affiliate.id);
  redirect(`/${l}/affiliate/dashboard`);
}

export async function affiliateLogout(formData: FormData): Promise<void> {
  await endAffiliateSession();
  redirect(`/${locale(formData)}/affiliate/login`);
}

export async function changeAffiliatePassword(
  _prev: AffiliateFormState,
  formData: FormData,
): Promise<AffiliateFormState> {
  const l = locale(formData);
  const session = await requireAffiliate(l);
  const current = formData.get('current_password');
  const next = formData.get('new_password');
  if (typeof next !== 'string' || next.length < MIN_PASSWORD_LENGTH) {
    return { error: 'password' };
  }

  const db = await getDb();
  const affiliate = await getAffiliate(db, session.sub);
  if (
    !affiliate ||
    typeof current !== 'string' ||
    !(await verifyPassword(current, affiliate.password_hash))
  ) {
    return { error: 'current-password' };
  }
  await updateAffiliatePassword(db, affiliate.id, next);
  return { ok: true };
}
