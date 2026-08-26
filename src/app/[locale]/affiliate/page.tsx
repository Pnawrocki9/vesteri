import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import SiteFooter from '@/components/SiteFooter';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { getDb } from '@/lib/affiliate/env';
import { formatAmount } from '@/lib/affiliate/money';
import { getSettings } from '@/lib/affiliate/settings';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import AffiliateNav from './AffiliateNav';

// The headline amounts come from program_settings at request time — a
// prerendered copy would go stale the moment the admin edits them.
export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'affiliate' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/affiliate', locale),
    ...socialMetadata({
      href: '/affiliate',
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}

export default async function AffiliateLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('affiliate');
  const settings = await getSettings(await getDb());

  const commission = formatAmount(settings.commission_amount_cents, settings.currency);
  const discount = formatAmount(settings.discount_amount_cents, settings.currency);
  const open = settings.program_active === 1;
  const steps = t.raw('landing.steps') as { t: string; d: string }[];
  const faq = t.raw('landing.faq') as { q: string; a: string }[];

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[
          breadcrumbJsonLd({
            href: '/affiliate',
            locale: locale as AppLocale,
            name: t('navTitle'),
          }),
        ]}
      />
      <AffiliateNav />

      <main className="mx-auto w-full max-w-[880px] px-6 py-16 md:py-24">
        <h1 className="max-w-[720px] text-[36px] leading-[1.15] font-bold text-balance md:text-hero">
          {t('landing.headline', { commission })}
        </h1>
        <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-muted">
          {t('landing.sub')}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          {open ? (
            <>
              <Link
                href="/affiliate/register"
                className="bg-accent-gradient rounded-cta px-7 py-3.5 text-[15px] font-bold text-paper shadow-cta"
              >
                {t('landing.ctaGet')}
              </Link>
              <Link
                href="/affiliate/login"
                className="rounded-cta border border-line bg-paper px-7 py-3.5 text-[15px] font-bold hover:border-accent hover:text-accent-deep"
              >
                {t('landing.ctaLogin')}
              </Link>
            </>
          ) : (
            <p className="rounded-card border border-line bg-paper px-5 py-4 text-[15px] text-muted">
              {t('landing.closed')}{' '}
              <Link href="/affiliate/login" className="font-semibold text-accent-deep hover:underline">
                {t('landing.ctaLogin')}
              </Link>
            </p>
          )}
        </div>

        <h2 className="mt-20 text-[24px] font-bold md:text-h2">{t('landing.stepsHeading')}</h2>
        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.t} className="rounded-card border border-line bg-paper p-6">
              <span className="bg-dot-gradient inline-flex size-8 items-center justify-center rounded-full text-[14px] font-bold text-paper">
                {index + 1}
              </span>
              <h3 className="mt-4 text-[16px] font-bold">{step.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-muted">
                {step.d
                  .replace('{discount}', discount)
                  .replace('{commission}', commission)}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="mt-20 text-[24px] font-bold md:text-h2">{t('landing.faqHeading')}</h2>
        <dl className="mt-8 flex flex-col gap-6">
          {faq.map((item) => (
            <div key={item.q} className="border-b border-line pb-6">
              <dt className="text-[16px] font-bold">{item.q}</dt>
              <dd className="mt-2 text-[14.5px] leading-[1.7] text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-[13px] text-muted">
          <Link href="/affiliate/terms" className="text-accent-deep hover:underline">
            {t('landing.termsLink')}
          </Link>{' '}
          ·{' '}
          <Link href="/affiliate/privacy" className="text-accent-deep hover:underline">
            {t('landing.privacyLink')}
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
