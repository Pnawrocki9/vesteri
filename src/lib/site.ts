// Site-wide constants shared by the homepage, legal pages and Affiliate Program.
export const CONTACT_EMAIL = 'contact@vesteri.com';
// Partner enquiries land in their own inbox, separate from general contact.
export const PARTNERS_EMAIL = 'partners@vesteri.com';
// Collective membership and rules matters (Collective Rules § 1.1 and § 8.1).
export const COLLECTIVE_EMAIL = 'collective@vesteri.com';
// Official company profile, used as schema.org sameAs.
export const LINKEDIN_URL = 'https://www.linkedin.com/company/vesteri-collective';
// Self-serve panel where agents add their own listings. Temporary host on the
// Estalara domain (confirmed 2026-10); swap once a vesteri.com alias exists.
export const AGENT_PANEL_URL = 'https://vesteri.estalara.com';
export const CONTACT_PHONE_DISPLAY = '+48 667 953 016';
export const CONTACT_PHONE_TEL = '+48667953016';

// Canonical host. Both vesteri.com and www.vesteri.com are bound as Cloudflare
// custom domains (see wrangler.jsonc), so exactly one of them has to win in
// canonical tags, hreflang and the sitemap — otherwise every page exists twice.
// The www host is the live property, so it is the canonical one; the apex is
// redirected to it with a 301 at the Cloudflare edge.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vesteri.com';

// Cloudflare Web Analytics beacon. Cookieless and storing nothing on the
// visitor's device, so it needs no consent banner — see the cookies policy.
// Unset means the beacon is simply not rendered, which keeps local and
// preview builds out of the production stats.
export const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? '';

// HubSpot tracking code (EU data centre). Unlike the Cloudflare beacon this
// DOES set tracking cookies (__hstc, hubspotutk, __hssc, __hssrc), so it
// belongs behind a consent mechanism — either HubSpot's own cookie banner,
// enabled in Settings → Privacy & Consent, or a CMP.
// Override the portal id per environment to keep dev traffic out of HubSpot;
// an empty value skips the script entirely.
export const HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? '147800534';

// Public marketplace and agent entry point. Deeper paths must be verified
// before use; no filter or registration URL contract is assumed.
export const MARKETPLACE_URL = 'https://vesteri.estalara.com';
