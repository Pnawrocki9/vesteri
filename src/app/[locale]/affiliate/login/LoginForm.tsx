'use client';

import { useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CONTACT_EMAIL } from '@/lib/site';
import { affiliateLogin, type AffiliateFormState } from '../actions';

const inputClass =
  'mt-1.5 w-full rounded-btn border border-line bg-paper px-3 py-2.5 text-[14.5px]';
const labelClass = 'block text-[12px] font-semibold tracking-[0.08em] uppercase';

export default function LoginForm() {
  const t = useTranslations('affiliate.login');
  const locale = useLocale();
  const [state, formAction, pending] = useActionState<AffiliateFormState, FormData>(
    affiliateLogin,
    {},
  );

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-4">
      <input type="hidden" name="locale" value={locale} />
      {state.error && (
        <p
          role="alert"
          className="rounded-btn border border-red-300 bg-red-50 px-4 py-2.5 text-[13.5px] text-red-800"
        >
          {t(`errors.${state.error}`, { wait: state.wait ?? 60 })}
        </p>
      )}
      <label className={labelClass}>
        {t('email')}
        <input type="email" name="email" required autoComplete="email" className={inputClass} />
      </label>
      <label className={labelClass}>
        {t('password')}
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="bg-accent-gradient mt-2 self-start rounded-cta px-7 py-3.5 text-[15px] font-bold text-paper shadow-cta disabled:opacity-60"
      >
        {t('submit')}
      </button>
      {/* No email provider in the stack yet, so no self-service reset. */}
      <p className="text-[13px] text-muted">{t('forgot', { email: CONTACT_EMAIL })}</p>
      <p className="text-[13px] text-muted">
        {t('noAccount')}{' '}
        <Link href="/affiliate/register" className="font-semibold text-accent-deep hover:underline">
          {t('registerLink')}
        </Link>
      </p>
    </form>
  );
}
