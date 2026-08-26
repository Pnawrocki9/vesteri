import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import { articleIndex, articlesByLocale, type ArticleLocale } from '@/generated/articles';
import { getPathname, Link } from '@/i18n/navigation';
import { routing, type AppLocale } from '@/i18n/routing';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { articleAlternates, socialMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

const DATE_LOCALE = { pl: 'pl-PL', en: 'en-GB', es: 'es-ES', de: 'de-DE' } as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'articles' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    // Only the languages that actually have a listing. The Polish one exists
    // as soon as a Polish-market piece ships; the English one may not, and
    // pointing at it would advertise a 404.
    alternates: articleAlternates({
      locale: locale as ArticleLocale,
      available: Object.fromEntries(
        routing.locales
          .filter((l) => Object.keys(articlesByLocale[l]).length > 0)
          .map((l) => [l, `${SITE_URL}${getPathname({ locale: l, href: '/articles' })}`]),
      ),
    }),
    ...socialMetadata({
      href: '/articles',
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}

export default async function ArticlesIndex({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = locale as AppLocale;
  const t = await getTranslations('articles');
  const tAbout = await getTranslations('about');
  const tDev = await getTranslations('developers');
  const tNav = await getTranslations('nav');

  const published = articleIndex
    .map(({ id }) => articlesByLocale[activeLocale][id])
    .filter((article) => article !== undefined);

  // Nothing written in this language yet. A listing with no entries is not a
  // page worth serving or indexing, so it does not exist until it has content.
  if (published.length === 0) notFound();

  const dateFormat = new Intl.DateTimeFormat(DATE_LOCALE[activeLocale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[breadcrumbJsonLd({ href: '/articles', locale: activeLocale, name: t('heading') })]}
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
            href="/about"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('title')}
          </Link>
          <Link
            href="/developers"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('nav.developers')}
          </Link>
          <LanguageSwitch />
          <MobileNav
            links={[
              { label: tAbout('title'), href: getPathname({ locale: activeLocale, href: '/about' }) },
              {
                label: tAbout('nav.developers'),
                href: getPathname({ locale: activeLocale, href: '/developers' }),
              },
              {
                label: tDev('nav.listings'),
                href: getPathname({ locale: activeLocale, href: '/platform' }),
              },
            ]}
            openLabel={tNav('openMenu')}
            closeLabel={tNav('closeMenu')}
          />
        </div>
      </nav>

      <main>
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <h1 className="text-[40px] leading-[1.1] font-bold text-balance text-ink sm:text-[52px]">
              {t('heading')}
            </h1>
            <p className="mt-6 text-[18px] leading-[1.7] text-muted">{t('lede')}</p>
          </div>
        </section>

        <section className="px-6 py-16 md:px-14 md:py-[100px]">
          <ul className="mx-auto flex max-w-[760px] flex-col gap-[18px]">
            {published.map((article) => (
              <li key={article.id}>
                <Link
                  href={{ pathname: '/articles/[slug]', params: { slug: article.slug } }}
                  className="block rounded-card border border-line bg-white p-8 transition-colors hover:border-accent-light"
                >
                  <time
                    dateTime={article.published}
                    className="text-[12px] font-bold tracking-[0.16em] text-accent uppercase"
                  >
                    {dateFormat.format(new Date(article.published))}
                  </time>
                  <h2 className="mt-3 text-[22px] leading-[1.3] font-bold text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.75] text-muted">
                    {article.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
