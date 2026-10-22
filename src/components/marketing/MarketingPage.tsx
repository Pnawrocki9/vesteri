import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import BuyersContent from './BuyersContent';
import SellersContent from './SellersContent';
import AgentsContent from './AgentsContent';
import './marketing.css';

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

export type Audience = 'buyers' | 'sellers' | 'agents';
export async function marketingMetadata(
  locale: string,
  audience: Audience,
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: `marketing.${audience}`,
  });
  const href =
    audience === 'buyers'
      ? '/'
      : audience === 'sellers'
        ? '/sellers'
        : '/agents';
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates(href, locale),
    ...socialMetadata({
      href,
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
  };
}
export default function MarketingPage({
  locale,
  audience,
}: {
  locale: string;
  audience: Audience;
}) {
  setRequestLocale(locale);
  const Content =
    audience === 'buyers'
      ? BuyersContent
      : audience === 'sellers'
        ? SellersContent
        : AgentsContent;
  return (
    <div
      className={`marketing marketing-${audience} ${bodyFont.variable} ${displayFont.variable} ${symbolFont.variable}`}
    >
      <Content locale={locale} />
    </div>
  );
}
