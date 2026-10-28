import { getTranslations } from 'next-intl/server';
import MarkdownBody from '@/components/MarkdownBody';
import MarketingShell from '@/components/marketing/MarketingShell';
import MarketingHeader from '@/components/marketing/MarketingHeader';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import JsonLd from '@/components/JsonLd';
import { legalDocuments, type LegalSlug } from '@/generated/legal';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import './marketing/legal.css';

const LEGAL_PAGES: LegalSlug[] = [
  'privacy',
  'terms',
  'cookies',
  'gdpr',
  'ai',
  'disclaimers',
  'collective-rules',
];

export default async function LegalPage({
  page,
  locale,
}: {
  page: LegalSlug;
  locale: AppLocale;
}) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  const marketing = await getTranslations({
    locale,
    namespace: 'marketing.buyers',
  });
  const document = legalDocuments[locale][page];
  const downloadHref =
    locale === 'pl'
      ? '/docs/collective/v2.0/Regulamin_Vesteri_Collective_v2.0_PL.docx'
      : '/docs/collective/v2.0/Vesteri_Collective_Rules_v2.0_EN.docx';

  return (
    <MarketingShell className="marketing-legal">
      <JsonLd
        nodes={[breadcrumbJsonLd({ href: `/${page}`, locale, name: t(page) })]}
      />
      <MarketingHeader page={`/${page}`} labels={marketing.raw('header')} />

      <main>
        <section className="legal-hero" aria-labelledby="legal-page-title">
          <div className="wrap">
            <p className="eyebrow light">Vesteri Collective</p>
            <h1 id="legal-page-title">{t(page)}</h1>
            <p className="legal-subtitle">{t(`meta.${page}`)}</p>
            {page === 'collective-rules' && (
              <a
                className="btn btn-cream legal-download"
                href={downloadHref}
                download
              >
                {t('downloadOriginal')}
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        </section>

        <div className="wrap legal-layout">
          <aside className="legal-sidebar">
            <nav aria-label={t('sectionLabel')}>
              <p className="eyebrow">{t('sectionLabel')}</p>
              <ul>
                {LEGAL_PAGES.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      aria-current={slug === page ? 'page' : undefined}
                    >
                      {t(slug)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="legal-document" aria-label={t(page)}>
            <MarkdownBody variant="marketing">{document}</MarkdownBody>
          </article>
        </div>
      </main>

      <MarketingFooter locale={locale} audience="buyers" />
    </MarketingShell>
  );
}
