import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type StaticPathname, type AppLocale } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

// x-default for a page: the absolute URL of its default-locale (Polish)
// version, e.g. https://www.vesteri.com/pl/dla-agentow.
//
// It used to be the unprefixed path (/dla-agentow, and the bare root), which
// middleware answered with a 307 to a negotiated locale. A redirecting,
// non-canonical URL is a poor hreflang target, so x-default names the Polish
// page directly. This does not depend on how `/` redirects: the root keeps
// its 307 Accept-Language negotiation, and x-default for home is /pl.
export function neutralUrl(href: StaticPathname) {
  return `${SITE_URL}${getPathname({ locale: routing.defaultLocale, href })}`;
}

// hreflang alternates for a page: one entry per locale plus x-default
// pointing at the language-neutral URL.
export function localeAlternates(
  href: StaticPathname,
  locale: string,
): Metadata['alternates'] {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href })]),
  );
  return {
    canonical: getPathname({ locale: locale as AppLocale, href }),
    languages: {
      ...languages,
      'x-default': neutralUrl(href),
    },
  };
}

const OG_IMAGE_ALT = {
  pl: 'Vesteri Collective – sieć agentów nieruchomości',
  en: 'Vesteri Collective – real estate agent network',
} as const;

export const OG_LOCALE = { pl: 'pl_PL', en: 'en_GB' } as const;

// One share image for the whole site, composed from the brand assets in
// public/logo and public/pattern. Relative on purpose: metadataBase in the
// root layout resolves it against the canonical host.
const OG_IMAGE = {
  url: '/og/vesteri-og.png',
  width: 1200,
  height: 630,
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
  href: StaticPathname;
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
      siteName: 'Vesteri Collective',
      url: getPathname({ locale: locale as AppLocale, href }),
      locale: current,
      alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== current),
      images: [
        {
          ...OG_IMAGE,
          alt: OG_IMAGE_ALT[locale as keyof typeof OG_IMAGE_ALT] ?? OG_IMAGE_ALT.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
