import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import { Link } from '@/i18n/navigation';
import { getDb } from '@/lib/affiliate/env';
import { getSettings } from '@/lib/affiliate/settings';
import AffiliateNav from '../AffiliateNav';
import RegisterForm from './RegisterForm';

// Reads program_active at request time so closing the program takes effect
// immediately.
export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'affiliate' });
  return {
    title: t('meta.registerTitle'),
    robots: { index: false, follow: false },
  };
}

export default async function AffiliateRegisterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('affiliate');
  const settings = await getSettings(await getDb());

  return (
    <div className="bg-paper-alt text-ink">
      <AffiliateNav />
      <main className="mx-auto w-full max-w-[640px] px-6 py-14 md:py-20">
        <h1 className="text-[30px] font-bold md:text-h2-lg">{t('register.title')}</h1>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted">{t('register.sub')}</p>
        {settings.program_active === 1 ? (
          <RegisterForm />
        ) : (
          <p className="mt-8 rounded-card border border-line bg-paper px-5 py-4 text-[15px] text-muted">
            {t('landing.closed')}{' '}
            <Link href="/affiliate/login" className="font-semibold text-accent-deep hover:underline">
              {t('landing.ctaLogin')}
            </Link>
          </p>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
