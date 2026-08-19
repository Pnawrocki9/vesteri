// Site-wide constants. Confirmed with the client (2026-08):
// - investor platform lives at app.vesteri.com (override via env if it moves)
// - "Book a call" opens an e-mail to the contact address for now
export const INVESTOR_PLATFORM_URL =
  process.env.NEXT_PUBLIC_INVESTOR_PLATFORM_URL ?? 'https://app.vesteri.com';

export const CONTACT_EMAIL = 'contact@vesteri.com';
// Partner enquiries land in their own inbox, separate from general contact.
export const PARTNERS_EMAIL = 'partners@vesteri.com';
export const CONTACT_PHONE_DISPLAY = '+48 667 953 016';
export const CONTACT_PHONE_TEL = '+48667953016';

// The subject stays English in both locales: it lands in the Vesteri inbox,
// not in front of the visitor, so a single value keeps triage simple.
export const BOOK_CALL_SUBJECT = 'Developer partnership';

export const BOOK_CALL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  BOOK_CALL_SUBJECT,
)}`;

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
