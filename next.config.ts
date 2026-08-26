import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

// Makes getCloudflareContext() work under `next dev`: the D1 binding and the
// secrets from .dev.vars are served by a local miniflare instead of the real
// worker. No-op for `next build` output.
initOpenNextCloudflareForDev();

const withNextIntl = createNextIntlPlugin();

// Deliberately no Strict-Transport-Security here. Cloudflare terminates TLS
// for both domains, so HSTS belongs to the edge — emitting it from the app as
// well would put two Strict-Transport-Security headers on every response,
// which browsers resolve inconsistently.
//
// No Content-Security-Policy either. Next's inline bootstrap scripts and the
// HubSpot loader both need explicit allowances, so a correct policy is its own
// piece of work rather than a line in an SEO pass; a wrong one silently breaks
// the page for visitors while looking fine in review.
const securityHeaders = [
  // Stops the browser second-guessing Content-Type, which is how a served
  // asset ends up executed as script.
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Full URL to same-origin, bare origin to third parties: analytics keep
  // working, but the path a visitor came from does not leak off-site.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Legacy clickjacking guard. Kept because it is honoured everywhere; the
  // modern frame-ancestors directive arrives with the CSP work above.
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig: NextConfig = {
  // The stack is not a secret worth announcing on every response.
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default withNextIntl(nextConfig);
