import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MarketingShell from '@/components/marketing/MarketingShell';
import MarketingHeader from '@/components/marketing/MarketingHeader';
import MarketingFooter from '@/components/marketing/MarketingFooter';
import { localeAlternates } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import '@/components/marketing/legal.css';

type Props = { params: Promise<{ locale: string }> };
const href = '/collective-rules-archive' as const;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legalArchive' });
  return {
    title: t('title'),
    description: t('intro'),
    alternates: localeAlternates(href, locale),
    robots: { index: false, follow: true },
  };
}
export default async function Page({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as AppLocale;
  setRequestLocale(locale);
  const t = await getTranslations('legalArchive');
  const marketing = await getTranslations('marketing.buyers');
  return (
    <MarketingShell className="marketing-legal">
      <MarketingHeader page={href} labels={marketing.raw('header')} />
      <main>
        <section className="legal-hero">
          <div className="wrap">
            <p className="eyebrow light">Vesteri Collective</p>
            <h1>{t('title')}</h1>
            <p className="legal-subtitle">{t('intro')}</p>
            <Link className="btn btn-cream" href="/collective-rules">
              {t('current')}
            </Link>
          </div>
        </section>
        <article className="legal-document rules-archive">
          <h2>{t('versions')}</h2>
          <p>{t('notice')}</p>
          <ul>
            {['1.0', '2.0', '2.1'].map((version) => (
              <li key={version}>
                <a
                  href={`/docs/collective/v${version}/${locale === 'pl' ? `Regulamin_Vesteri_Collective_v${version}_PL.docx` : `Vesteri_Collective_Rules_v${version}_EN.docx`}`}
                  download
                >
                  {t('download', { version })}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <MarketingFooter locale={locale} audience="buyers" />
    </MarketingShell>
  );
}
