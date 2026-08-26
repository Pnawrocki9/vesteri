import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MarkdownBody from '@/components/MarkdownBody';
import SiteFooter from '@/components/SiteFooter';
import { AFFILIATE_PRIVACY_MD } from '@/content/affiliate-legal';
import { localeAlternates } from '@/lib/metadata';
import AffiliateNav from '../AffiliateNav';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'affiliate' });
  return {
    title: t('meta.privacyTitle'),
    alternates: localeAlternates('/affiliate/privacy', locale),
  };
}

// Rendered verbatim in English in every locale — legal wording is not
// translated. See src/content/affiliate-legal.ts.
export default async function AffiliatePrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="bg-paper-alt text-ink">
      <AffiliateNav />
      <main className="mx-auto w-full max-w-[760px] px-6 py-14 md:py-20">
        <article className="min-w-0">
          <MarkdownBody>{AFFILIATE_PRIVACY_MD}</MarkdownBody>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
