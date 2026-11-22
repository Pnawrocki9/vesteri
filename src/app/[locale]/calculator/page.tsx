import type { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import AgentCalculator from '@/components/marketing/AgentCalculator';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import MarketingHeader from '@/components/marketing/MarketingHeader';
import MarketingShell from '@/components/marketing/MarketingShell';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/jsonld';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import '@/components/marketing/legal.css';
import '@/components/marketing/calculator.css';

type Props = { params: Promise<{ locale: string }> };
const HREF = '/calculator' as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'marketing.calculator',
  });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates(HREF, locale),
    ...socialMetadata({
      href: HREF,
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as AppLocale;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'marketing.calculator',
  });
  const agents = await getTranslations({
    locale,
    namespace: 'marketing.agents',
  });
  // The calculator is a client component: hand it the plain label strings.
  const messages = (await getMessages({ locale })) as unknown as {
    marketing: { calculator: Record<string, unknown> };
  };
  const labels = Object.fromEntries(
    Object.entries(messages.marketing.calculator).filter(
      ([, value]) => typeof value === 'string',
    ),
  ) as Record<string, string>;
  return (
    <MarketingShell className="marketing-legal marketing-calculator">
      <JsonLd
        nodes={[
          webPageJsonLd({
            href: HREF,
            locale,
            name: t('meta.title'),
            description: t('meta.description'),
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd({ href: HREF, locale, name: t('meta.title') }),
        ]}
      />
      <a className="skip" href="#main">
        {t('skip')}
      </a>
      <MarketingHeader page={HREF} labels={agents.raw('header')} />
      <main id="main">
        <section className="legal-hero calc-top" aria-labelledby="calc-title">
          <div className="wrap">
            <p className="eyebrow light">{t('eyebrow')}</p>
            <h1 id="calc-title">
              {t('title1')}
              <br />
              <em>{t('title2')}</em>
            </h1>
            <p className="legal-subtitle">{t('intro')}</p>
            <Link className="calc-back" href="/agents">
              {t('back')}
            </Link>
          </div>
        </section>
        <div className="wrap calc-wrap">
          <AgentCalculator labels={labels} locale={locale} />
          <p className="calc-disclaimer">{t('disclaimer')}</p>
        </div>
      </main>
      <MarketingFooter locale={locale} audience="agents" />
    </MarketingShell>
  );
}
