'use client';

import { useActionState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { type AffiliateFormState, changeAffiliatePassword } from '../actions';

const inputClass =
  'mt-1.5 w-full rounded-btn border border-line bg-paper px-3 py-2.5 text-[14.5px]';
const labelClass = 'block text-[12px] font-semibold tracking-[0.08em] uppercase';

export default function PasswordForm() {
  const t = useTranslations('affiliate.dashboard');
  const locale = useLocale();
  const [state, formAction, pending] = useActionState<AffiliateFormState, FormData>(
    changeAffiliatePassword,
    {},
  );

  return (
    <form action={formAction} className="mt-4 flex max-w-[380px] flex-col gap-4">
      <input type="hidden" name="locale" value={locale} />
      {state.error && (
        <p
          role="alert"
          className="rounded-btn border border-red-300 bg-red-50 px-4 py-2.5 text-[13.5px] text-red-800"
        >
          {t(`passwordErrors.${state.error}`)}
        </p>
      )}
      {state.ok && (
        <p className="rounded-btn border border-accent bg-accent/10 px-4 py-2.5 text-[13.5px] text-accent-deep">
          {t('passwordSaved')}
        </p>
      )}
      <label className={labelClass}>
        {t('currentPassword')}
        <input
          type="password"
          name="current_password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {t('newPassword')}
        <input
          type="password"
          name="new_password"
          required
          minLength={10}
          autoComplete="new-password"
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-btn border border-line bg-paper px-5 py-2.5 text-[13.5px] font-semibold hover:border-accent hover:text-accent-deep disabled:opacity-60"
      >
        {t('passwordSubmit')}
      </button>
    </form>
  );
}
