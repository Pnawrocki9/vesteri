import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { countryMaps } from '@/generated/maps';
import { Link } from '@/i18n/navigation';
import { localeAlternates } from '@/lib/metadata';
import { INVESTOR_PLATFORM_URL } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landing' });
  return {
    title: t('title'),
    alternates: localeAlternates('/', locale),
  };
}

function MapCard({
  country,
  name,
  active,
  tag,
}: {
  country: keyof typeof countryMaps;
  name: string;
  active?: boolean;
  tag: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-2.5 max-[900px]:w-[180px]">
      <div
        aria-hidden="true"
        className="w-full [&_svg]:h-[150px] [&_svg]:w-full [&_svg]:overflow-visible"
        dangerouslySetInnerHTML={{ __html: countryMaps[country] }}
      />
      <span
        className={`text-[13px] font-bold tracking-[0.22em] uppercase ${
          active ? 'text-ink' : 'text-muted-soft'
        }`}
      >
        {name}
      </span>
      {active ? (
        <span className="bg-accent-gradient rounded-full px-[13px] py-[5px] text-[10px] font-bold tracking-[0.14em] text-ink uppercase">
          {tag}
        </span>
      ) : (
        <span className="rounded-full border border-line px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-muted-soft uppercase">
          {tag}
        </span>
      )}
    </div>
  );
}

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('landing');
  const points = t.raw('points') as string[];

  const colClass =
    'flex w-full max-w-[280px] flex-col gap-9 max-[900px]:max-w-none max-[900px]:flex-row max-[900px]:justify-center';

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <LanguageSwitch variant="fixed" />

      <main className="mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-[1fr_auto_1fr] items-center justify-items-center gap-6 px-12 pt-14 pb-8 max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:px-6">
        <div className={colClass}>
          <MapCard country="esp" name={t('countries.esp')} tag={t('soon')} />
          <MapCard country="prt" name={t('countries.prt')} tag={t('soon')} />
        </div>

        <div className="flex flex-col items-center gap-[18px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-mark-teal-gradient.svg" alt="" className="h-[190px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-wordmark.svg" alt="VESTERI" className="h-11" />
          <div className="mt-1.5 max-w-[420px] text-left text-[14.5px] leading-[1.7] text-muted">
            <p className="mb-[22px] text-center text-[17px] leading-[1.5] font-semibold text-ink">
              {t('lead')}
            </p>
            <ul className="mb-[26px] flex flex-col gap-[11px]">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-[11px]">
                  <span
                    aria-hidden="true"
                    className="bg-dot-gradient mt-2 h-[5px] w-[5px] flex-none rounded-full"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <p className="border-t border-accent pt-[22px] text-center text-[16.5px] leading-[1.6] font-medium text-ink italic">
              {t('closing')}
            </p>
          </div>
        </div>

        <div className={colClass}>
          <MapCard country="cyp" name={t('countries.cyp')} tag={t('activeTag')} active />
          <MapCard country="ita" name={t('countries.ita')} tag={t('soon')} />
        </div>
      </main>

      <nav className="flex flex-wrap justify-center gap-6 px-12 pt-2 pb-[72px]">
        <a
          href={INVESTOR_PLATFORM_URL}
          className="bg-accent-gradient rounded-cta px-14 py-[22px] text-[15px] font-bold tracking-[0.12em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
        >
          {t('ctaInvestor')}
        </a>
        <Link
          href="/developers"
          className="rounded-cta bg-ink px-14 py-[22px] text-[15px] font-bold tracking-[0.12em] text-paper-alt uppercase shadow-cta-dark transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
        >
          {t('ctaDeveloper')}
        </Link>
      </nav>
    </div>
  );
}
