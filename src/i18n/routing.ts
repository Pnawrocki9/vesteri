import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/privacy': { pl: '/polityka-prywatnosci', en: '/privacy-policy' },
    '/terms': { pl: '/regulamin', en: '/terms-of-service' },
    '/cookies': '/cookies',
    '/gdpr': { pl: '/rodo', en: '/gdpr' },
    '/ai': { pl: '/informacja-o-ai', en: '/ai-notice' },
    '/disclaimers': { pl: '/zastrzezenia', en: '/disclaimers' },
    '/affiliate': '/affiliate',
    '/affiliate/register': '/affiliate/register',
    '/affiliate/login': '/affiliate/login',
    '/affiliate/dashboard': '/affiliate/dashboard',
    '/affiliate/terms': '/affiliate/terms',
    '/affiliate/privacy': '/affiliate/privacy',
  },
});
export type AppLocale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
export type StaticPathname = AppPathname;
