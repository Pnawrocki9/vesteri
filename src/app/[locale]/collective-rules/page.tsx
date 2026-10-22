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
    title: `VESTERI — ${t('collective-rules')}`,
    description: t('meta.collective-rules'),
    alternates: localeAlternates('/collective-rules', locale),
    ...socialMetadata({
      href: '/collective-rules',
      locale,
      title: `VESTERI — ${t('collective-rules')}`,
      description: t('meta.collective-rules'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage page="collective-rules" locale={locale as AppLocale} />;
}
