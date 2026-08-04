import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { countryMaps } from '@/generated/maps';
import { Link } from '@/i18n/navigation';
import { localeAlternates } from '@/lib/metadata';
import { INVESTOR_PLATFORM_URL } from '@/lib/site';
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

const OG_LOCALE = { pl: 'pl_PL', en: 'en_GB' } as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landing' });
  const current = OG_LOCALE[locale as keyof typeof OG_LOCALE];
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/', locale),
    openGraph: {
      title: t('meta.ogTitle'),
      description: t('meta.ogDescription'),
      type: 'website',
      locale: current,
      alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== current),
    },
  };
}

type Pillar = { n: string; t: string; d: string };

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('landing');
  const tAbout = await getTranslations('about');
  const pillars = t.raw('pillars') as Pillar[];
  const minis = [
    { key: 'esp', name: t('countries.esp') },
    { key: 'ita', name: t('countries.ita') },
    { key: 'prt', name: t('countries.prt') },
  ] as const;

  return (
    <div
      className={`lp-root ${cormorant.variable} relative flex min-h-screen flex-col overflow-x-hidden bg-paper text-ink`}
    >
      <div className="lp-sky" aria-hidden="true" />
      <div className="lp-sun" aria-hidden="true" />

      <header className="relative z-1 flex items-center justify-between border-b border-line px-14 py-[26px] max-[1080px]:px-7 max-[640px]:px-5">
        <span className="flex items-center gap-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-mark-teal-gradient.svg" alt="" className="block h-[34px]" />
          <span className="text-[17px] font-bold tracking-[0.34em] text-ink max-[640px]:text-[14px] max-[640px]:tracking-[0.24em]">
            VESTERI
          </span>
        </span>
        <LanguageSwitch />
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
                <b className="text-[13.5px] font-bold tracking-[0.02em] text-ink">{pillar.t}</b>
                <span className="text-[12.5px] leading-[1.6] text-muted">{pillar.d}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={INVESTOR_PLATFORM_URL}
              className="bg-accent-gradient rounded-btn px-[42px] py-[19px] text-[13.5px] font-bold tracking-[0.1em] text-paper uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift max-[640px]:w-full max-[640px]:px-6 max-[640px]:text-center"
            >
              {t('ctaInvestor')}
            </a>
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
          <div className="relative border border-line bg-paper-alt/80 p-9 pb-7 backdrop-blur-[2px] max-[640px]:p-6 max-[640px]:pb-5">
            <span className="bg-accent-gradient absolute -top-[11px] left-8 rounded-full px-[14px] py-[5px] text-[10px] font-bold tracking-[0.16em] text-paper uppercase max-[640px]:left-5">
              {t('activeTag')}
            </span>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <b className="text-[12px] font-bold tracking-[0.24em] text-ink uppercase">
                {t('countries.cyp')}
              </b>
              <span className="text-[10.5px] tracking-[0.12em] text-muted-soft">
                {t('coordinates')}
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/cyprus-relief.jpg"
              alt={t('reliefAlt')}
              className="lp-relief block h-[300px] w-full object-contain mix-blend-multiply max-[640px]:h-[200px]"
            />
          </div>

          <div className="grid grid-cols-3 gap-[18px] max-[640px]:grid-cols-2">
            {minis.map((mini) => (
              <div
                key={mini.key}
                className="flex flex-col items-center gap-2 border border-line bg-paper/80 px-[14px] pt-4 pb-3"
              >
                <div
                  aria-hidden="true"
                  className="w-full [&_svg]:block [&_svg]:h-[74px] [&_svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: countryMaps[mini.key] }}
                />
                <b className="text-[10.5px] font-bold tracking-[0.18em] text-muted-soft uppercase">
                  {mini.name}
                </b>
                <span className="rounded-full border border-line px-[9px] py-[3px] text-[9px] font-semibold tracking-[0.12em] text-muted-soft uppercase">
                  {t('soon')}
                </span>
              </div>
            ))}
          </div>

          <p className="lp-serif border-l-2 border-accent pl-[18px] text-[19px] leading-[1.55] text-ink italic">
            {t('closing')}
          </p>
        </aside>
      </main>

      <footer className="relative z-1 flex items-center justify-between gap-4 border-t border-line px-14 py-[18px] max-[1080px]:px-7 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2 max-[640px]:px-5">
        <span className="text-[11px] tracking-[0.08em] text-muted-soft">
          {t('footerCopyright')}
        </span>
        <span className="text-[11px] tracking-[0.08em] text-muted-soft">
          {t('footerMarkets')}
        </span>
      </footer>
    </div>
  );
}
