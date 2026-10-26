import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import CookieConsent from '@/components/CookieConsent';
import MarketingShell from '@/components/marketing/MarketingShell';
import { routing } from '@/i18n/routing';
import { organizationJsonLd, webSiteJsonLd } from '@/lib/jsonld';
import { CF_BEACON_TOKEN, GOOGLE_ANALYTICS_ID, SITE_URL } from '@/lib/site';
import '../globals.css';

const montserrat = localFont({
  src: [
    { path: '../../fonts/montserrat-latin-ext.woff2', weight: '400 700' },
    { path: '../../fonts/montserrat-latin.woff2', weight: '400 700' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

// Defaults for anything that does not set its own — the not-found page, most
// obviously. Pages build their full card through socialMetadata() instead,
// because Next.js replaces `openGraph` rather than merging it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages all set their own title; this default exists for not-found.tsx,
  // which Next does not allow a metadata export of. Without it the 404 tab
  // shows the raw URL.
  title: { default: 'VESTERI', template: '%s' },
  // SVG first for browsers that take it, .ico for those that do not, and the
  // 180px PNG for the iOS home screen — iOS ignores SVG icons entirely.
  icons: {
    icon: [
      { url: '/logo/vesteri-mark-teal-gradient.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'VESTERI',
    images: [
      { url: '/og/vesteri-og.png', width: 1200, height: 630, alt: 'VESTERI' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/vesteri-og.png'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window['ga-disable-${GOOGLE_ANALYTICS_ID}'] = true;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});`,
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Site-level structured data — identical on every page, so it lives
            here rather than being repeated by each one. */}
        <JsonLd nodes={[organizationJsonLd(), webSiteJsonLd()]} />
        <NextIntlClientProvider>
          {children}
          <MarketingShell className="marketing-cookie-consent">
            <CookieConsent />
          </MarketingShell>
        </NextIntlClientProvider>
        {CF_BEACON_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        )}
      </body>
    </html>
  );
}
