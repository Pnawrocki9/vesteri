import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { countryFlags } from '@/generated/flags';
import { Link } from '@/i18n/navigation';
import { localeAlternates } from '@/lib/metadata';
import {
  BOOK_CALL_HREF,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'developers' });
  return {
    title: t('title'),
    alternates: localeAlternates('/developers', locale),
  };
}

const FLAG_ORDER = ['pl', 'de', 'cz', 'hu', 'lt', 'ro'] as const;
const ACTIVE_SOURCES = new Set(['pl']);

export default async function DevelopersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('developers');
  const tLegal = await getTranslations('legal');
  const stats = t.raw('stats') as { v: string; l: string }[];
  const steps = t.raw('process.steps') as { n: string; t: string; d: string }[];
  const techCards = t.raw('tech.cards') as { t: string; d: string }[];

  return (
    <div className="bg-paper-alt text-ink">
      {/* 2.1 Nav (sticky) */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-6 py-[22px] md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-logo-horizontal.svg" alt="VESTERI" className="block h-11" />
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#jak"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep md:inline"
          >
            {t('nav.how')}
          </a>
          <a
            href="#tech"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep md:inline"
          >
            {t('nav.tech')}
          </a>
          <LanguageSwitch />
          <a
            href="#cta"
            className="rounded-btn bg-ink px-6 py-3 text-[13px] font-bold tracking-[0.1em] text-paper-alt uppercase transition-[background-color,color] hover:bg-accent hover:text-ink"
          >
            {t('nav.cta')}
          </a>
        </div>
      </nav>

      {/* 2.2 Hero */}
      <section className="grid grid-cols-1 items-center gap-[60px] bg-ink px-6 pt-[72px] pb-20 md:px-14 lg:grid-cols-[1.2fr_0.8fr] lg:pt-[110px] lg:pb-[120px]">
        <div className="flex max-w-[640px] flex-col gap-7">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-light uppercase">
            {t('hero.kicker')}
          </span>
          <h1 className="text-[32px] leading-[1.15] font-bold text-balance text-paper-alt sm:text-[40px] xl:text-hero">
            {t('hero.title')}
          </h1>
          <p className="text-[18px] leading-[1.7] text-muted-dark">{t('hero.sub')}</p>
          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="bg-accent-gradient rounded-btn px-8 py-4 text-[14px] font-bold tracking-[0.08em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#jak"
              className="rounded-btn border border-surface-dark px-8 py-4 text-[14px] font-bold tracking-[0.08em] text-paper-alt uppercase transition-[border-color,color] hover:border-accent-light hover:text-accent-light"
            >
              {t('hero.cta2')}
            </a>
          </div>
        </div>
        <div className="w-full max-w-[360px] [perspective:900px] justify-self-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-mark-teal-gradient.svg"
            alt=""
            className="animate-spin-y block w-full [filter:drop-shadow(var(--drop-shadow-mark))]"
          />
        </div>
      </section>

      {/* 2.3 Stat band */}
      <section className="grid grid-cols-1 border-b border-line sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.v}
            className="flex flex-col gap-1.5 border-b border-line px-6 py-9 md:px-10 xl:border-r xl:border-b-0"
          >
            <strong className="text-[26px] font-bold text-ink">{stat.v}</strong>
            <span className="text-[13px] leading-[1.5] text-muted">{stat.l}</span>
          </div>
        ))}
      </section>

      {/* 2.4 Investor-sources band (flags) */}
      <section className="border-b border-line px-6 py-12 md:px-14 md:py-[76px]">
        <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
          {t('sources.kicker')}
        </span>
        <h2 className="mt-3.5 mb-[38px] text-[26px] font-bold text-ink md:text-h2">
          {t('sources.title')}
        </h2>
        <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 xl:grid-cols-6">
          {FLAG_ORDER.map((code) => {
            const active = ACTIVE_SOURCES.has(code);
            return (
              <div key={code} className="flex flex-col items-center gap-3.5">
                <div
                  aria-hidden="true"
                  className={`w-full max-w-[130px] ${
                    active
                      ? '[filter:saturate(1.02)]'
                      : '[filter:grayscale(0.88)_opacity(0.5)]'
                  } [&_svg]:block [&_svg]:h-auto [&_svg]:w-full [&_svg]:overflow-visible`}
                  dangerouslySetInnerHTML={{ __html: countryFlags[code] }}
                />
                <strong
                  className={`text-[14px] font-bold tracking-[0.08em] uppercase ${
                    active ? 'text-ink' : 'text-muted-soft'
                  }`}
                >
                  {t(`sources.countries.${code}`)}
                </strong>
                {active ? (
                  <span className="bg-accent-gradient rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-ink uppercase">
                    {t('sources.active')}
                  </span>
                ) : (
                  <span className="rounded-full border border-line px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-muted-soft uppercase">
                    {t('sources.soon')}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2.5 Process */}
      <section id="jak" className="scroll-mt-[90px] px-6 py-16 md:px-14 md:py-[100px]">
        <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
          {t('process.kicker')}
        </span>
        <h2 className="mt-3.5 mb-12 max-w-[640px] text-[28px] font-bold text-balance text-ink md:text-h2-lg">
          {t('process.title')}
        </h2>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-3 rounded-card border border-line bg-white p-[26px]"
            >
              <span className="text-[13px] font-bold tracking-[0.1em] text-accent">
                {step.n}
              </span>
              <strong className="text-[16px] leading-[1.4] font-bold text-ink">
                {step.t}
              </strong>
              <p className="text-[13.5px] leading-[1.6] text-muted">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2.6 Technology */}
      <section
        id="tech"
        className="scroll-mt-[90px] bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]"
      >
        <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-light uppercase">
          {t('tech.kicker')}
        </span>
        <h2 className="mt-3.5 mb-3 max-w-[640px] text-[28px] font-bold text-balance text-paper-alt md:text-h2-lg">
          {t('tech.title')}
        </h2>
        <p className="mb-12 max-w-[640px] text-[16px] leading-[1.7] text-muted-dark">
          {t('tech.sub')}
        </p>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
          {techCards.map((card) => (
            <div
              key={card.t}
              className="flex flex-col gap-3.5 rounded-card border border-surface-dark bg-paper-alt/6 p-[30px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/vesteri-mark-teal-flat.svg"
                alt=""
                className="h-[34px] self-start"
              />
              <strong className="text-[18px] font-bold text-paper-alt">{card.t}</strong>
              <p className="text-[14px] leading-[1.7] text-muted-dark">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2.7 Closing CTA */}
      <section
        id="cta"
        className="scroll-mt-[90px] border-t border-line bg-paper-alt bg-[url(/pattern/vesteri-pattern-cream.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]"
      >
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-[22px] rounded-panel bg-ink p-8 text-center sm:p-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-mark-teal-gradient.svg" alt="" className="h-[72px]" />
          <h2 className="text-[24px] font-bold text-balance text-paper-alt md:text-h2">
            {t('cta.title')}
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-muted-dark">{t('cta.sub')}</p>
          <a
            href={BOOK_CALL_HREF}
            className="bg-accent-gradient rounded-btn px-9 py-4 text-[14px] font-bold tracking-[0.08em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            {t('cta.btn')}
          </a>
          {/* Fallback for visitors whose browser has no mail handler: the
              address stays readable and copyable even if mailto does nothing. */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[13px] text-muted-dark transition-colors hover:text-accent-light"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      {/* 2.8 Footer */}
      <footer className="bg-ink-deep px-6 pt-[72px] pb-9 md:px-14">
        <h2 className="mb-12 max-w-[720px] text-[24px] font-bold text-balance text-paper-alt md:text-h2">
          {t('footer.title')}
        </h2>
        <div className="grid grid-cols-1 gap-10 border-b border-line-dark pb-11 md:grid-cols-[1fr_auto] md:gap-20">
          <div className="flex flex-col gap-5">
            <Link href="/" className="self-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/vesteri-logo-horizontal-reversed.svg"
                alt="VESTERI"
                className="block h-[38px]"
              />
            </Link>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
                {t('footer.addrLabel')}
              </span>
              <span className="text-[13.5px] leading-[1.7] whitespace-pre-line text-muted-dark">
                {t('footer.addr')}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
                {t('footer.contactLabel')}
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="self-start text-[13.5px] text-muted-dark hover:text-accent-light"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="self-start text-[13.5px] text-muted-dark hover:text-accent-light"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 md:text-right">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
              {t('footer.legalLabel')}
            </span>
            <div className="flex flex-col gap-2.5">
              {(['privacy', 'terms', 'cookies', 'gdpr'] as const).map((page) => (
                <Link
                  key={page}
                  href={`/${page}`}
                  className="text-[13.5px] text-muted-dark hover:text-paper-alt"
                >
                  {tLegal(page)}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-6">
          <span className="text-[12px] text-muted-dark-2">
            {t.rich('footer.madeBy', {
              link: (chunks) => (
                <a
                  href="https://www.estalara.com"
                  rel="noreferrer"
                  className="hover:text-paper-alt"
                >
                  {chunks}
                </a>
              ),
            })}
          </span>
          <span className="text-[12px] whitespace-nowrap text-muted-dark-2">
            {t('footer.copyright')}
          </span>
        </div>
      </footer>
    </div>
  );
}
