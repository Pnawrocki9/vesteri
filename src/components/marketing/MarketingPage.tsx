import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import type { AppLocale, StaticPathname } from '@/i18n/routing';
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/jsonld';
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
// Message keys of the visible FAQ on each page: question = faqNN, answer =
// faqNN+1, exactly as the *Content components render them in <summary>/<p>.
const FAQ_RANGE: Record<Audience, [number, number]> = {
  buyers: [3, 17],
  sellers: [3, 15],
  agents: [3, 25],
};
const HREF: Record<Audience, StaticPathname> = {
  buyers: '/',
  sellers: '/sellers',
  agents: '/agents',
};

async function MarketingJsonLd({
  locale,
  audience,
}: {
  locale: AppLocale;
  audience: Audience;
}) {
  const t = await getTranslations({ locale, namespace: `marketing.${audience}` });
  const href = HREF[audience];
  const [first, last] = FAQ_RANGE[audience];
  const key = (n: number) => `faq${String(n).padStart(2, '0')}`;
  const items: { q: string; a: string }[] = [];
  for (let n = first; n <= last; n += 2)
    items.push({ q: t(key(n)), a: t(key(n + 1)) });
  const isHome = audience === 'buyers';
  return (
    <JsonLd
      nodes={[
        webPageJsonLd({
          href,
          locale,
          name: t('meta.title'),
          description: t('meta.description'),
          hasFaq: true,
          hasBreadcrumb: !isHome,
        }),
        ...(isHome
          ? []
          : [breadcrumbJsonLd({ href, locale, name: t('meta.title') })]),
        faqPageJsonLd({ href, locale, items }),
      ]}
    />
  );
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
      <MarketingJsonLd locale={locale as AppLocale} audience={audience} />
      <Content locale={locale} />
    </MarketingShell>
  );
}
