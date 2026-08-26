import { getTranslations } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Link } from '@/i18n/navigation';

// Shared top bar of the affiliate module — same treatment as the Partners and
// legal-page navs, with the affiliate login as the contextual action.
export default async function AffiliateNav({ showLogin = true }: { showLogin?: boolean }) {
  const t = await getTranslations('affiliate');
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
      <Link href="/" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/vesteri-logo-horizontal.svg"
          width={900}
          height={260}
          alt="VESTERI"
          className="block h-7 w-auto sm:h-11"
        />
      </Link>
      <div className="flex items-center gap-3 sm:gap-5">
        <Link
          href="/affiliate"
          className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep sm:inline"
        >
          {t('navTitle')}
        </Link>
        {showLogin && (
          <Link
            href="/affiliate/login"
            className="text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep"
          >
            {t('landing.ctaLogin')}
          </Link>
        )}
        <LanguageSwitch />
      </div>
    </nav>
  );
}
