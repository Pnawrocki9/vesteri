import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname } from '@/i18n/routing';

// hreflang alternates for a page: one entry per locale plus x-default
// pointing at the Polish (default-locale) version.
export function localeAlternates(
  href: AppPathname,
  locale: string,
): Metadata['alternates'] {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href })]),
  );
  return {
    canonical: getPathname({ locale: locale as 'pl' | 'en', href }),
    languages: {
      ...languages,
      'x-default': languages[routing.defaultLocale],
    },
  };
}
