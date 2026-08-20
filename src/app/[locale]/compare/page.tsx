import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import { COMPARISONS, type CompareLocale } from '@/content/compare';
import { getPathname, Link } from '@/i18n/navigation';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { localeAlternates, socialMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'compare' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/compare', locale),
    ...socialMetadata({
      href: '/compare',
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}

export default async function CompareIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const activeLocale = locale as CompareLocale;
  const t = await getTranslations('compare');
  const tAbout = await getTranslations('about');
  const tNav = await getTranslations('nav');

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[breadcrumbJsonLd({ href: '/compare', locale: activeLocale, name: t('heading') })]}
      />
      {/* Nav — same treatment as the other inner pages. */}
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
            href="/developers"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('nav.developers')}
          </Link>
          <Link
            href="/about"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('title')}
          </Link>
          <LanguageSwitch />
          <MobileNav
            links={[
              {
                label: tAbout('nav.developers'),
                href: getPathname({ locale: activeLocale, href: '/developers' }),
              },
              { label: tAbout('title'), href: getPathname({ locale: activeLocale, href: '/about' }) },
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
            <h1 className="mt-5 max-w-[720px] text-[32px] leading-[1.15] font-bold text-balance text-paper-alt sm:text-[40px] xl:text-hero">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.7] text-muted-dark">
              {t('lede')}
            </p>
          </div>
        </section>

        {/* Comparison cards */}
        <section className="px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[1180px]">
            <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
              {t('pickKicker')}
            </span>
            <h2 className="mt-3.5 mb-12 max-w-[640px] text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {t('pickTitle')}
            </h2>
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {COMPARISONS.map((comparison) => {
                const copy = comparison.locales[activeLocale];
                return (
                  <Link
                    key={comparison.id}
                    href={{ pathname: '/compare/[slug]', params: { slug: copy.slug } }}
                    className="flex flex-col gap-3 rounded-card border border-line bg-white p-8 transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="bg-accent-gradient h-[3px] w-10 rounded-full" aria-hidden="true" />
                    <h3 className="mt-2 text-[20px] leading-[1.35] font-bold text-ink">
                      {copy.cardTitle}
                    </h3>
                    <p className="text-[14px] leading-[1.75] text-muted">{copy.cardBlurb}</p>
                    <span className="mt-auto pt-2 text-[12px] font-bold tracking-[0.14em] text-accent uppercase">
                      {t('readMore')} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
