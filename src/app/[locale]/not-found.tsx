import { getTranslations } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Link } from '@/i18n/navigation';

// The localized 404. Next does not support a metadata export from
// not-found.tsx, so the title comes from the root layout's default.
//
// This file only renders; what routes an unknown URL here is the catch-all in
// [locale]/[...rest], because an address matching no route never reaches a
// segment's not-found on its own.
export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className="flex min-h-screen flex-col bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] text-paper-alt">
      <header className="flex items-center justify-between px-6 py-[22px] md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal-reversed.svg"
            width={900}
            height={260}
            alt="VESTERI"
            className="block h-8 w-auto sm:h-11"
          />
        </Link>
        <LanguageSwitch tone="dark" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-7 px-6 py-20 text-center md:px-14">
        <span className="text-[13px] font-semibold tracking-[0.26em] text-accent-light uppercase">
          {t('kicker')}
        </span>
        <h1 className="max-w-[820px] text-[32px] leading-[1.15] font-bold text-balance sm:text-[44px] xl:text-[56px]">
          {t('title')}
        </h1>
        <p className="max-w-[620px] text-[16.5px] leading-[1.8] text-muted-dark">{t('sub')}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-accent-gradient rounded-btn px-8 py-4 text-[13px] font-bold tracking-[0.1em] text-paper uppercase shadow-cta transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            {t('home')}
          </Link>
          <Link
            href="/developers"
            className="rounded-btn border border-surface-dark px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-[border-color,color] hover:border-accent-light hover:text-accent-light"
          >
            {t('developers')}
          </Link>
        </div>
      </main>

      <footer className="px-6 pb-9 text-center md:px-14">
        <span className="text-[12px] text-muted-dark-2">© 2026 Vesteri.</span>
      </footer>
    </div>
  );
}
