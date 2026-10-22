import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import './marketing.css';

const bodyFont = localFont({
  src: [
    { path: '../../fonts/dm-sans-latin-ext.woff2', weight: '400 700' },
    { path: '../../fonts/dm-sans-latin.woff2', weight: '400 700' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});
const displayFont = localFont({
  src: [
    { path: '../../fonts/manrope-latin-ext.woff2', weight: '400 800' },
    { path: '../../fonts/manrope-latin.woff2', weight: '400 800' },
  ],
  variable: '--font-manrope',
  display: 'swap',
});
const symbolFont = localFont({
  src: [
    { path: '../../fonts/ui-symbols.ttf' },
    { path: '../../fonts/ui-arrows.ttf' },
  ],
  variable: '--font-ui-symbols',
  display: 'swap',
});

/** Shared V10.7 typography and design tokens for public pages. */
export default function MarketingShell({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`marketing ${className} ${bodyFont.variable} ${displayFont.variable} ${symbolFont.variable}`}
    >
      {children}
    </div>
  );
}
