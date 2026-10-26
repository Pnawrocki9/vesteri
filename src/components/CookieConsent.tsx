'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  applyConsent,
  CONSENT_KEY,
  OPEN_COOKIE_SETTINGS,
  readStoredConsent,
  type CookieConsent as Consent,
} from '@/lib/cookie-consent';
import './cookie-consent.css';

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const previous = useRef<Consent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setConsent(readStoredConsent());
    setReady(true);
    const sync = () => setConsent(readStoredConsent());
    const storage = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) sync();
    };
    window.addEventListener('storage', storage);
    window.addEventListener('focus', sync);
    return () => {
      window.removeEventListener('storage', storage);
      window.removeEventListener('focus', sync);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const revoked =
      (previous.current?.analytics && !consent?.analytics) ||
      (previous.current?.marketing && !consent?.marketing);
    applyConsent(consent);
    previous.current = consent;
    // Reload removes previously loaded provider code after withdrawal.
    if (revoked) window.location.reload();
  }, [consent, ready]);

  const customize = useCallback(() => {
    setAnalytics(consent?.analytics ?? false);
    setMarketing(consent?.marketing ?? false);
    setOpen(true);
  }, [consent]);

  useEffect(() => {
    window.addEventListener(OPEN_COOKIE_SETTINGS, customize);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, customize);
  }, [customize]);

  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);

  const save = (analytics: boolean, marketing: boolean) => {
    const choice: Consent = {
      version: 1,
      analytics,
      marketing,
      updatedAt: Date.now(),
    };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(choice));
    } catch {
      /* Apply for this visit even if storage is unavailable. */
    }
    setConsent(choice);
    setOpen(false);
  };

  if (!ready) return null;

  const links = (
    <div className="cookie-links">
      <Link href="/cookies" onClick={() => setOpen(false)}>
        {t('cookiesPolicy')}
      </Link>
      <Link href="/privacy" onClick={() => setOpen(false)}>
        {t('privacyPolicy')}
      </Link>
    </div>
  );
  const actions = (preferences = false) => (
    <div className="cookie-actions">
      <button type="button" onClick={() => save(false, false)}>
        {t('reject')}
      </button>
      <button
        type="button"
        onClick={() => (preferences ? save(analytics, marketing) : customize())}
      >
        {t(preferences ? 'save' : 'customize')}
      </button>
      <button type="button" onClick={() => save(true, true)}>
        {t('accept')}
      </button>
    </div>
  );

  return (
    <>
      {!consent && !open && (
        <section
          className="cookie-banner"
          aria-labelledby="cookie-banner-title"
        >
          <div>
            <h2 id="cookie-banner-title">{t('title')}</h2>
            <p>{t('description')}</p>
          </div>
          {actions()}
          {links}
        </section>
      )}
      <dialog
        ref={dialog}
        className="cookie-dialog"
        aria-labelledby="cookie-dialog-title"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="cookie-dialog-heading">
          <h2 id="cookie-dialog-title">{t('settings')}</h2>
          <button
            type="button"
            className="cookie-close"
            aria-label={t('close')}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <p>{t('description')}</p>
        <div className="cookie-category">
          <div>
            <h3>{t('necessaryTitle')}</h3>
            <p>{t('necessaryDescription')}</p>
          </div>
          <span>{t('alwaysActive')}</span>
        </div>
        <label className="cookie-category">
          <span>
            <strong>{t('analyticsTitle')}</strong>
            <span>{t('analyticsDescription')}</span>
          </span>
          <input
            type="checkbox"
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
          />
        </label>
        <label className="cookie-category">
          <span>
            <strong>{t('marketingTitle')}</strong>
            <span>{t('marketingDescription')}</span>
          </span>
          <input
            type="checkbox"
            checked={marketing}
            onChange={(event) => setMarketing(event.target.checked)}
          />
        </label>
        <p className="cookie-retention">{t('retention')}</p>
        {actions(true)}
        {links}
      </dialog>
    </>
  );
}
