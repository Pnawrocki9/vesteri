import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/developers': {
      pl: '/dla-deweloperow',
      en: '/for-developers',
    },
    '/about': {
      pl: '/o-nas',
      en: '/about-us',
    },
    '/platform': {
      pl: '/platforma',
      en: '/platform',
    },
    '/partners': {
      pl: '/zostan-partnerem',
      en: '/become-a-partner',
    },
    '/compare': {
      pl: '/porownania',
      en: '/compare',
    },
    // The slug is localized per comparison, so the Polish and English versions
    // of one piece live at addresses in their own language.
    '/compare/[slug]': {
      pl: '/porownania/[slug]',
      en: '/compare/[slug]',
    },
    '/articles': {
      pl: '/poradnik',
      en: '/guides',
    },
    // The slug is localized per article, so the Polish and English versions of
    // one piece live at addresses in their own language rather than sharing one.
    '/articles/[slug]': {
      pl: '/poradnik/[slug]',
      en: '/guides/[slug]',
    },
    '/privacy': {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy',
    },
    '/terms': {
      pl: '/regulamin',
      en: '/terms-of-service',
    },
    '/cookies': '/cookies',
    '/gdpr': {
      pl: '/rodo',
      en: '/gdpr',
    },
    '/ai': {
      pl: '/informacja-o-ai',
      en: '/ai-notice',
    },
    '/disclaimers': {
      pl: '/zastrzezenia',
      en: '/disclaimers',
    },
  },
});

export type AppPathname = keyof typeof routing.pathnames;

// Routes with no dynamic segment. Helpers that build a URL from a pathname
// alone — canonicals, hreflang, breadcrumbs, the sitemap — can only work with
// these; anything carrying a [slug] needs the slug supplied with it.
export type StaticPathname = Exclude<AppPathname, `${string}[${string}]${string}`>;
