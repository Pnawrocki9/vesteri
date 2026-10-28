import { getPathname } from '@/i18n/navigation';
import { routing, type StaticPathname } from '@/i18n/routing';
import {
  COLLECTIVE_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  LINKEDIN_URL,
  SITE_URL,
} from '@/lib/site';

// Structured data for the site.
//
// Every value below traces to something already in the repo — the address in
// the footer copy, the contact details in lib/site, the routing table — and to
// something a visitor can see on the page. Nothing is authored to fill a
// schema field, because structured data that does not match visible content is
// what earns a manual action.
//
// Deliberately absent: Product, Service, Offer, LocalBusiness and Review. The
// site sells nothing on-page, quotes no prices and runs no premises open to
// customers. FAQPage IS emitted, but only from the same message strings that
// render the visible FAQ on that page (faqPageJsonLd below), never from
// separately authored text. WebSite carries no SearchAction
// either — there is no site search to point it at.

type Locale = (typeof routing.locales)[number];

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Head office as printed in the site footer (developers.footer.addr).
// Same wording as the Collective description in llms.txt and the meta copy.
const ORGANIZATION_DESCRIPTION =
  'Vesteri Collective is a community of independent real estate agents and agencies with Vesteri Market, professional standards and Vesteri Channels for learning and exchanging experience. Approved agents publish local and international listings.';

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
    name: 'Vesteri Collective',
    alternateName: ['Vesteri', 'Vesteri Market'],
    description: ORGANIZATION_DESCRIPTION,
    // Vesteri is a brand of Time2Show, Inc. — stated on the About page and in
    // the footer of every page that has one.
    legalName: 'Time2Show, Inc.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/vesteri-mark-teal-gradient.svg`,
    image: `${SITE_URL}/og/vesteri-og.png`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_TEL,
    address: ADDRESS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE_TEL,
        availableLanguage: ['pl', 'en'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Collective membership',
        email: COLLECTIVE_EMAIL,
        availableLanguage: ['pl', 'en'],
      },
    ],
    knowsAbout: [
      'real estate agent network',
      'real estate professional community',
      'property listings',
      'professional knowledge sharing',
      'international property',
    ],
    sameAs: [LINKEDIN_URL],
  };
}

export function webSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Vesteri Collective',
    alternateName: 'Vesteri',
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
  href: StaticPathname;
  locale: Locale;
  name: string;
}) {
  const absolute = (target: StaticPathname) => `${SITE_URL}${getPathname({ locale, href: target })}`;
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absolute(href)}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vesteri Collective', item: absolute('/') },
      { '@type': 'ListItem', position: 2, name, item: absolute(href) },
    ],
  };
}

// WebPage node for a page, tied to the site graph by @id. `hasFaq` links the
// page to its FAQPage node when the page renders a visible FAQ.
export function webPageJsonLd({
  href,
  locale,
  name,
  description,
  hasFaq = false,
  hasBreadcrumb = false,
}: {
  href: StaticPathname;
  locale: Locale;
  name: string;
  description: string;
  hasFaq?: boolean;
  hasBreadcrumb?: boolean;
}) {
  const url = `${SITE_URL}${getPathname({ locale, href })}`;
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    ...(hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(hasFaq ? { mainEntity: { '@id': `${url}#faq` } } : {}),
  };
}

// FAQPage built from the exact question/answer strings the page renders.
export function faqPageJsonLd({
  href,
  locale,
  items,
}: {
  href: StaticPathname;
  locale: Locale;
  items: { q: string; a: string }[];
}) {
  const url = `${SITE_URL}${getPathname({ locale, href })}`;
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    inLanguage: locale,
    isPartOf: { '@id': `${url}#webpage` },
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
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

// Article node for a Poradnik guide. The author is the editorial team as an
// Organization (no invented person); publisher is the site Organization.
export function articleJsonLd({
  href,
  locale,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  href: StaticPathname;
  locale: Locale;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${getPathname({ locale, href })}`;
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    url,
    headline,
    description,
    inLanguage: locale,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'Zespół Vesteri Collective',
      url: SITE_URL,
    },
    publisher: { '@id': ORGANIZATION_ID },
    image: `${SITE_URL}/og/vesteri-og.png`,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': WEBSITE_ID },
  };
}
