import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CollectiveHomepage from '@/components/home/CollectiveHomepage';
import { localeAlternates, socialMetadata } from '@/lib/metadata';

const bodyFont = localFont({
  src: [
    { path: '../../fonts/dm-sans-latin-ext.woff2', weight: '400 700' },
    { path: '../../fonts/dm-sans-latin.woff2', weight: '400 700' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});
const displayFont = localFont({
  src: [
    { path: '../../fonts/manrope-latin-ext.woff2', weight: '400 800' },
    { path: '../../fonts/manrope-latin.woff2', weight: '400 800' },
  ],
  variable: '--font-manrope',
  display: 'swap',
});
const symbolFont = localFont({
  src: [
    { path: '../../fonts/ui-symbols.ttf' },
    { path: '../../fonts/ui-arrows.ttf' },
  ],
  variable: '--font-ui-symbols',
  display: 'swap',
});
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'collective' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/', locale),
    ...socialMetadata({
      href: '/',
      locale,
      title: t('meta.title'),
      description: t('meta.ogDescription'),
    }),
  };
}
export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <CollectiveHomepage
      locale={locale}
      fontClass={`${bodyFont.variable} ${displayFont.variable} ${symbolFont.variable}`}
    />
  );
}
