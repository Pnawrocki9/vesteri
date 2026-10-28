import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import MarkdownBody from '@/components/MarkdownBody';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import MarketingHeader from '@/components/marketing/MarketingHeader';
import MarketingShell from '@/components/marketing/MarketingShell';
import {
  GUIDES_PUBLISHED,
  GUIDES_MODIFIED,
  getGuide,
  type GuidePathname,
} from '@/content/guides-pl';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from '@/lib/jsonld';
import { polishOnlyAlternates, socialMetadata } from '@/lib/metadata';
import '@/components/marketing/legal.css';
import '@/components/marketing/how-it-works.css';

// Polish-only guide / city page. Same layout as /jak-dziala-vesteri-collective.
export async function guideMetadata(
  href: GuidePathname,
  locale: string,
): Promise<Metadata> {
  if (locale !== 'pl') return {};
  const g = getGuide(href);
  return {
    title: g.title,
    description: g.description,
    alternates: polishOnlyAlternates(href),
    ...socialMetadata({
      href,
      locale,
      title: g.title,
      description: g.description,
    }),
  };
}

export default async function GuidePage({
  href,
  locale,
}: {
  href: GuidePathname;
  locale: string;
}) {
  if (locale !== 'pl') notFound();
  setRequestLocale('pl');
  const g = getGuide(href);
  const marketing = await getTranslations({
    locale: 'pl',
    namespace: 'marketing.agents',
  });
  const isArticle = g.kind === 'article';
  const contents = (
    <ol>
      {g.sections.map(({ id, title }) => (
        <li key={id}>
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
      <li>
        <a href="#faq">Najczęstsze pytania</a>
      </li>
    </ol>
  );
  return (
    <MarketingShell className="marketing-legal marketing-how-it-works">
      <JsonLd
        nodes={[
          webPageJsonLd({
            href,
            locale: 'pl',
            name: g.h1,
            description: g.description,
            hasFaq: !isArticle,
            hasBreadcrumb: true,
          }),
          ...(isArticle
            ? [
                articleJsonLd({
                  href,
                  locale: 'pl',
                  headline: g.h1,
                  description: g.description,
                  datePublished: GUIDES_PUBLISHED,
                  dateModified: GUIDES_MODIFIED,
                }),
              ]
            : []),
          breadcrumbJsonLd({ href, locale: 'pl', name: g.breadcrumb }),
          faqPageJsonLd({ href, locale: 'pl', items: g.faq }),
        ]}
      />
      <a className="skip" href="#main">
        Przejdź do treści
      </a>
      <MarketingHeader page={href} plOnly labels={marketing.raw('header')} />
      <main id="main">
        <section className="legal-hero how-hero" aria-labelledby="guide-title">
          <div className="wrap">
            <p className="eyebrow light">{g.eyebrow}</p>
            <h1 id="guide-title">{g.h1}</h1>
            <p className="legal-subtitle">{g.lead}</p>
            <div className="how-actions">
              {g.ctas.map((c, i) => (
                <a
                  key={c.href}
                  className={i === 0 ? 'btn btn-cream' : 'btn btn-outline'}
                  href={c.href.startsWith('http') || c.href.startsWith('#') ? c.href : `/pl${c.href === '/' ? '' : localPath(c.href)}`}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="wrap how-layout">
          <aside className="how-navigation">
            <nav className="how-desktop-contents" aria-labelledby="guide-contents">
              <h2 id="guide-contents" className="eyebrow">
                Spis treści
              </h2>
              {contents}
            </nav>
            <details className="how-mobile-contents">
              <summary>Spis treści</summary>
              <nav aria-label="Spis treści">{contents}</nav>
            </details>
          </aside>
          <article className="legal-document how-document" aria-labelledby="guide-title">
            {g.sections.map(({ id, title, body }) => (
              <section className="how-section" key={id} id={id} aria-labelledby={`g-${id}`}>
                <h2 id={`g-${id}`}>{title}</h2>
                <MarkdownBody variant="marketing">{body}</MarkdownBody>
              </section>
            ))}
            <section aria-labelledby="g-faq" className="how-faq" id="faq">
              <h2 id="g-faq">Najczęstsze pytania</h2>
              {g.faq.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </section>
            <section className="how-section" aria-labelledby="g-related">
              <h2 id="g-related">Zobacz też</h2>
              <ul>
                {g.related.map((r) => (
                  <li key={r.href}>
                    <a href={r.href}>{r.label}</a>
                  </li>
                ))}
              </ul>
            </section>
            <section className="how-section" aria-labelledby="g-sources">
              <h2 id="g-sources">Źródła</h2>
              <MarkdownBody variant="marketing">{g.sources}</MarkdownBody>
              {isArticle && (
                <p>
                  Autor: Zespół Vesteri Collective · Opublikowano:{' '}
                  <time dateTime={GUIDES_PUBLISHED}>26.10.2026</time>
                </p>
              )}
            </section>
          </article>
        </div>
      </main>
      <MarketingFooter locale="pl" audience="agents" />
    </MarketingShell>
  );
}

const PL_PATHS: Record<string, string> = {
  '/sellers': '/sprzedajacy',
  '/agents': '/dla-agentow',
};
function localPath(href: string) {
  return PL_PATHS[href] ?? href;
}
