'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { StaticPathname } from '@/i18n/routing';
import { MARKETPLACE_URL } from '@/lib/site';

type Labels = Record<'buyers' | 'sellers' | 'agents' | 'cta', string>;
export default function MarketingHeader({
  audience,
  labels,
  page,
  plOnly = false,
}: {
  audience?: 'buyers' | 'sellers' | 'agents';
  page?: StaticPathname;
  // Page exists in Polish only: the EN switch goes to the EN homepage.
  plOnly?: boolean;
  labels: Labels;
}) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState('');
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const currentPage =
    page ??
    (audience === 'buyers'
      ? '/'
      : audience === 'sellers'
        ? '/sellers'
        : '/agents');
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const pointerdown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', pointerdown);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', pointerdown);
    };
  }, [open]);
  const audienceLinks = (['buyers', 'sellers', 'agents'] as const).map(
    (item) => (
      <Link
        key={item}
        href={
          item === 'buyers' ? '/' : item === 'sellers' ? '/sellers' : '/agents'
        }
        aria-current={audience === item ? 'page' : undefined}
        onClick={() => setOpen(false)}
      >
        {labels[item]}
      </Link>
    ),
  );
  const languageLink = (language: 'en' | 'pl', mobile = false) => (
    <Link
      key={language}
      className={mobile ? undefined : 'lang'}
      href={
        plOnly && language !== 'pl'
          ? '/'
          : { pathname: currentPage, hash }
      }
      locale={language}
      hrefLang={language}
      lang={language}
      aria-current={language === locale ? 'true' : undefined}
      onClick={() => setOpen(false)}
    >
      {mobile
        ? language === 'pl'
          ? 'Polski'
          : 'English'
        : language.toUpperCase()}
    </Link>
  );
  return (
    <header className="site-header" ref={header}>
      <div className="wrap header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={
            locale === 'pl' ? 'Strona główna Vesteri' : 'Vesteri homepage'
          }
        >
          <img
            src="/logo/vesteri-mark-teal-gradient.svg"
            alt=""
            width={42}
            height={42}
          />
          <span className="wordmark">VESTERI</span>
        </Link>
        <nav
          className="nav"
          aria-label={locale === 'pl' ? 'Nawigacja główna' : 'Main navigation'}
        >
          {audienceLinks}
        </nav>
        <div className="v10-language">
          {languageLink('en')}
          {languageLink('pl')}
        </div>
        <a className="btn btn-cream header-cta" href={MARKETPLACE_URL}>
          {labels.cta}
        </a>
        <button
          ref={toggle}
          className="hamburger"
          type="button"
          aria-controls="mobileMenu"
          aria-expanded={open}
          aria-label={
            locale === 'pl'
              ? open
                ? 'Zamknij menu'
                : 'Otwórz menu'
              : open
                ? 'Close menu'
                : 'Open menu'
          }
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
      </div>
      <nav
        id="mobileMenu"
        className={`mobile-menu ${open ? 'open' : ''}`}
        hidden={!open}
        aria-label={locale === 'pl' ? 'Menu mobilne' : 'Mobile menu'}
      >
        {audienceLinks}
        <a className="btn btn-cream" href={MARKETPLACE_URL}>
          {labels.cta}
        </a>
        {languageLink(locale === 'pl' ? 'en' : 'pl', true)}
      </nav>
    </header>
  );
}
