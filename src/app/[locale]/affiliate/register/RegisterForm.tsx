'use client';

import { useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { type AffiliateFormState, registerAffiliate } from '../actions';

const inputClass =
  'mt-1.5 w-full rounded-btn border border-line bg-paper px-3 py-2.5 text-[14.5px]';
const labelClass = 'block text-[12px] font-semibold tracking-[0.08em] uppercase';

// The three consent texts are rendered verbatim in English in every locale:
// the wording the affiliate accepts must match the stored terms version
// exactly, so it is deliberately kept out of the translation catalogues.
export default function RegisterForm() {
  const t = useTranslations('affiliate.register');
  const locale = useLocale();
  const [state, formAction, pending] = useActionState<AffiliateFormState, FormData>(
    registerAffiliate,
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          {t('firstName')}
          <input type="text" name="first_name" required autoComplete="given-name" className={inputClass} />
        </label>
        <label className={labelClass}>
          {t('lastName')}
          <input type="text" name="last_name" required autoComplete="family-name" className={inputClass} />
        </label>
        <label className={labelClass}>
          {t('email')}
          <input type="email" name="email" required autoComplete="email" className={inputClass} />
        </label>
        <label className={labelClass}>
          {t('phone')}
          <input type="tel" name="phone" required autoComplete="tel" className={inputClass} />
        </label>
      </div>
      <label className={labelClass}>
        {t('password')}
        <input
          type="password"
          name="password"
          required
          minLength={10}
          autoComplete="new-password"
          className={inputClass}
        />
        <span className="mt-1 block text-[12px] font-normal normal-case text-muted">
          {t('passwordHint')}
        </span>
      </label>

      <fieldset className="mt-2 flex flex-col gap-3 rounded-card border border-line bg-paper p-5">
        <legend className="px-1 text-[12px] font-semibold tracking-[0.08em] uppercase">
          {t('consentHeading')}
        </legend>
        <label className="flex items-start gap-3 text-[13.5px] leading-[1.6]">
          <input type="checkbox" name="consent_terms" required className="mt-1 size-4 shrink-0 accent-(--color-accent)" />
          <span>
            I have read and accept the{' '}
            <Link href="/affiliate/terms" target="_blank" className="text-accent-deep underline">
              Vesteri Affiliate Program Terms
            </Link>{' '}
            (version 2026-08-v1).
          </span>
        </label>
        <label className="flex items-start gap-3 text-[13.5px] leading-[1.6]">
          <input type="checkbox" name="consent_privacy" required className="mt-1 size-4 shrink-0 accent-(--color-accent)" />
          <span>
            I confirm I have read the{' '}
            <Link href="/affiliate/privacy" target="_blank" className="text-accent-deep underline">
              Affiliate Program Privacy Notice
            </Link>{' '}
            and I am at least 18 years old.
          </span>
        </label>
        <label className="flex items-start gap-3 text-[13.5px] leading-[1.6]">
          <input type="checkbox" name="consent_marketing" className="mt-1 size-4 shrink-0 accent-(--color-accent)" />
          <span>
            I would like to receive Program updates and Vesteri property news by email. I can
            unsubscribe at any time.
          </span>
        </label>
        <p className="text-[12px] leading-[1.6] text-muted">
          Data controller: Time2Show, Inc. We process your data to run the Affiliate Program and pay
          commission. Details and your rights:{' '}
          <Link href="/affiliate/privacy" target="_blank" className="text-accent-deep underline">
            Privacy Notice
          </Link>
          .
        </p>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="bg-accent-gradient mt-2 self-start rounded-cta px-7 py-3.5 text-[15px] font-bold text-paper shadow-cta disabled:opacity-60"
      >
        {t('submit')}
      </button>
      <p className="text-[13px] text-muted">
        {t('haveAccount')}{' '}
        <Link href="/affiliate/login" className="font-semibold text-accent-deep hover:underline">
          {t('loginLink')}
        </Link>
      </p>
    </form>
  );
}
