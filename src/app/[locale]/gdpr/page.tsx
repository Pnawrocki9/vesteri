import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalPage from '@/components/LegalPage';
import { localeAlternates, socialMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    title: `VESTERI — ${t('gdpr')}`,
    description: t('meta.gdpr'),
    alternates: localeAlternates('/gdpr', locale),
    ...socialMetadata({
      href: '/gdpr',
      locale,
      title: `VESTERI — ${t('gdpr')}`,
      description: t('meta.gdpr'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage page="gdpr" locale={locale as 'pl' | 'en'} />;
}
