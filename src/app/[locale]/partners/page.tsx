import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CopyEmail from '@/components/CopyEmail';
import JsonLd from '@/components/JsonLd';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import { getPathname, Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import { PARTNERS_EMAIL } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'partners' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/partners', locale),
    ...socialMetadata({
      href: '/partners',
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('partners');
  const tDev = await getTranslations('developers');
  const tAbout = await getTranslations('about');
  const tNav = await getTranslations('nav');
  const activeLocale = locale as AppLocale;

  const invitation = t.raw('invitation.body') as string[];
  const inventory = t.raw('inventory.body') as string[];
  const technology = t.raw('technology.body') as string[];
  const split = t.raw('split.body') as string[];
  const who = t.raw('who.items') as { t: string; d: string }[];

  // The subject and body live in the message catalogue as plain text;
  // encodeURIComponent turns their CRLFs into the %0D%0A a mailto needs.
  const mailtoHref = `mailto:${PARTNERS_EMAIL}?subject=${encodeURIComponent(
    t('mailto.subject'),
  )}&body=${encodeURIComponent(t('mailto.body'))}`;

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[
          breadcrumbJsonLd({ href: '/partners', locale: activeLocale, name: t('navCta') }),
        ]}
      />
      {/* Nav — same treatment as the For Developers and About pages. The CTA
          scrolls to the closing band rather than opening mail directly: a
          mailto does nothing without a registered mail handler, while the
          band always offers the address to copy. */}
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
          <a
            href="#cta"
            className="rounded-btn bg-ink px-2.5 py-3 text-[10px] font-bold tracking-[0.1em] whitespace-nowrap text-paper-alt uppercase transition-[background-color,color] hover:bg-accent hover:text-ink sm:px-6 sm:text-[13px]"
          >
            {t('navCta')}
          </a>
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
        {/* 1. Hero — the For Developers construction, with the mark held
            still: this page has no entrance animation of its own. */}
        <section className="grid grid-cols-1 items-center gap-[60px] bg-ink px-6 pt-[72px] pb-20 md:px-14 lg:grid-cols-[1.2fr_0.8fr] lg:pt-[110px] lg:pb-[120px]">
          <div className="flex max-w-[640px] flex-col gap-7">
            <h1 className="text-[32px] leading-[1.15] font-bold text-balance text-paper-alt sm:text-[40px] xl:text-hero">
              {t('hero.title')}
            </h1>
            <p className="text-[18px] leading-[1.7] text-muted-dark">{t('hero.sub')}</p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href={mailtoHref}
                className="bg-accent-gradient rounded-btn px-8 py-4 text-[14px] font-bold tracking-[0.08em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
              >
                {t('hero.cta')}
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-mark-teal-gradient.svg"
            width={400}
            height={430}
            alt=""
            className="block w-full max-w-[320px] justify-self-center [filter:drop-shadow(var(--drop-shadow-mark))]"
          />
        </section>

        {/* 2. The invitation */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {t('invitation.heading')}
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {invitation.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[16.5px] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            {/* Standalone accent line — the About page's closing treatment. */}
            <p className="mt-10 border-l-2 border-accent pl-6 text-[19px] leading-[1.7] font-medium text-ink">
              {t('invitation.accent')}
            </p>
          </div>
        </section>

        {/* 3. Our inventory, your clients */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {t('inventory.heading')}
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {inventory.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[16.5px] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our technology, your show — the dark treatment the site
            already uses for its live-webinar technology story. */}
        <section className="bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[28px] font-bold text-balance text-paper-alt md:text-h2-lg">
              {t('technology.heading')}
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {technology.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[16.5px] leading-[1.8] text-muted-dark"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The split */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {t('split.heading')}
            </h2>
            <div className="mt-7 flex flex-col gap-6">
              {split.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[16.5px] leading-[1.8] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Who we're looking for — the team-card pattern from About. */}
        <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-[28px] font-bold text-balance text-ink md:text-h2-lg">
              {t('who.heading')}
            </h2>
            <div className="mt-9 grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {who.map((item) => (
                <article
                  key={item.t}
                  className="flex flex-col gap-3 rounded-card border border-line bg-white p-8"
                >
                  <span className="bg-accent-gradient h-[3px] w-10 rounded-full" aria-hidden="true" />
                  <h3 className="mt-2 text-[20px] font-bold text-ink">{item.t}</h3>
                  <p className="text-[14px] leading-[1.75] text-muted">{item.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-12 max-w-[760px] border-l-2 border-accent pl-6 text-[19px] leading-[1.7] font-medium text-ink">
              {t('who.closing')}
            </p>
          </div>
        </section>

        {/* 7. Final CTA — the closing band from For Developers, with the
            address rendered visibly for anyone who would rather copy it than
            trust a mailto link. */}
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
              {t('cta.title')}
            </h2>
            <p className="text-[15.5px] leading-[1.7] text-muted-dark">{t('cta.sub')}</p>
            <a
              href={mailtoHref}
              className="bg-accent-gradient rounded-btn px-9 py-4 text-[14px] font-bold tracking-[0.08em] text-ink uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              {t('cta.btn')}
            </a>
            <span className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={mailtoHref}
                className="text-[13px] text-muted-dark transition-colors hover:text-accent-light"
              >
                {PARTNERS_EMAIL}
              </a>
              <CopyEmail
                value={PARTNERS_EMAIL}
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
