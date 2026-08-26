import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import LanguageSwitch from '@/components/LanguageSwitch';
import MarkdownBody from '@/components/MarkdownBody';
import SiteFooter from '@/components/SiteFooter';
import { articleIndex, articlesByLocale, type ArticleLocale } from '@/generated/articles';
import { getPathname, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { getAuthor } from '@/lib/authors';
import { articleAlternates, OG_LOCALE } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

const DATE_LOCALE = { pl: 'pl-PL', en: 'en-GB', es: 'es-ES', de: 'de-DE' } as const;

type Props = { params: Promise<{ locale: string; slug: string }> };

const articleUrl = (locale: ArticleLocale, slug: string) =>
  `${SITE_URL}${getPathname({ locale, href: { pathname: '/articles/[slug]', params: { slug } } })}`;

/** Every published article, in the locales it was written for. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.values(articlesByLocale[locale]).map((article) => ({
      locale,
      slug: article.slug,
    })),
  );
}

// The slug in the URL is the localized one, so an article is found by looking
// it up within its own locale — the Polish and English versions of one piece do
// not share an address.
function findArticle(locale: ArticleLocale, slug: string) {
  const article = Object.values(articlesByLocale[locale]).find((a) => a.slug === slug);
  if (!article) return null;
  const locales = articleIndex.find((entry) => entry.id === article.id)?.locales ?? [locale];
  return { article, locales };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = findArticle(locale as ArticleLocale, slug);
  if (!found) return {};
  const { article, locales } = found;
  const current = OG_LOCALE[locale as ArticleLocale];

  const available = Object.fromEntries(
    locales.map((l) => [l, articleUrl(l, articlesByLocale[l][article.id].slug)]),
  );

  return {
    title: `${article.title} — VESTERI`,
    description: article.description,
    authors: [{ name: getAuthor(article.author).name }],
    alternates: articleAlternates({ locale: locale as ArticleLocale, available }),
    openGraph: {
      title: article.title,
      description: article.description,
      // `article`, not `website`: this is a dated, authored piece, and the type
      // is what lets a share card show the byline and publication date.
      type: 'article',
      siteName: 'VESTERI',
      url: available[locale as ArticleLocale],
      locale: current,
      // Only the languages this piece actually exists in.
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [getAuthor(article.author).name],
      images: [{ url: '/og/vesteri-og.png', width: 1200, height: 630, alt: 'VESTERI' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/og/vesteri-og.png'],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const activeLocale = locale as ArticleLocale;
  const found = findArticle(activeLocale, slug);
  if (!found) notFound();

  const { article } = found;
  const author = getAuthor(article.author);
  // Per-locale switch targets: the article where it exists, the listing where
  // it does not.
  const switchTargets = Object.fromEntries(
    routing.locales.map((l) => {
      const version = articlesByLocale[l][article.id];
      return [
        l,
        version
          ? { pathname: '/articles/[slug]', params: { slug: version.slug } }
          : { pathname: '/articles' },
      ];
    }),
  );
  const t = await getTranslations('articles');
  const tAbout = await getTranslations('about');

  const dateFormat = new Intl.DateTimeFormat(DATE_LOCALE[activeLocale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[
          {
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.published,
            dateModified: article.updated,
            inLanguage: activeLocale,
            author: {
              '@type': 'Person',
              name: author.name,
              url: `${SITE_URL}${getPathname({ locale: activeLocale, href: '/about' })}`,
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
            mainEntityOfPage: articleUrl(activeLocale, article.slug),
            image: `${SITE_URL}/og/vesteri-og.png`,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Vesteri',
                item: `${SITE_URL}${getPathname({ locale: activeLocale, href: '/' })}`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: t('heading'),
                item: `${SITE_URL}${getPathname({ locale: activeLocale, href: '/articles' })}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: articleUrl(activeLocale, article.slug),
              },
            ],
          },
        ]}
      />

      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal.svg"
            width={900}
            height={260}
            alt="VESTERI"
            className="block h-8 w-auto sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Link
            href="/articles"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {t('heading')}
          </Link>
          <Link
            href="/about"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('title')}
          </Link>
          {/* The other language's address, spelled out: slugs are translated,
              so reusing this one would 404 — and a piece written for one market
              may have no version in the other language, in which case the
              reader lands on that language's listing rather than nowhere. */}
          <LanguageSwitch targets={switchTargets} />
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[760px] px-6 py-14 md:px-14 md:py-20">
        <article>
          {/* The H1 comes from the front matter, not the Markdown, so the
              headline, the <title> and the schema headline cannot drift apart.
              Article bodies therefore start at ## — the generator rejects a
              top-level heading. */}
          <h1 className="mb-6 text-[34px] leading-[1.15] font-bold text-balance text-ink md:text-h2-lg">
            {article.title}
          </h1>
          <div className="mb-9 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[12px] tracking-[0.08em] text-muted">
            <span>
              {t('published')}{' '}
              <time dateTime={article.published}>
                {dateFormat.format(new Date(article.published))}
              </time>
            </span>
            {article.updated !== article.published && (
              <span>
                {t('updated')}{' '}
                <time dateTime={article.updated}>
                  {dateFormat.format(new Date(article.updated))}
                </time>
              </span>
            )}
            <span>
              {t('author')}{' '}
              <Link href="/about" className="text-accent hover:text-accent-deep">
                {author.name}
              </Link>
            </span>
          </div>

          <MarkdownBody>{article.body}</MarkdownBody>
        </article>

        <Link
          href="/articles"
          className="mt-14 inline-block text-[13px] font-bold tracking-[0.1em] text-muted uppercase transition-colors hover:text-accent-deep"
        >
          ← {t('backToList')}
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
}
