import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalPage from '@/components/LegalPage';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import type { AppLocale } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    // A separate key from the `cookies` label: the short label is what the
    // footers and the document sidebar show, and both locales spell it the
    // same way, which left the two pages sharing one title.
    title: `VESTERI — ${t('cookiesTitle')}`,
    description: t('meta.cookies'),
    alternates: localeAlternates('/cookies', locale),
    ...socialMetadata({
      href: '/cookies',
      locale,
      title: `VESTERI — ${t('cookies')}`,
      description: t('meta.cookies'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage page="cookies" locale={locale as AppLocale} />;
}
