import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en', 'es', 'de'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/developers': {
      pl: '/dla-deweloperow',
      en: '/for-developers',
      es: '/para-promotores',
      de: '/fuer-bautraeger',
    },
    '/about': {
      pl: '/o-nas',
      en: '/about-us',
      es: '/sobre-nosotros',
      de: '/ueber-uns',
    },
    '/platform': {
      pl: '/platforma',
      en: '/platform',
      es: '/plataforma',
      de: '/plattform',
    },
    '/partners': {
      pl: '/zostan-partnerem',
      en: '/become-a-partner',
      es: '/hazte-partner',
      de: '/partner-werden',
    },
    '/compare': {
      pl: '/porownania',
      en: '/compare',
      es: '/comparativas',
      de: '/vergleiche',
    },
    // The slug is localized per comparison, so the language versions of one
    // piece live at addresses in their own language.
    '/compare/[slug]': {
      pl: '/porownania/[slug]',
      en: '/compare/[slug]',
      es: '/comparativas/[slug]',
      de: '/vergleiche/[slug]',
    },
    '/articles': {
      pl: '/poradnik',
      en: '/guides',
      es: '/guias',
      de: '/ratgeber',
    },
    // The slug is localized per article, so the Polish and English versions of
    // one piece live at addresses in their own language rather than sharing one.
    '/articles/[slug]': {
      pl: '/poradnik/[slug]',
      en: '/guides/[slug]',
      es: '/guias/[slug]',
      de: '/ratgeber/[slug]',
    },
    '/privacy': {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy',
      es: '/politica-de-privacidad',
      de: '/datenschutz',
    },
    '/terms': {
      pl: '/regulamin',
      en: '/terms-of-service',
      es: '/terminos-del-servicio',
      de: '/nutzungsbedingungen',
    },
    '/cookies': '/cookies',
    '/gdpr': {
      pl: '/rodo',
      en: '/gdpr',
      es: '/rgpd',
      de: '/dsgvo',
    },
    '/ai': {
      pl: '/informacja-o-ai',
      en: '/ai-notice',
      es: '/aviso-de-ia',
      de: '/ki-hinweis',
    },
    // Affiliate module: one slug across locales, like /cookies — the codes on
    // these pages travel between languages, so the addresses should too.
    '/affiliate': '/affiliate',
    '/affiliate/register': '/affiliate/register',
    '/affiliate/login': '/affiliate/login',
    '/affiliate/dashboard': '/affiliate/dashboard',
    '/affiliate/terms': '/affiliate/terms',
    '/affiliate/privacy': '/affiliate/privacy',
    '/disclaimers': {
      pl: '/zastrzezenia',
      en: '/disclaimers',
      es: '/avisos-legales',
      de: '/haftungsausschluss',
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];

export type AppPathname = keyof typeof routing.pathnames;

// Routes with no dynamic segment. Helpers that build a URL from a pathname
// alone — canonicals, hreflang, breadcrumbs, the sitemap — can only work with
// these; anything carrying a [slug] needs the slug supplied with it.
export type StaticPathname = Exclude<AppPathname, `${string}[${string}]${string}`>;
