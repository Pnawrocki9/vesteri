import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type StaticPathname } from '@/i18n/routing';
import { neutralUrl } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

// Only the new homepage, retained legal disclosures and public affiliate
// pages. Auth/account/admin routes must never appear in the sitemap.
const PAGES: StaticPathname[] = [
  '/',
  '/sellers',
  '/agents',
  '/how-it-works',
  '/collective-rules',
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/ai',
  '/disclaimers',
  '/affiliate',
  '/affiliate/terms',
  '/affiliate/privacy',
];
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((href) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${SITE_URL}${getPathname({ locale, href })}`,
      ]),
    );
    return routing.locales.map((locale) => ({
      url: languages[locale],
      alternates: {
        languages: { ...languages, 'x-default': neutralUrl(href) },
      },
    }));
  });
}
