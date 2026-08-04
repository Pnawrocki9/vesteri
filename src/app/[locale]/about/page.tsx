import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import SiteFooter from '@/components/SiteFooter';
import { getPathname, Link } from '@/i18n/navigation';
import { localeAlternates } from '@/lib/metadata';
import { INVESTOR_PLATFORM_URL } from '@/lib/site';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/about', locale),
  };
}

type Member = { name: string; role: string; bio: string };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const whoParagraphs = t.raw('who.paragraphs') as string[];
  const members = t.raw('team.members') as Member[];
  const whyParagraphs = t.raw('why.paragraphs') as string[];

  // The closing CTA lives on the For Developers page, so the nav button
  // points at that section rather than opening mail from here.
  const ctaHref = `${getPathname({ locale: locale as 'pl' | 'en', href: '/developers' })}#cta`;

  return (
    <div className="bg-paper-alt text-ink">
      {/* Nav — same treatment as the For Developers page */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-logo-horizontal.svg" alt="VESTERI" className="block h-8 sm:h-11" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <Link
            href="/developers"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep md:inline"
          >
            {t('nav.developers')}
          </Link>
          <a
            href={INVESTOR_PLATFORM_URL}
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep md:inline"
          >
            {t('nav.listings')}
          </a>
          <LanguageSwitch />
          <a
            href={ctaHref}
            className="rounded-btn bg-ink px-4 py-3 text-[11px] font-bold tracking-[0.1em] whitespace-nowrap text-paper-alt uppercase transition-[background-color,color] hover:bg-accent hover:text-ink sm:px-6 sm:text-[13px]"
          >
            {t('nav.cta')}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-10 bg-ink px-6 pt-[72px] pb-20 md:px-14 lg:grid-cols-[1.2fr_0.8fr] lg:pt-[110px] lg:pb-[120px]">
        <h1 className="text-[44px] leading-[1.05] font-bold text-balance text-paper-alt sm:text-[64px] xl:text-[76px]">
          {t('title')}
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/vesteri-mark-teal-gradient.svg"
          alt=""
          className="block w-full max-w-[190px] justify-self-center [filter:drop-shadow(var(--drop-shadow-mark))] lg:max-w-[260px] lg:justify-self-end"
        />
      </section>

      {/* Who we are */}
      <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
        <div className="mx-auto max-w-[760px]">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
            {t('who.heading')}
          </span>
          <div className="mt-7 flex flex-col gap-6">
            {whoParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-[16.5px] leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-line px-6 py-16 md:px-14 md:py-[100px]">
        <div className="mx-auto max-w-[1180px]">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-deep uppercase">
            {t('team.heading')}
          </span>
          <div className="mt-9 grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => (
              <article
                key={member.name}
                className="flex flex-col gap-3 rounded-card border border-line bg-white p-8"
              >
                <span className="bg-accent-gradient h-[3px] w-10 rounded-full" aria-hidden="true" />
                <h2 className="mt-2 text-[20px] font-bold text-ink">{member.name}</h2>
                <span className="text-[12px] font-bold tracking-[0.16em] text-accent uppercase">
                  {member.role}
                </span>
                <p className="mt-1 text-[14px] leading-[1.75] text-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why we are building Vesteri */}
      <section className="bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] px-6 py-16 md:px-14 md:py-[100px]">
        <div className="mx-auto max-w-[760px]">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-accent-light uppercase">
            {t('why.heading')}
          </span>
          <div className="mt-7 flex flex-col gap-6">
            {whyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[16.5px] leading-[1.8] text-muted-dark"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-12 border-l-2 border-accent-light pl-6 text-[19px] leading-[1.7] font-medium text-balance text-paper-alt">
            {t('why.closing')}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
