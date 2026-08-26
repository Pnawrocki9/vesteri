import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SiteFooter from '@/components/SiteFooter';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Link } from '@/i18n/navigation';
import { getAffiliate } from '@/lib/affiliate/affiliates';
import { requireAffiliate } from '@/lib/affiliate/auth';
import { getDb } from '@/lib/affiliate/env';
import { formatAmount } from '@/lib/affiliate/money';
import { listReferrals, referralTotals } from '@/lib/affiliate/referrals';
import { getSettings } from '@/lib/affiliate/settings';
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site';
import { affiliateLogout } from '../actions';
import CopyCode from './CopyCode';
import PasswordForm from './PasswordForm';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ welcome?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'affiliate' });
  return {
    title: t('meta.dashboardTitle'),
    robots: { index: false, follow: false },
  };
}

export default async function AffiliateDashboardPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireAffiliate(locale);
  const { welcome } = await searchParams;

  const db = await getDb();
  const affiliate = await getAffiliate(db, session.sub);
  // A session for a row that no longer exists is stale — back to login.
  if (!affiliate) redirect(`/${locale}/affiliate/login`);
  const [referrals, totals, settings] = await Promise.all([
    listReferrals(db, affiliate.id),
    referralTotals(db, affiliate.id),
    getSettings(db),
  ]);

  const t = await getTranslations('affiliate');
  const discount = formatAmount(settings.discount_amount_cents, settings.currency);
  const commission = formatAmount(settings.commission_amount_cents, settings.currency);
  const suspended = affiliate.status === 'suspended';

  const shareText = t('dashboard.shareText', { code: affiliate.code, discount });
  const shareUrl = `${SITE_URL}/${locale}/affiliate`;
  // Plain share URLs — no SDKs. LinkedIn's endpoint only takes a URL.
  const shareLinks = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(shareText)}` },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}` },
    {
      label: 'Email',
      href: `mailto:?subject=${encodeURIComponent('Vesteri')}&body=${encodeURIComponent(shareText)}`,
    },
  ];

  const cardClass = 'rounded-card border border-line bg-paper p-6';

  return (
    <div className="min-h-screen bg-paper-alt text-ink">
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal.svg"
            width={900}
            height={260}
            alt="VESTERI"
            className="block h-7 w-auto sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageSwitch />
          <form action={affiliateLogout}>
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className="rounded-btn border border-line px-3 py-1.5 text-[12.5px] font-semibold hover:border-accent hover:text-accent-deep"
            >
              {t('dashboard.logout')}
            </button>
          </form>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[880px] px-6 py-12 md:py-16">
        {welcome && (
          <p className="mb-6 rounded-card border border-accent bg-accent/10 px-5 py-3.5 text-[14.5px] font-semibold text-accent-deep">
            {t('dashboard.welcome')}
          </p>
        )}
        {suspended && (
          <p className="mb-6 rounded-card border border-amber-400 bg-amber-50 px-5 py-3.5 text-[13.5px] text-amber-900">
            {t('dashboard.codeInactive', { email: CONTACT_EMAIL })}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className={`${cardClass} md:col-span-3`}>
            <h2 className="text-[12px] font-bold tracking-[0.16em] text-accent-deep uppercase">
              {t('dashboard.codeHeading')}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <span
                className={`font-mono text-[32px] font-bold tracking-[0.06em] md:text-[40px] ${
                  suspended ? 'text-muted-soft line-through' : ''
                }`}
              >
                {affiliate.code}
              </span>
              <CopyCode
                value={affiliate.code}
                copyLabel={t('dashboard.copy')}
                copiedLabel={t('dashboard.copied')}
              />
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.7] text-muted">{shareText}</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-btn border border-line bg-paper-alt px-3.5 py-1.5 text-[12.5px] font-semibold hover:border-accent hover:text-accent-deep"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className={cardClass}>
            <h2 className="text-[12px] font-bold tracking-[0.16em] text-accent-deep uppercase">
              {t('dashboard.salesHeading')}
            </h2>
            <p className="mt-3 text-[36px] font-bold">{totals.sales_count}</p>
          </section>
          <section className={`${cardClass} md:col-span-2`}>
            <h2 className="text-[12px] font-bold tracking-[0.16em] text-accent-deep uppercase">
              {t('dashboard.pendingHeading')}
            </h2>
            <p className="mt-3 text-[36px] font-bold">
              {formatAmount(totals.pending_cents, settings.currency)}
            </p>
            <p className="mt-1 text-[13px] text-muted">
              {t('dashboard.earnedLine', {
                amount: formatAmount(totals.earned_cents, settings.currency),
              })}
            </p>
          </section>
        </div>

        {referrals.length === 0 ? (
          <p className="mt-8 rounded-card border border-line bg-paper px-5 py-4 text-[14px] text-muted">
            {t('dashboard.empty', { commission })}
          </p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-card border border-line bg-paper">
            <table className="w-full min-w-[560px] text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-line text-[11px] tracking-[0.1em] text-muted uppercase">
                  <th className="px-4 py-3">{t('dashboard.table.date')}</th>
                  <th className="px-4 py-3">{t('dashboard.table.property')}</th>
                  <th className="px-4 py-3 text-right">{t('dashboard.table.commission')}</th>
                  <th className="px-4 py-3">{t('dashboard.table.status')}</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((r) => (
                  <tr key={r.id} className="border-b border-line last:border-b-0">
                    <td className="px-4 py-3">{r.sale_date}</td>
                    <td className="px-4 py-3">{r.property_reference ?? '—'}</td>
                    <td className="px-4 py-3 text-right">
                      {formatAmount(r.commission_amount_cents, r.currency)}
                    </td>
                    <td className="px-4 py-3">
                      {r.payout_status === 'paid' ? (
                        <span className="font-semibold text-accent-deep">
                          {t('dashboard.table.paid')}
                        </span>
                      ) : (
                        <span className="font-semibold text-amber-700">
                          {t('dashboard.table.pending')}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-4 text-[12.5px] leading-[1.7] text-muted">
          {t('dashboard.note', { email: CONTACT_EMAIL })}
        </p>

        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-[17px] font-bold">{t('dashboard.accountHeading')}</h2>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[13.5px]">
            <dt className="text-muted">{t('dashboard.name')}</dt>
            <dd>
              {affiliate.first_name} {affiliate.last_name}
            </dd>
            <dt className="text-muted">{t('dashboard.email')}</dt>
            <dd>{affiliate.email}</dd>
            <dt className="text-muted">{t('dashboard.phone')}</dt>
            <dd>{affiliate.phone}</dd>
          </dl>
          <h3 className="mt-8 text-[14px] font-bold">{t('dashboard.passwordHeading')}</h3>
          <PasswordForm />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
