'use client';

import { useTranslations } from 'next-intl';
import { OPEN_COOKIE_SETTINGS } from '@/lib/cookie-consent';

export default function CookieSettingsButton({
  className = '',
}: {
  className?: string;
}) {
  const t = useTranslations('cookieConsent');
  return (
    <button
      type="button"
      className={`cookie-settings-trigger ${className}`}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
    >
      {t('settings')}
    </button>
  );
}
