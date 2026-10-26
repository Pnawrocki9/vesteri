import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  // hreflang is emitted by page metadata (lib/metadata.ts). next-intl's own
  // `Link:` header would advertise the unprefixed URLs as x-default, which
  // contradicts the metadata now that x-default is the Polish URL.
  alternateLinks: false,
  pathnames: {
    '/': '/',
    '/sellers': { en: '/sellers', pl: '/sprzedajacy' },
    '/agents': { en: '/agents', pl: '/dla-agentow' },
    '/how-it-works': {
      pl: '/jak-dziala-vesteri-collective',
      en: '/how-vesteri-collective-works',
    },
    '/collective-rules': {
      pl: '/regulamin-vesteri-collective',
      en: '/vesteri-collective-rules',
    },
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
