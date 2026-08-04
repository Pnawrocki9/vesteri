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
  },
});

export type AppPathname = keyof typeof routing.pathnames;
