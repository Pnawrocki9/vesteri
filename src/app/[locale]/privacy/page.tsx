import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LegalPage from '@/components/LegalPage';
import { localeAlternates, socialMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    title: `VESTERI — ${t('privacy')}`,
    description: t('meta.privacy'),
    alternates: localeAlternates('/privacy', locale),
    ...socialMetadata({
      href: '/privacy',
      locale,
      title: `VESTERI — ${t('privacy')}`,
      description: t('meta.privacy'),
    }),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage page="privacy" locale={locale as 'pl' | 'en'} />;
}
