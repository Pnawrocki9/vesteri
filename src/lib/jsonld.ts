import { getPathname } from '@/i18n/navigation';
import { routing, type AppPathname } from '@/i18n/routing';
import { CONTACT_EMAIL, CONTACT_PHONE_TEL, SITE_URL } from '@/lib/site';

// Structured data for the site.
//
// Every value below traces to something already in the repo — the address in
// the footer copy, the contact details in lib/site, the routing table — and to
// something a visitor can see on the page. Nothing is authored to fill a
// schema field, because structured data that does not match visible content is
// what earns a manual action.
//
// Deliberately absent: Product, Service, Offer, FAQPage, LocalBusiness and
// Review. The site sells nothing on-page, quotes no prices, has no FAQ block
// and runs no premises open to customers. WebSite carries no SearchAction
// either — there is no site search to point it at.

type Locale = (typeof routing.locales)[number];

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Head office as printed in the site footer (developers.footer.addr).
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1111B S Governors Ave STE 20579',
  addressLocality: 'Dover',
  addressRegion: 'DE',
  postalCode: '19904',
  addressCountry: 'US',
} as const;

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Vesteri',
    // Vesteri is a brand of Time2Show, Inc. — stated on the About page and in
    // the footer of every page that has one.
    legalName: 'Time2Show, Inc.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/vesteri-mark-teal-gradient.svg`,
    image: `${SITE_URL}/og/vesteri-og.png`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_TEL,
    address: ADDRESS,
  };
}

export function webSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Vesteri',
    url: SITE_URL,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: routing.locales,
  };
}

// Two levels: the locale home page, then the current page. Anything deeper
// would be invented — the site has no nested sections.
export function breadcrumbJsonLd({
  href,
  locale,
  name,
}: {
  href: AppPathname;
  locale: Locale;
  name: string;
}) {
  const absolute = (target: AppPathname) => `${SITE_URL}${getPathname({ locale, href: target })}`;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vesteri', item: absolute('/') },
      { '@type': 'ListItem', position: 2, name, item: absolute(href) },
    ],
  };
}

// Nodes go in a @graph so they can reference one another by @id. The layout
// emits the site-level graph (Organization + WebSite) and a page adds its own
// block for the breadcrumb; two blocks on a page is well-formed, and it keeps
// the site-level nodes in one place instead of on ten pages.
//
// `<` is escaped because this string is injected with dangerouslySetInnerHTML:
// a "</script>" appearing inside any value would otherwise close the tag.
export function jsonLdScript(...nodes: object[]) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(
    /</g,
    '\\u003c',
  );
}
