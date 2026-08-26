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
    title: `VESTERI — ${t('disclaimers')}`,
    description: t('meta.disclaimers'),
    alternates: localeAlternates('/disclaimers', locale),
    ...socialMetadata({
      href: '/disclaimers',
      locale,
      title: `VESTERI — ${t('disclaimers')}`,
      description: t('meta.disclaimers'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage page="disclaimers" locale={locale as AppLocale} />;
}
