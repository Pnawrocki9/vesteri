import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CopyEmail from '@/components/CopyEmail';
import JsonLd from '@/components/JsonLd';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import { COMPARISONS, findComparison, type CompareLocale } from '@/content/compare';
import { getPathname, Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { articleAlternates, OG_LOCALE } from '@/lib/metadata';
import { BOOK_CALL_HREF, CONTACT_EMAIL, SITE_URL } from '@/lib/site';

type Props = { params: Promise<{ locale: string; slug: string }> };

const compareUrl = (locale: CompareLocale, slug: string) =>
  `${SITE_URL}${getPathname({ locale, href: { pathname: '/compare/[slug]', params: { slug } } })}`;

/** Every comparison exists in both locales. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    COMPARISONS.map((comparison) => ({ locale, slug: comparison.locales[locale].slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = findComparison(locale as CompareLocale, slug);
  if (!comparison) return {};
  const copy = comparison.locales[locale as CompareLocale];
  const current = OG_LOCALE[locale as CompareLocale];

  const available = Object.fromEntries(
    routing.locales.map((l) => [l, compareUrl(l, comparison.locales[l].slug)]),
  );

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: articleAlternates({ locale: locale as CompareLocale, available }),
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: 'website',
      siteName: 'VESTERI',
      url: available[locale as CompareLocale],
      locale: current,
      alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== current),
      images: [{ url: '/og/vesteri-og.png', width: 1200, height: 630, alt: 'VESTERI' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ['/og/vesteri-og.png'],
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const activeLocale = locale as CompareLocale;
  const comparison = findComparison(activeLocale, slug);
  if (!comparison) notFound();

  const copy = comparison.locales[activeLocale];
  const switchTargets = Object.fromEntries(
    routing.locales.map((l) => [
      l,
      { pathname: '/compare/[slug]', params: { slug: comparison.locales[l].slug } },
    ]),
  );
  const t = await getTranslations('compare');
  const tDev = await getTranslations('developers');
  const tAbout = await getTranslations('about');
  const tNav = await getTranslations('nav');

  // Three-level breadcrumb — the shared helper only knows two, so the list is
  // built here the same way it builds its own.
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'VESTERI',
        item: `${SITE_URL}${getPathname({ locale: activeLocale, href: '/' })}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('heading'),
        item: `${SITE_URL}${getPathname({ locale: activeLocale, href: '/compare' })}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: copy.breadcrumbName,
        item: compareUrl(activeLocale, copy.slug),
      },
    ],
  };

  // FAQ rich-result markup, built from the same items the page renders.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd nodes={[breadcrumb, faqJsonLd]} />
      {/* Nav — same treatment as the other inner pages. The CTA scrolls to
          the closing band, which always offers the address to copy. */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal.svg"
            width={900}
            height={260}
            alt="VESTERI"
            className="block h-7 w-auto sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Link
            href="/compare"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {t('backToList')}
          </Link>
          <Link
            href="/developers"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('nav.developers')}
          </Link>
          <LanguageSwitch targets={switchTargets} />
          <a
            href="#cta"
            className="rounded-btn bg-ink px-2.5 py-3 text-[10px] font-bold tracking-[0.1em] whitespace-nowrap text-paper-alt uppercase transition-[background-color,color] hover:bg-accent hover:text-ink sm:px-6 sm:text-[13px]"
          >
            {t('ctaBtn')}
          </a>
          <MobileNav
            links={[
              { label: t('backToList'), href: getPathname({ locale: activeLocale, href: '/compare' }) },
              {
                label: tAbout('nav.developers'),
                href: getPathname({ locale: activeLocale, href: '/developers' }),
              },
            ]}
            openLabel={tNav('openMenu')}
            closeLabel={tNav('closeMenu')}
          />
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-ink px-6 pt-[72px] pb-20 md:px-14 lg:pt-[110px] lg:pb-[120px]">
          <div className="mx-auto max-w-[1180px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-light uppercase">
              {t('heading')}
            </span>
            <h1 className="mt-5 max-w-[760px] text-[32px] leading-[1.15] font-bold text-balance text-paper-alt sm:text-[40px] xl:text-hero">
              {copy.h1}
            </h1>
            <p className="mt-6 max-w-[680px] text-[18px] leading-[1.7] text-muted-dark">
              {copy.sub}
            </p>
          </div>
        </section>

        {/* The short answer */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
              {copy.verdict.kicker}
            </span>
            <h2 className="mt-3.5 text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {copy.verdict.h2}
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {copy.verdict.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[16.5px] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Side by side */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[1180px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
              {copy.table.kicker}
            </span>
            <h2 className="mt-3.5 mb-10 max-w-[640px] text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {copy.table.h2}
            </h2>
            <div className="overflow-hidden rounded-card border border-line bg-white">
              {/* Header row — desktop only; on phones each cell labels itself. */}
              <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] gap-6 bg-paper-alt/70 px-7 py-4 md:grid">
                <span className="text-[11px] font-bold tracking-[0.16em] text-muted-soft uppercase">
                  {copy.table.dimensionLabel}
                </span>
                <span className="text-[11px] font-bold tracking-[0.16em] text-muted-soft uppercase">
                  {copy.table.competitorLabel}
                </span>
                <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
                  {copy.table.vesteriLabel}
                </span>
              </div>
              {copy.table.rows.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 gap-3 border-t border-line px-7 py-6 md:grid-cols-[1fr_1.2fr_1.2fr] md:gap-6"
                >
                  <strong className="text-[15px] leading-[1.5] font-bold text-ink">
                    {row.dimension}
                  </strong>
                  <p className="text-[13.5px] leading-[1.65] text-muted">
                    <span className="mb-1 block text-[10px] font-bold tracking-[0.14em] text-muted-soft uppercase md:hidden">
                      {copy.table.competitorLabel}
                    </span>
                    {row.them}
                  </p>
                  <p className="border-l-2 border-accent pl-4 text-[13.5px] leading-[1.65] text-ink">
                    <span className="mb-1 block text-[10px] font-bold tracking-[0.14em] text-accent uppercase md:hidden">
                      {copy.table.vesteriLabel}
                    </span>
                    {row.vesteri}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fair is fair */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
              {copy.honest.kicker}
            </span>
            <h2 className="mt-3.5 text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {copy.honest.h2}
            </h2>
            <p className="mt-7 text-[16.5px] leading-[1.8] text-muted">{copy.honest.intro}</p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {copy.honest.points.map((point) => (
                <li key={point.slice(0, 32)} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="bg-dot-gradient mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full"
                  />
                  <span className="text-[15.5px] leading-[1.75] text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What changes with Vesteri — dark card band. */}
        <section className="bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[1180px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-light uppercase">
              {copy.advantage.kicker}
            </span>
            <h2 className="mt-3.5 mb-12 max-w-[640px] text-[28px] font-bold text-balance text-paper-alt md:text-h2-lg">
              {copy.advantage.h2}
            </h2>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
              {copy.advantage.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-3.5 rounded-card border border-surface-dark bg-paper-alt/6 p-[26px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/vesteri-mark-teal-flat.svg"
                    width={400}
                    height={430}
                    loading="lazy"
                    alt=""
                    className="h-[30px] w-auto self-start"
                  />
                  <strong className="text-[16.5px] leading-[1.4] font-bold text-paper-alt">
                    {card.title}
                  </strong>
                  <p className="text-[13.5px] leading-[1.7] text-muted-dark">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
              {copy.faq.kicker}
            </span>
            <h2 className="mt-3.5 mb-9 text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {copy.faq.h2}
            </h2>
            <div className="flex flex-col gap-[18px]">
              {copy.faq.items.map((item) => (
                <div
                  key={item.q}
                  className="flex flex-col gap-2.5 rounded-card border border-line bg-white p-[26px]"
                >
                  <h3 className="text-[16px] leading-[1.45] font-bold text-ink">{item.q}</h3>
                  <p className="text-[14px] leading-[1.75] text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — the closing band from For Developers. */}
        <section
          id="cta"
          className="scroll-mt-[90px] bg-paper-alt bg-[url(/pattern/vesteri-pattern-cream.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]"
        >
          <div className="mx-auto flex max-w-[860px] flex-col items-center gap-[22px] rounded-panel bg-ink p-8 text-center sm:p-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/vesteri-mark-teal-gradient.svg"
              width={400}
              height={430}
              loading="lazy"
              alt=""
              className="h-[72px] w-auto"
            />
            <h2 className="text-[24px] font-bold text-balance text-paper-alt md:text-h2">
              {copy.finalCta.h2}
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-muted-dark">{copy.finalCta.body}</p>
            <a
              href={BOOK_CALL_HREF}
              className="bg-accent-gradient rounded-btn px-9 py-4 text-[14px] font-bold tracking-[0.08em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              {t('ctaBtn')}
            </a>
            <span className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[13px] text-muted-dark transition-colors hover:text-accent-light"
              >
                {CONTACT_EMAIL}
              </a>
              <CopyEmail
                value={CONTACT_EMAIL}
                copyLabel={tDev('cta.copy')}
                copiedLabel={tDev('cta.copied')}
              />
            </span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
