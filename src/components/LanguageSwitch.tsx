'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type AppLocale } from '@/i18n/routing';

type Target = { pathname: string; params?: Record<string, string> };

// Client-side language menu. Shows the current locale and opens a list of the
// others; next-intl persists the choice in a cookie so future visits keep it.
export default function LanguageSwitch({
  variant = 'inline',
  tone = 'light',
  targets,
}: {
  variant?: 'fixed' | 'inline';
  // `dark` inverts the outline for placement on the ink ground.
  tone?: 'light' | 'dark';
  // Where to land per locale, when it is not simply this page in that
  // language. Articles need it for two reasons: their slugs are translated,
  // so reusing the current one would 404, and a piece written for one market
  // may not exist in every language — those locales map to a fallback such as
  // the listing page.
  targets?: Partial<Record<AppLocale, Target>>;
}) {
  const t = useTranslations('langSwitch');
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const others = routing.locales.filter((l) => l !== locale);
  const toneClasses =
    tone === 'dark'
      ? 'border-surface-dark text-paper-alt hover:bg-paper-alt hover:text-ink'
      : 'border-ink text-ink hover:bg-ink hover:text-paper-alt';

  const switchTo = (target: AppLocale) => {
    setOpen(false);
    router.replace(
      // @ts-expect-error -- pathname/params pair is valid at runtime
      targets?.[target] ?? { pathname, params },
      { locale: target },
    );
  };

  return (
    <div
      ref={rootRef}
      className={`${variant === 'fixed' ? 'fixed top-6 right-7 z-20 ' : ''}relative`}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={`${toneClasses} cursor-pointer rounded-btn border px-3.5 py-2 text-[12px] font-bold tracking-[0.1em] uppercase transition-[background-color,color]`}
      >
        {locale}
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute right-0 z-30 mt-1.5 flex min-w-full flex-col overflow-hidden rounded-btn border ${
            tone === 'dark'
              ? 'border-surface-dark bg-ink-deep'
              : 'border-ink bg-paper'
          }`}
        >
          {others.map((other) => (
            <button
              key={other}
              type="button"
              role="menuitem"
              onClick={() => switchTo(other)}
              className={`cursor-pointer px-3.5 py-2 text-left text-[12px] font-bold tracking-[0.1em] uppercase transition-[background-color,color] ${
                tone === 'dark'
                  ? 'text-paper-alt hover:bg-paper-alt hover:text-ink'
                  : 'text-ink hover:bg-ink hover:text-paper-alt'
              }`}
            >
              {other}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
