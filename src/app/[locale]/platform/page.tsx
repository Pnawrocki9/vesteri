import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Link } from '@/i18n/navigation';
import { localeAlternates, socialMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'platform' });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: localeAlternates('/platform', locale),
    ...socialMetadata({
      href: '/platform',
      locale,
      title: t('meta.title'),
      description: t('meta.description'),
    }),
    // Nothing to index until the platform ships.
    robots: { index: false, follow: true },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('platform');

  return (
    <div className="flex min-h-screen flex-col bg-ink bg-[url(/pattern/vesteri-pattern-navy.svg)] bg-[length:180px] text-paper-alt">
      <header className="flex items-center justify-between px-6 py-[22px] md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal-reversed.svg"
            alt="VESTERI"
            className="block h-8 sm:h-11"
          />
        </Link>
        <LanguageSwitch tone="dark" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-7 px-6 py-20 text-center md:px-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/vesteri-mark-teal-gradient.svg"
          alt=""
          className="block w-full max-w-[130px] [filter:drop-shadow(var(--drop-shadow-mark))] sm:max-w-[160px]"
        />
        <span className="text-[13px] font-semibold tracking-[0.26em] text-accent-light uppercase">
          {t('kicker')}
        </span>
        <h1 className="max-w-[820px] text-[32px] leading-[1.15] font-bold text-balance sm:text-[44px] xl:text-[56px]">
          {t('headline')}
        </h1>
        <p className="max-w-[620px] text-[16.5px] leading-[1.8] text-muted-dark">{t('sub')}</p>
        <Link
          href="/"
          className="mt-4 rounded-btn border border-surface-dark px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-[border-color,color] hover:border-accent-light hover:text-accent-light"
        >
          {t('back')}
        </Link>
      </main>

      <footer className="px-6 pb-9 text-center md:px-14">
        <span className="text-[12px] text-muted-dark-2">© 2026 Vesteri.</span>
      </footer>
    </div>
  );
}
