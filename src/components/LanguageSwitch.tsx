'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';

// Client-side language toggle. Shows the label of the *other* language and
// navigates to the same view in that locale; next-intl persists the choice
// in a cookie so future visits keep it.
export default function LanguageSwitch({
  variant = 'inline',
  tone = 'light',
}: {
  variant?: 'fixed' | 'inline';
  // `dark` inverts the outline for placement on the ink ground.
  tone?: 'light' | 'dark';
}) {
  const t = useTranslations('langSwitch');
  const locale = useLocale();
  const other = locale === 'pl' ? 'en' : 'pl';
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    <button
      type="button"
      aria-label={t('label')}
      onClick={() =>
        router.replace(
          // Pass through dynamic params (none today, but future-proof).
          // @ts-expect-error -- pathname/params pair is valid at runtime
          { pathname, params },
          { locale: other },
        )
      }
      className={`${variant === 'fixed' ? 'fixed top-6 right-7 z-20 ' : ''}${
        tone === 'dark'
          ? 'border-surface-dark text-paper-alt hover:bg-paper-alt hover:text-ink'
          : 'border-ink text-ink hover:bg-ink hover:text-paper-alt'
      } cursor-pointer rounded-btn border px-3.5 py-2 text-[12px] font-bold tracking-[0.1em] uppercase transition-[background-color,color]`}
    >
      {other}
    </button>
  );
}
