'use client';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitch from '@/components/LanguageSwitch';
import { MARKETPLACE_URL } from '@/lib/site';

type Labels = {
  links: { label: string; href: string }[];
  apply: string;
  open: string;
  close: string;
  label: string;
};
export default function CollectiveHeader({ labels }: { labels: Labels }) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
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
  const links = labels.links.map((link) => (
    <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
      {link.label}
    </a>
  ));
  return (
    <header className="site-header" ref={header}>
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label="Vesteri">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-mark-teal-gradient.svg"
            alt=""
            width={42}
            height={42}
          />
          <span className="wordmark">VESTERI</span>
        </a>
        <nav className="nav" aria-label={labels.label}>
          {links}
        </nav>
        <div className="collective-language">
          <LanguageSwitch tone="dark" variant="collective" />
        </div>
        <a className="btn btn-cream header-cta" href={MARKETPLACE_URL}>
          {labels.apply}
        </a>
        <button
          ref={toggle}
          className="hamburger"
          type="button"
          aria-controls="collective-mobile-nav"
          aria-expanded={open}
          aria-label={open ? labels.close : labels.open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
      </div>
      <nav
        id="collective-mobile-nav"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-label={labels.label}
        hidden={!open}
      >
        {links}
        <a href={MARKETPLACE_URL}>{labels.apply}</a>
      </nav>
    </header>
  );
}
