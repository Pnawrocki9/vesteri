/* eslint-disable @next/next/no-img-element */
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  MARKETPLACE_URL,
} from '@/lib/site';

const LEGAL_PAGES = [
  'privacy',
  'terms',
  'cookies',
  'gdpr',
  'ai',
  'disclaimers',
] as const;
export default async function MarketingFooter({
  locale,
  audience,
}: {
  locale: string;
  audience: 'buyers' | 'sellers' | 'agents';
}) {
  const t = await getTranslations({ locale, namespace: 'marketing.footer' });
  const content = await getTranslations({
    locale,
    namespace: `marketing.${audience}`,
  });
  const legal = await getTranslations({ locale, namespace: 'legal' });
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Link className="brand" href="/">
              <img
                alt="Vesteri"
                src="/logo/vesteri-mark-teal-gradient.svg"
                width={42}
                height={42}
              />
              <span className="wordmark">VESTERI</span>
            </Link>
            <p>{content('footerDescription')}</p>
          </div>
          <div>
            <h4>{t('discover')}</h4>
            <Link href="/">{t('buyers')}</Link>
            <Link href="/sellers">{t('sellers')}</Link>
            <a href={MARKETPLACE_URL}>{t('marketplace')}</a>
          </div>
          <div>
            <h4>{t('collective')}</h4>
            <Link href="/agents">{t('agents')}</Link>
            <a href={MARKETPLACE_URL}>
              {t('platform').replace(' ↗', '\u00a0↗')}
            </a>
          </div>
          <div className="footer-company">
            <h4>{t('headOffice')}</h4>
            <address>{t('address')}</address>
            <h4 className="footer-contact-heading">{t('contact')}</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('copyright')}</span>
          <div className="footer-rules">
            <h4>{t('collectiveRules')}</h4>
            <Link href="/collective-rules">{t('terms')}</Link>
          </div>
        </div>
      </div>
      <nav className="wrap footer-legal" aria-label={t('legalNav')}>
        {LEGAL_PAGES.map((slug) => (
          <Link key={slug} href={`/${slug}`}>
            {legal(slug)}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
