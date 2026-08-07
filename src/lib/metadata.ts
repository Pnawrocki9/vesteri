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

export const OG_LOCALE = { pl: 'pl_PL', en: 'en_GB' } as const;

// One share image for the whole site, composed from the brand assets in
// public/logo and public/pattern. Relative on purpose: metadataBase in the
// root layout resolves it against the canonical host.
const OG_IMAGE = {
  url: '/og/vesteri-og.png',
  width: 1200,
  height: 630,
  alt: 'VESTERI',
} as const;

// Open Graph and Twitter tags for a page.
//
// Next.js replaces the `openGraph` object wholesale when a segment defines one
// — it does not merge it with the layout's — so a page that sets only a title
// would silently drop the share image. Everything a card needs is therefore
// built here in one place, and pages spread the result.
export function socialMetadata({
  href,
  locale,
  title,
  description,
}: {
  href: AppPathname;
  locale: string;
  title: string;
  description?: string;
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const current = OG_LOCALE[locale as keyof typeof OG_LOCALE];
  return {
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'VESTERI',
      url: getPathname({ locale: locale as 'pl' | 'en', href }),
      locale: current,
      alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== current),
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
