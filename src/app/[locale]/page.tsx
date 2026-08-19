import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import MarketSlider, { type ActiveMarket, type SoonMarket } from '@/components/MarketSlider';
import { articlesByLocale, type ArticleLocale } from '@/generated/articles';
import { countryMaps } from '@/generated/maps';
import { Link } from '@/i18n/navigation';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import './landing.css';

// Display face for the entry landing only. Loaded here rather than in the
// shared layout so the For Developers page keeps Montserrat alone.
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landing' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/', locale),
    // The landing keeps its own shorter social copy — the page title carries
    // the market list, which reads as clutter in a share card.
    ...socialMetadata({
      href: '/',
      locale,
      title: t('meta.ogTitle'),
      description: t('meta.ogDescription'),
    }),
  };
}

type Pillar = { n: string; t: string; d: string };

// Same order as the shared SiteFooter, so the two footers agree.
const LEGAL_PAGES = ['privacy', 'terms', 'cookies', 'gdpr', 'ai', 'disclaimers'] as const;

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('landing');
  const tAbout = await getTranslations('about');
  const tLegal = await getTranslations('legal');
  const tArticles = await getTranslations('articles');
  const tPartners = await getTranslations('partners');
  const hasArticles = Object.keys(articlesByLocale[locale as ArticleLocale] ?? {}).length > 0;
  const pillars = t.raw('pillars') as Pillar[];
  // Live markets carry a relief render; planned ones the generated silhouette.
  // The first entry is the one the panel opens on and the landing's LCP image.
  // Relief renders are licensed stock (Thailand: Alamy 2R5W9WH, Studio Maras,
  // standard licence), re-encoded down to what the panel actually displays.
  const activeMarkets: ActiveMarket[] = [
    {
      key: 'cyp',
      name: t('countries.cyp'),
      coords: t('coords.cyp'),
      alt: t('reliefAlt.cyp'),
      slide: '/img/cyprus-relief-1200.jpg',
      thumb: '/img/cyprus-relief-thumb.jpg',
      width: 1200,
      height: 675,
    },
    {
      key: 'tha',
      name: t('countries.tha'),
      coords: t('coords.tha'),
      alt: t('reliefAlt.tha'),
      slide: '/img/thailand-relief-900.jpg',
      thumb: '/img/thailand-relief-thumb.jpg',
      width: 532,
      height: 900,
    },
  ];
  const soonMarkets: SoonMarket[] = (['esp', 'ita', 'prt'] as const).map((key) => ({
    key,
    name: t(`countries.${key}`),
    svg: countryMaps[key],
  }));

  return (
    <div
      className={`lp-root ${cormorant.variable} relative flex min-h-screen flex-col overflow-x-hidden bg-paper text-ink`}
    >
      <div className="lp-sky" aria-hidden="true" />
      <div className="lp-sun" aria-hidden="true" />

      <header className="relative z-1 flex items-center justify-between border-b border-line px-14 py-[26px] max-[1080px]:px-7 max-[640px]:px-5">
        <span className="flex items-center gap-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-mark-teal-gradient.svg"
            width={400}
            height={430}
            alt=""
            className="block h-[34px] w-auto"
          />
          <span className="text-[17px] font-bold tracking-[0.34em] text-ink max-[640px]:text-[14px] max-[640px]:tracking-[0.24em] max-[430px]:hidden">
            VESTERI
          </span>
        </span>
        <span className="flex items-center gap-2 sm:gap-4">
          {/* Partner offer sits beside the language switch on every top bar,
              in the landing's own primary-button colours. */}
          <Link
            href="/partners"
            className="bg-accent-gradient rounded-btn px-3 py-2 text-[11px] font-bold tracking-[0.1em] whitespace-nowrap text-paper uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift sm:px-4 sm:text-[12px]"
          >
            {tPartners('navCta')}
          </Link>
          <LanguageSwitch />
        </span>
      </header>

      <main className="relative z-1 mx-auto grid w-full max-w-[1360px] flex-1 grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-stretch gap-[72px] px-14 max-[1080px]:grid-cols-1 max-[1080px]:gap-0 max-[1080px]:px-7 max-[640px]:px-5">
        {/* Left column — the promise */}
        <section className="flex flex-col justify-center pt-[72px] pb-16 max-[640px]:pt-12 max-[640px]:pb-10">
          <p className="mb-[26px] text-[12px] font-bold tracking-[0.26em] text-accent-deep uppercase">
            {t('kicker')}
          </p>
          <h1 className="lp-serif mb-[26px] max-w-[560px] text-[64px] leading-[1.06] font-semibold text-balance text-ink max-[1080px]:text-[46px] max-[640px]:text-[34px]">
            {t.rich('h1', {
              br: () => <br />,
              em: (chunks) => <em className="text-accent italic">{chunks}</em>,
            })}
          </h1>
          <p className="mb-11 max-w-[520px] text-[16.5px] leading-[1.75] text-muted">
            {t('lede')}
          </p>

          <div className="mb-12 grid max-w-[640px] grid-cols-2 border-t border-l border-line max-[640px]:grid-cols-1">
            {pillars.map((pillar) => (
              <div
                key={pillar.n}
                className="flex flex-col gap-2 border-r border-b border-line px-[22px] py-5"
              >
                <i className="lp-serif text-[22px] leading-none font-semibold text-accent-light not-italic">
                  {pillar.n}
                </i>
                <h2 className="text-[13.5px] font-bold tracking-[0.02em] text-ink">{pillar.t}</h2>
                <span className="text-[12.5px] leading-[1.6] text-muted">{pillar.d}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/platform"
              className="bg-accent-gradient rounded-btn px-[42px] py-[19px] text-[13.5px] font-bold tracking-[0.1em] text-paper uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift max-[640px]:w-full max-[640px]:px-6 max-[640px]:text-center"
            >
              {t('ctaInvestor')}
            </Link>
            <Link
              href="/developers"
              className="rounded-btn border border-ink px-[42px] py-[18px] text-[13.5px] font-bold tracking-[0.1em] text-ink uppercase transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift max-[640px]:w-full max-[640px]:px-6 max-[640px]:text-center"
            >
              {t('ctaDeveloper')}
            </Link>
            {/* Tertiary route — a plain link, so the two buttons keep their
                hierarchy. */}
            <Link
              href="/about"
              className="text-[13.5px] font-bold tracking-[0.1em] text-muted uppercase transition-colors hover:text-accent-deep max-[640px]:w-full max-[640px]:py-2 max-[640px]:text-center"
            >
              {tAbout('title')}
            </Link>
          </div>
        </section>

        {/* Right column — the cartographic proof */}
        <aside
          aria-label={t('marketsLabel')}
          className="flex flex-col justify-center gap-[30px] border-l border-line py-14 pl-16 max-[1080px]:border-l-0 max-[1080px]:border-t max-[1080px]:pt-10 max-[1080px]:pb-14 max-[1080px]:pl-0"
        >
          <MarketSlider
            active={activeMarkets}
            soon={soonMarkets}
            activeTag={t('activeTag')}
            activeShort={t('activeShort')}
            soonLabel={t('soon')}
          />

          <p className="lp-serif border-l-2 border-accent pl-[18px] text-[19px] leading-[1.55] text-ink italic">
            {t('closing')}
          </p>
        </aside>
      </main>

      {/* The legal documents are reachable from every other template's footer,
          but this is the entry page and it had no route to them at all. */}
      <footer className="relative z-1 flex flex-col gap-3 border-t border-line px-14 py-[18px] max-[1080px]:px-7 max-[640px]:px-5">
        <nav className="flex flex-wrap gap-x-5 gap-y-1.5">
          <Link
            href="/partners"
            className="text-[11px] font-semibold tracking-[0.08em] text-muted transition-colors hover:text-accent-deep"
          >
            {tPartners('navCta')}
          </Link>
          {hasArticles && (
            <Link
              href="/articles"
              className="text-[11px] font-semibold tracking-[0.08em] text-muted transition-colors hover:text-accent-deep"
            >
              {tArticles('heading')}
            </Link>
          )}
          {LEGAL_PAGES.map((slug) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="text-[11px] tracking-[0.08em] text-muted-soft transition-colors hover:text-accent-deep"
            >
              {tLegal(slug)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
          <span className="text-[11px] tracking-[0.08em] text-muted-soft">
            {t('footerCopyright')}
          </span>
          <span className="text-[11px] tracking-[0.08em] text-muted-soft">
            {t('footerMarkets')}
          </span>
        </div>
      </footer>
    </div>
  );
}
