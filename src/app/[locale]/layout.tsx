import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import { routing } from '@/i18n/routing';
import { organizationJsonLd, webSiteJsonLd } from '@/lib/jsonld';
import { CF_BEACON_TOKEN, HUBSPOT_PORTAL_ID, SITE_URL } from '@/lib/site';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Defaults for anything that does not set its own — the not-found page, most
// obviously. Pages build their full card through socialMetadata() instead,
// because Next.js replaces `openGraph` rather than merging it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: '/logo/vesteri-mark-teal-gradient.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'VESTERI',
    images: [{ url: '/og/vesteri-og.png', width: 1200, height: 630, alt: 'VESTERI' }],
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
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Site-level structured data — identical on every page, so it lives
            here rather than being repeated by each one. */}
        <JsonLd nodes={[organizationJsonLd(), webSiteJsonLd()]} />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {CF_BEACON_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        )}
        {HUBSPOT_PORTAL_ID && (
          <Script
            id="hs-script-loader"
            src={`https://js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
