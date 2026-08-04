import { getTranslations } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Link } from '@/i18n/navigation';

// Shared shell for the four legal pages (privacy, terms, cookies, GDPR).
// Placeholder content until the client delivers the final texts.
export default async function LegalPage({
  page,
}: {
  page: 'privacy' | 'terms' | 'cookies' | 'gdpr';
}) {
  const t = await getTranslations('legal');

  return (
    <div className="flex min-h-screen flex-col bg-paper-alt text-ink">
      <nav className="flex items-center justify-between border-b border-line bg-paper-alt px-6 py-[22px] md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/vesteri-logo-horizontal.svg" alt="VESTERI" className="block h-11" />
        </Link>
        <LanguageSwitch />
      </nav>
      <main className="mx-auto w-full max-w-[720px] flex-1 px-6 py-16 md:py-[100px]">
        <h1 className="text-[28px] font-bold text-balance text-ink md:text-h2-lg">
          {t(page)}
        </h1>
        <p className="mt-6 text-[15px] leading-[1.7] text-muted">{t('placeholder')}</p>
      </main>
    </div>
  );
}
