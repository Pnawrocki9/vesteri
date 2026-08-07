import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname } from '@/i18n/routing';
import { neutralUrl } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

type Locale = (typeof routing.locales)[number];

// /platform is `noindex, follow` until the platform ships. Listing a noindexed
// page here would be a contradictory signal — the sitemap says "index this",
// the page says the opposite — and Search Console reports it as such. Drop the
// entry from this array the day the noindex comes off.
//
// The negotiating root `/` is absent for a different reason: it answers 307
// towards a locale, and a sitemap should only contain URLs that answer 200.
// Both locale versions of the home page are listed below in its place.
const EXCLUDED: readonly AppPathname[] = ['/platform'];

const INDEXABLE = (Object.keys(routing.pathnames) as AppPathname[]).filter(
  (href) => !EXCLUDED.includes(href),
);

const absolute = (href: AppPathname, locale: Locale) =>
  `${SITE_URL}${getPathname({ locale, href })}`;

// No lastModified: the only date available at build time is the build itself,
// which would claim all 18 pages changed on every deploy. No priority or
// changeFrequency either — Google ignores both.
export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    INDEXABLE.map((href) => ({
      url: absolute(href, locale),
      alternates: {
        languages: {
          ...Object.fromEntries(routing.locales.map((l) => [l, absolute(href, l)])),
          // Same language-neutral target the pages and the Link header use.
          'x-default': neutralUrl(href),
        },
      },
    })),
  );
}
