import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localeAlternates, socialMetadata } from '@/lib/metadata';
import BuyersContent from './BuyersContent';
import SellersContent from './SellersContent';
import AgentsContent from './AgentsContent';
import MarketingShell from './MarketingShell';

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
    <MarketingShell className={`marketing-${audience}`}>
      <Content locale={locale} />
    </MarketingShell>
  );
}
