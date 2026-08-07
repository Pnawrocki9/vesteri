import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

// The language-neutral URL for a page: its default-locale path without the
// locale prefix (`/o-nas`, `/regulamin`, and `/` for the home page). Those
// paths are not dead ends — middleware answers them by negotiating from
// Accept-Language, so /o-nas leads an English visitor to /en/about-us.
//
// This is what x-default is for, and it is already what next-intl advertises
// in the `Link:` response header. Pointing x-default at the Polish version
// instead, as this did, told the two transports different things.
export function neutralPathname(href: AppPathname) {
  const prefixed = getPathname({ locale: routing.defaultLocale, href });
  return prefixed.replace(new RegExp(`^/${routing.defaultLocale}`), '') || '/';
}

// Absolute, and matching how Next writes it. Next resolves every alternate
// through `new URL()`, which renders the site root as "https://www.vesteri.com"
// with no trailing slash — there is no way to make it emit one. So the root
// case drops the slash here too, and the sitemap spells the URL exactly as the
// pages do. (next-intl's own `Link:` header still writes the root as "/", the
// same URL in the other spelling; that header is not ours to format.)
export function neutralUrl(href: AppPathname) {
  const path = neutralPathname(href);
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

// hreflang alternates for a page: one entry per locale plus x-default
// pointing at the language-neutral URL.
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
      'x-default': neutralUrl(href),
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
