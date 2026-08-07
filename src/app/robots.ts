import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Everything is crawlable on purpose — including /platform. That page carries
// its own `noindex, follow` until the platform ships, and a Disallow here would
// stop crawlers from ever reading that tag: a blocked URL can still end up in
// the index, just without the instruction that was meant to keep it out.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
