// Site-wide constants. Confirmed with the client (2026-08):
// - investor platform lives at app.vesteri.com (override via env if it moves)
// - "Book a call" opens an e-mail to the contact address for now
export const INVESTOR_PLATFORM_URL =
  process.env.NEXT_PUBLIC_INVESTOR_PLATFORM_URL ?? 'https://app.vesteri.com';

export const CONTACT_EMAIL = 'contact@vesteri.com';
export const CONTACT_PHONE_DISPLAY = '+48 667 953 016';
export const CONTACT_PHONE_TEL = '+48667953016';

// The subject stays English in both locales: it lands in the Vesteri inbox,
// not in front of the visitor, so a single value keeps triage simple.
export const BOOK_CALL_SUBJECT = 'Developer partnership';

export const BOOK_CALL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  BOOK_CALL_SUBJECT,
)}`;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vesteri.com';

// Cloudflare Web Analytics beacon. Cookieless and storing nothing on the
// visitor's device, so it needs no consent banner — see the cookies policy.
// Unset means the beacon is simply not rendered, which keeps local and
// preview builds out of the production stats.
export const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? '';
