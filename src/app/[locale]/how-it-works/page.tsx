import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import MarkdownBody from '@/components/MarkdownBody';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import MarketingHeader from '@/components/marketing/MarketingHeader';
import MarketingShell from '@/components/marketing/MarketingShell';
import { howItWorks } from '@/content/how-it-works';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/jsonld';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import { MARKETPLACE_URL } from '@/lib/site';
import '@/components/marketing/legal.css';

type Props = { params: Promise<{ locale: string }> };
const HREF = '/how-it-works' as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = howItWorks[locale as AppLocale];
  return {
    title: c.title,
    description: c.description,
    alternates: localeAlternates(HREF, locale),
    ...socialMetadata({
      href: HREF,
      locale,
      title: c.title,
      description: c.description,
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as AppLocale;
  setRequestLocale(locale);
  const c = howItWorks[locale];
  const marketing = await getTranslations({
    locale,
    namespace: 'marketing.agents',
  });
  return (
    <MarketingShell className="marketing-legal">
      <JsonLd
        nodes={[
          webPageJsonLd({
            href: HREF,
            locale,
            name: c.h1,
            description: c.description,
            hasFaq: true,
            hasBreadcrumb: true,
          }),
          breadcrumbJsonLd({ href: HREF, locale, name: c.h1 }),
          faqPageJsonLd({ href: HREF, locale, items: c.faq }),
        ]}
      />
      <MarketingHeader page={HREF} labels={marketing.raw('header')} />
      <main id="main">
        <section className="legal-hero" aria-labelledby="how-title">
          <div className="wrap">
            <p className="eyebrow light">{c.eyebrow}</p>
            <h1 id="how-title">{c.h1}</h1>
            <p className="legal-subtitle">{c.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-cream" href="/agents">
                {c.ctaApply}
              </Link>
              <a className="btn btn-outline" href={MARKETPLACE_URL}>
                {c.ctaBrowse}
              </a>
            </div>
          </div>
        </section>
        <div className="wrap legal-layout">
          <article className="legal-document" aria-labelledby="how-title">
            <MarkdownBody variant="marketing">{c.body}</MarkdownBody>
            <section aria-labelledby="how-faq" className="faq" id="faq">
              <h2 id="how-faq">{c.faqTitle}</h2>
              {c.faq.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </section>
            <p className="legal-subtitle">
              {c.rulesNote}{' '}
              <Link href="/collective-rules">{c.rulesLink}</Link>.
            </p>
          </article>
        </div>
      </main>
      <MarketingFooter locale={locale} audience="agents" />
    </MarketingShell>
  );
}
