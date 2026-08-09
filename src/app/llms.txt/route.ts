import { getPathname } from '@/i18n/navigation';
import { articleIndex, articlesByLocale } from '@/generated/articles';
import { routing, type StaticPathname } from '@/i18n/routing';
import en from '@/messages/en.json';
import pl from '@/messages/pl.json';
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site';

// llms.txt (llmstxt.org) — a plain-text map of the site for language models,
// built from the same routing table and message catalogue as the sitemap so a
// new page or locale turns up here without anyone remembering to edit it.
//
// One English file rather than one per language: the format has no locale
// negotiation, and both language versions of every page are linked below.
//
// Middleware skips any path containing a dot, so /llms.txt is never rewritten
// to a locale prefix.

type Locale = (typeof routing.locales)[number];
type Messages = typeof en;

const MESSAGES: Record<Locale, Messages> = { en, pl: pl as Messages };

const LEGAL = ['privacy', 'terms', 'cookies', 'gdpr', 'ai', 'disclaimers'] as const;

const absolute = (href: StaticPathname, locale: Locale) =>
  `${SITE_URL}${getPathname({ locale, href })}`;

type Entry = { href: StaticPathname; title: string; description?: string };

// Titles and descriptions come straight from the message catalogue — the same
// strings the pages put in <title> and <meta name="description">. Where a page
// has no description yet, the entry carries only its title rather than an
// invented summary.
function entries(locale: Locale): { pages: Entry[]; legal: Entry[] } {
  const m = MESSAGES[locale];
  return {
    pages: [
      { href: '/', title: m.landing.meta.title, description: m.landing.meta.description },
      {
        href: '/developers',
        title: m.developers.title,
        description: m.developers.meta.description,
      },
      { href: '/about', title: m.about.meta.title, description: m.about.meta.description },
      { href: '/platform', title: m.platform.meta.title, description: m.platform.meta.description },
    ],
    legal: LEGAL.map((slug) => ({
      href: `/${slug}` as StaticPathname,
      title: m.legal[slug],
      description: m.legal.meta[slug],
    })),
  };
}

// Articles are addressed by a translated slug, so they cannot go through the
// static-pathname helper above.
function articleEntries(locale: Locale) {
  return articleIndex
    .map(({ id }) => articlesByLocale[locale][id])
    .filter((article) => article !== undefined)
    .map(
      (article) =>
        `- [${article.title}](${SITE_URL}${getPathname({
          locale,
          href: { pathname: '/articles/[slug]', params: { slug: article.slug } },
        })}): ${article.description}`,
    );
}

const line = (entry: Entry, locale: Locale) =>
  `- [${entry.title}](${absolute(entry.href, locale)})` +
  (entry.description ? `: ${entry.description}` : '');

function section(heading: string, list: Entry[], locale: Locale) {
  return [`## ${heading}`, '', ...list.map((entry) => line(entry, locale)), ''].join('\n');
}

function body() {
  const english = entries('en');
  const polish = entries('pl');

  return [
    '# VESTERI',
    '',
    `> ${en.landing.meta.description}`,
    '',
    'Vesteri is a brand of Time2Show, Inc., a Polish-American startup building',
    'technology for the property industry. The site is bilingual: Polish is the',
    'default language and English the second, and every page exists under both a',
    `/pl/ and an /en/ path. The canonical host is ${SITE_URL}.`,
    '',
    section('English pages', english.pages, 'en'),
    ...(articleEntries('en').length
      ? [['## English guides', '', ...articleEntries('en'), ''].join('\n')]
      : []),
    section('English legal documents', english.legal, 'en'),
    section('Polish pages', polish.pages, 'pl'),
    ...(articleEntries('pl').length
      ? [['## Polish guides (Poradnik)', '', ...articleEntries('pl'), ''].join('\n')]
      : []),
    section('Polish legal documents', polish.legal, 'pl'),
    '## Notes',
    '',
    '- The platform page is a placeholder announcing a product that has not shipped',
    '  yet. It is crawlable but carries `noindex, follow` until launch, and is left',
    '  out of the XML sitemap for the same reason.',
    `- Contact: ${CONTACT_EMAIL}`,
    `- XML sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');
}

// Prerendered with the rest of the site — the Workers runtime has no filesystem
// and nothing here depends on the request.
export const dynamic = 'force-static';

export function GET() {
  return new Response(body(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
