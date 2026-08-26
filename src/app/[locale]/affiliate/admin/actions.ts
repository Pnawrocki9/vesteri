'use server';

import { redirect } from 'next/navigation';
import { setAffiliateStatus } from '@/lib/affiliate/affiliates';
import {
  clientIp,
  endAdminSession,
  requireAdmin,
  startAdminSession,
} from '@/lib/affiliate/auth';
import { constantTimeEqual, verifyPassword } from '@/lib/affiliate/crypto';
import { getDb, getSecret } from '@/lib/affiliate/env';
import { parseAmountToCents } from '@/lib/affiliate/money';
import { createReferral, markReferralPaid } from '@/lib/affiliate/referrals';
import { getSettings, updateSettings } from '@/lib/affiliate/settings';
import { checkThrottle, clearThrottle, recordFailure } from '@/lib/affiliate/throttle';

// Every mutation re-checks the admin session itself — forms are easy to POST
// at directly, so the page-level guard alone is not enough.

const text = (formData: FormData, name: string) => {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
};

const optional = (formData: FormData, name: string) => text(formData, name) || null;

// The admin panel is reachable under any locale prefix; forms carry the one
// they were rendered with so redirects stay on it.
const locale = (formData: FormData) => {
  const value = text(formData, 'locale');
  return /^[a-z]{2}$/.test(value) ? value : 'en';
};

const encoder = new TextEncoder();

export async function adminLogin(formData: FormData): Promise<void> {
  const l = locale(formData);
  const email = text(formData, 'email').toLowerCase();
  const password = formData.get('password');

  const db = await getDb();
  const throttleKey = `admin-login:${await clientIp()}`;
  const throttle = await checkThrottle(db, throttleKey);
  if (throttle.blocked) {
    redirect(`/${l}/affiliate/admin/login?error=throttled&wait=${throttle.retryAfterSeconds}`);
  }

  const expectedEmail = (await getSecret('AFFILIATE_ADMIN_EMAIL')).toLowerCase();
  const passwordHash = await getSecret('AFFILIATE_ADMIN_PASSWORD_HASH');
  const emailOk = constantTimeEqual(encoder.encode(email), encoder.encode(expectedEmail));
  const passwordOk =
    typeof password === 'string' && password.length > 0 && (await verifyPassword(password, passwordHash));

  if (!emailOk || !passwordOk) {
    await recordFailure(db, throttleKey);
    redirect(`/${l}/affiliate/admin/login?error=credentials`);
  }

  await clearThrottle(db, throttleKey);
  await startAdminSession(expectedEmail);
  redirect(`/${l}/affiliate/admin`);
}

export async function adminLogout(formData: FormData): Promise<void> {
  await endAdminSession();
  redirect(`/${locale(formData)}/affiliate/admin/login`);
}

export async function saveSettings(formData: FormData): Promise<void> {
  const l = locale(formData);
  const session = await requireAdmin(l);

  const discount = parseAmountToCents(text(formData, 'discount'));
  const commission = parseAmountToCents(text(formData, 'commission'));
  const currency = text(formData, 'currency').toUpperCase();
  if (discount === null || commission === null || !/^[A-Z]{3}$/.test(currency)) {
    redirect(`/${l}/affiliate/admin/settings?error=1`);
  }

  await updateSettings(
    await getDb(),
    {
      discount_amount_cents: discount,
      commission_amount_cents: commission,
      currency,
      program_active: formData.get('program_active') === 'on',
    },
    session.sub,
  );
  redirect(`/${l}/affiliate/admin/settings?saved=1`);
}

export async function addSale(formData: FormData): Promise<void> {
  const l = locale(formData);
  const session = await requireAdmin(l);
  const affiliateId = text(formData, 'affiliate_id');
  const back = `/${l}/affiliate/admin/affiliates/${affiliateId}`;

  const saleDate = text(formData, 'sale_date');
  const discount = parseAmountToCents(text(formData, 'discount'));
  const commission = parseAmountToCents(text(formData, 'commission'));
  if (!affiliateId || !/^\d{4}-\d{2}-\d{2}$/.test(saleDate) || discount === null || commission === null) {
    redirect(`${back}?error=sale`);
  }

  const db = await getDb();
  // Currency is not per-sale editable in v1; it rides along from settings.
  const { currency } = await getSettings(db);
  await createReferral(
    db,
    {
      affiliateId,
      saleDate,
      buyerLabel: optional(formData, 'buyer_label'),
      propertyReference: optional(formData, 'property_reference'),
      adminNote: optional(formData, 'admin_note'),
      discountCents: discount,
      commissionCents: commission,
      currency,
    },
    session.sub,
  );
  redirect(`${back}?saved=1`);
}

export async function markPaid(formData: FormData): Promise<void> {
  const l = locale(formData);
  const session = await requireAdmin(l);
  const referralId = text(formData, 'referral_id');
  const affiliateId = text(formData, 'affiliate_id');
  if (referralId) {
    await markReferralPaid(await getDb(), referralId, session.sub);
  }
  redirect(`/${l}/affiliate/admin/affiliates/${affiliateId}`);
}

export async function setStatus(formData: FormData): Promise<void> {
  const l = locale(formData);
  const session = await requireAdmin(l);
  const affiliateId = text(formData, 'affiliate_id');
  const status = text(formData, 'status');
  if (affiliateId && (status === 'active' || status === 'suspended')) {
    await setAffiliateStatus(await getDb(), affiliateId, status, session.sub);
  }
  redirect(`/${l}/affiliate/admin/affiliates/${affiliateId}`);
}
