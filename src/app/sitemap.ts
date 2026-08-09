import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { articleIndex, articlesByLocale } from '@/generated/articles';
import { routing, type StaticPathname } from '@/i18n/routing';
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
const EXCLUDED: readonly StaticPathname[] = ['/platform'];

// Dynamic routes are dropped here and added below from the article index: a
// pathname template like /articles/[slug] is not a URL.
const INDEXABLE = (Object.keys(routing.pathnames) as StaticPathname[]).filter(
  (href) => !href.includes('[') && !EXCLUDED.includes(href),
);

const absolute = (href: StaticPathname, locale: Locale) =>
  `${SITE_URL}${getPathname({ locale, href })}`;

// No lastModified: the only date available at build time is the build itself,
// which would claim all 18 pages changed on every deploy. No priority or
// changeFrequency either — Google ignores both.
// An article's URL in a locale, or undefined when it was not written for it.
const articleUrl = (id: string, locale: Locale) => {
  const article = articlesByLocale[locale][id];
  return article
    ? `${SITE_URL}${getPathname({ locale, href: { pathname: '/articles/[slug]', params: { slug: article.slug } } })}`
    : undefined;
};

// Articles carry lastModified — unlike the static pages, they have a real date
// to report, and it changes only when the text does.
function articleEntries(): MetadataRoute.Sitemap {
  return articleIndex.flatMap(({ id, locales }) => {
    const urls = Object.fromEntries(
      locales.map((locale) => [locale, articleUrl(id, locale)!]),
    ) as Record<Locale, string>;
    // Only the locales an article exists in — advertising a version that
    // answers 404 is an hreflang reciprocity error.
    const languages = { ...urls, 'x-default': urls[routing.defaultLocale] ?? Object.values(urls)[0] };
    return locales.map((locale) => ({
      url: urls[locale],
      lastModified: articlesByLocale[locale][id].updated,
      alternates: { languages },
    }));
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routing.locales.flatMap((locale) =>
    INDEXABLE
      // The index has nothing to show until the first article ships, and an
      // empty listing is not worth indexing.
      .filter((href) => href !== '/articles' || articleIndex.length > 0)
      .map((href) => ({
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
  return [...pages, ...articleEntries()];
}
