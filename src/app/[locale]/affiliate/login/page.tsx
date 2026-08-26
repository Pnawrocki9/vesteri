import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import { getAffiliateSession } from '@/lib/affiliate/auth';
import AffiliateNav from '../AffiliateNav';
import LoginForm from './LoginForm';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'affiliate' });
  return {
    title: t('meta.loginTitle'),
    robots: { index: false, follow: false },
  };
}

export default async function AffiliateLoginPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (await getAffiliateSession()) {
    redirect(`/${locale}/affiliate/dashboard`);
  }
  const t = await getTranslations('affiliate');

  return (
    <div className="bg-paper-alt text-ink">
      <AffiliateNav showLogin={false} />
      <main className="mx-auto w-full max-w-[440px] px-6 py-14 md:py-20">
        <h1 className="text-[30px] font-bold md:text-h2-lg">{t('login.title')}</h1>
        <LoginForm />
      </main>
      <SiteFooter />
    </div>
  );
}
