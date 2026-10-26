import { GOOGLE_ANALYTICS_ID, HUBSPOT_PORTAL_ID } from './site';

export const CONSENT_KEY = 'vesteri-cookie-consent';
export const OPEN_COOKIE_SETTINGS = 'vesteri:cookie-settings';
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export type CookieConsent = {
  version: 1;
  analytics: boolean;
  marketing: boolean;
  updatedAt: number;
};

export function parseConsent(
  value: string | null,
  now = Date.now(),
): CookieConsent | null {
  if (!value) return null;
  try {
    const consent = JSON.parse(value) as CookieConsent;
    if (
      consent?.version !== 1 ||
      typeof consent.analytics !== 'boolean' ||
      typeof consent.marketing !== 'boolean' ||
      typeof consent.updatedAt !== 'number' ||
      !Number.isFinite(consent.updatedAt) ||
      consent.updatedAt > now ||
      now - consent.updatedAt >= CONSENT_MAX_AGE_MS
    )
      return null;
    return consent;
  } catch {
    return null;
  }
}

export function readStoredConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    const consent = parseConsent(value);
    if (value && !consent) localStorage.removeItem(CONSENT_KEY);
    return consent;
  } catch {
    return null;
  }
}

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  _hsq?: unknown[][];
} & Record<`ga-disable-${string}`, boolean>;

function removeCookies(pattern: RegExp) {
  const domains = [
    '',
    ...location.hostname
      .split('.')
      .map((_, i, parts) => parts.slice(i).join('.'))
      .filter((d) => d.includes('.') || d === 'localhost'),
  ];
  const segments = location.pathname.split('/').filter(Boolean);
  const paths = [
    '/',
    ...segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/')),
  ];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!pattern.test(name)) continue;
    for (const domain of domains)
      for (const path of paths) {
        document.cookie = `${name}=; Max-Age=0; Path=${path}${domain ? `; Domain=${domain}` : ''}`;
      }
  }
}

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

/** Basic consent mode: no optional provider request until its category is allowed. */
export function applyConsent(consent: CookieConsent | null) {
  const tracking = window as unknown as TrackingWindow;
  const analytics = consent?.analytics === true;
  const marketing = consent?.marketing === true;
  tracking[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = !analytics;
  tracking.gtag?.('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  if (analytics && !document.getElementById('google-analytics-script')) {
    tracking.gtag?.('js', new Date());
    tracking.gtag?.('config', GOOGLE_ANALYTICS_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: CONSENT_MAX_AGE_MS / 1000,
    });
    loadScript(
      'google-analytics-script',
      `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`,
    );
  } else if (!analytics) {
    removeCookies(/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/);
  }
  if (marketing && HUBSPOT_PORTAL_ID) {
    tracking._hsq ??= [];
    tracking._hsq.push(['doNotTrack', { track: true }]);
    loadScript(
      'hs-script-loader',
      `https://js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`,
    );
  } else if (!marketing) {
    tracking._hsq?.push(['doNotTrack']);
    removeCookies(/^(?:hubspotutk|__hstc|__hssc|__hssrc|messagesUtk)$/);
  }
}
