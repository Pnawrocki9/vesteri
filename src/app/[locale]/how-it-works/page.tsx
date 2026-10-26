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
import '@/components/marketing/how-it-works.css';

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
  const contents = (
    <ol>
      {c.sections.map(({ id, title }) => (
        <li key={id}>
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
      <li>
        <a href="#faq">{c.faqTitle}</a>
      </li>
    </ol>
  );
  return (
    <MarketingShell className="marketing-legal marketing-how-it-works">
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
      <a className="skip" href="#main">
        {c.skipLabel}
      </a>
      <MarketingHeader page={HREF} labels={marketing.raw('header')} />
      <main id="main">
        <section className="legal-hero how-hero" aria-labelledby="how-title">
          <div className="wrap">
            <p className="eyebrow light">{c.eyebrow}</p>
            <h1 id="how-title">{c.h1}</h1>
            <p className="legal-subtitle">{c.lead}</p>
            <div className="how-actions">
              <a className="btn btn-cream" href={MARKETPLACE_URL}>
                {c.ctaApply}
              </a>
              <a className="btn btn-outline" href={MARKETPLACE_URL}>
                {c.ctaBrowse}
              </a>
            </div>
          </div>
        </section>
        <div className="wrap how-layout">
          <aside className="how-navigation">
            <nav
              className="how-desktop-contents"
              aria-labelledby="how-contents"
            >
              <h2 id="how-contents" className="eyebrow">
                {c.contentsTitle}
              </h2>
              {contents}
            </nav>
            <details className="how-mobile-contents">
              <summary>{c.contentsTitle}</summary>
              <nav aria-label={c.contentsTitle}>{contents}</nav>
            </details>
          </aside>
          <article
            className="legal-document how-document"
            aria-labelledby="how-title"
          >
            {c.sections.map(({ id, title, body }) => (
              <section
                className="how-section"
                key={id}
                id={id}
                aria-labelledby={`how-${id}`}
              >
                <h2 id={`how-${id}`}>{title}</h2>
                <MarkdownBody variant="marketing">{body}</MarkdownBody>
              </section>
            ))}
            <section aria-labelledby="how-faq" className="how-faq" id="faq">
              <h2 id="how-faq">{c.faqTitle}</h2>
              {c.faq.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </section>
            <aside className="how-rules">
              <p>{c.rulesNote}</p>
              <Link className="btn btn-primary" href="/collective-rules">
                {c.rulesLink}
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </article>
        </div>
      </main>
      <MarketingFooter locale={locale} audience="agents" />
    </MarketingShell>
  );
}
