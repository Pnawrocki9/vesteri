import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAffiliate } from '@/lib/affiliate/affiliates';
import { requireAdmin } from '@/lib/affiliate/auth';
import { getDb } from '@/lib/affiliate/env';
import { formatAmount } from '@/lib/affiliate/money';
import { listReferrals, referralTotals, type ReferralRow } from '@/lib/affiliate/referrals';
import { getSettings } from '@/lib/affiliate/settings';
import AdminShell from '../../AdminShell';
import { addSale, markPaid, setStatus } from '../../actions';

export const metadata: Metadata = {
  title: 'Affiliate — Vesteri Affiliate Admin',
  robots: { index: false, follow: false },
};

// Soft self-referral hint: flags referrals whose free-text fields mention the
// affiliate's own email or full name. Advisory only — it never blocks.
function selfReferralSuspects(
  referrals: ReferralRow[],
  affiliate: { email: string; first_name: string; last_name: string },
): ReferralRow[] {
  const email = affiliate.email.toLowerCase();
  const fullName = `${affiliate.first_name} ${affiliate.last_name}`.toLowerCase();
  return referrals.filter((r) => {
    const haystack = `${r.buyer_label ?? ''} ${r.admin_note ?? ''}`.toLowerCase();
    return haystack.includes(email) || haystack.includes(fullName);
  });
}

export default async function AdminAffiliateDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { locale, id } = await params;
  const session = await requireAdmin(locale);
  const { saved, error } = await searchParams;

  const db = await getDb();
  const affiliate = await getAffiliate(db, id);
  if (!affiliate) notFound();
  const [referrals, totals, settings] = await Promise.all([
    listReferrals(db, id),
    referralTotals(db, id),
    getSettings(db),
  ]);
  const suspects = selfReferralSuspects(referrals, affiliate);
  const today = new Date().toISOString().slice(0, 10);

  const inputClass =
    'mt-1.5 w-full rounded-btn border border-line bg-paper-alt px-3 py-2 text-[14px] font-normal normal-case tracking-normal';
  const labelClass = 'block text-[12px] font-semibold tracking-[0.08em] uppercase';

  return (
    <AdminShell locale={locale} active="affiliates" adminEmail={session.sub}>
      {saved && (
        <p className="mb-6 rounded-btn border border-accent bg-accent/10 px-4 py-2.5 text-[13.5px] text-accent-deep">
          Sale recorded.
        </p>
      )}
      {error === 'sale' && (
        <p role="alert" className="mb-6 rounded-btn border border-red-300 bg-red-50 px-4 py-2.5 text-[13.5px] text-red-800">
          Could not record the sale — check the date and the amounts.
        </p>
      )}
      {suspects.length > 0 && (
        <p className="mb-6 rounded-btn border border-amber-400 bg-amber-50 px-4 py-2.5 text-[13.5px] text-amber-900">
          Possible self-referral: {suspects.length === 1 ? 'a recorded sale mentions' : `${suspects.length} recorded sales mention`}{' '}
          this affiliate&apos;s own name or email in the buyer label or note. Self-referrals are not
          payable under the Program terms — please verify.
        </p>
      )}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold">
            {affiliate.first_name} {affiliate.last_name}
          </h1>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[13.5px]">
            <dt className="text-muted">Code</dt>
            <dd className="font-mono font-semibold">{affiliate.code}</dd>
            <dt className="text-muted">Email</dt>
            <dd>{affiliate.email}</dd>
            <dt className="text-muted">Phone</dt>
            <dd>{affiliate.phone}</dd>
            <dt className="text-muted">Status</dt>
            <dd className={affiliate.status === 'active' ? 'text-accent-deep' : 'text-red-800'}>
              {affiliate.status}
            </dd>
            <dt className="text-muted">Registered</dt>
            <dd>{affiliate.created_at.slice(0, 16)} UTC</dd>
            <dt className="text-muted">Terms accepted</dt>
            <dd>
              {affiliate.terms_accepted_at.slice(0, 16)} UTC (version {affiliate.terms_version})
            </dd>
            <dt className="text-muted">Sales / pending / earned</dt>
            <dd>
              {totals.sales_count} · {formatAmount(totals.pending_cents, settings.currency)} ·{' '}
              {formatAmount(totals.earned_cents, settings.currency)}
            </dd>
          </dl>
        </div>
        <form action={setStatus}>
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="affiliate_id" value={affiliate.id} />
          <input
            type="hidden"
            name="status"
            value={affiliate.status === 'active' ? 'suspended' : 'active'}
          />
          <button
            type="submit"
            className="rounded-btn border border-line bg-paper px-4 py-2 text-[13px] font-semibold hover:border-accent hover:text-accent-deep"
          >
            {affiliate.status === 'active' ? 'Suspend' : 'Reactivate'}
          </button>
        </form>
      </div>

      <details className="mt-8 rounded-card border border-line bg-paper">
        <summary className="cursor-pointer px-5 py-3.5 text-[14px] font-bold text-accent-deep">
          Add sale
        </summary>
        <form action={addSale} className="grid grid-cols-1 gap-4 border-t border-line p-5 sm:grid-cols-2">
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="affiliate_id" value={affiliate.id} />
          <label className={labelClass}>
            Sale date
            <input type="date" name="sale_date" required defaultValue={today} className={inputClass} />
          </label>
          <label className={labelClass}>
            Property reference (optional)
            <input type="text" name="property_reference" className={inputClass} />
          </label>
          <label className={labelClass}>
            Discount ({settings.currency})
            <input
              type="text"
              name="discount"
              required
              inputMode="decimal"
              defaultValue={(settings.discount_amount_cents / 100).toString()}
              className={inputClass}
            />
          </label>
          <label className={labelClass}>
            Commission ({settings.currency})
            <input
              type="text"
              name="commission"
              required
              inputMode="decimal"
              defaultValue={(settings.commission_amount_cents / 100).toString()}
              className={inputClass}
            />
          </label>
          <label className={labelClass}>
            Buyer label (optional — initials or first name, never full personal data)
            <input type="text" name="buyer_label" className={inputClass} />
          </label>
          <label className={labelClass}>
            Note (optional)
            <input type="text" name="admin_note" className={inputClass} />
          </label>
          <p className="text-[12.5px] text-muted sm:col-span-2">
            Amounts are pre-filled from the current program settings and are frozen into this sale
            when you save — later settings changes never touch it.
          </p>
          <button
            type="submit"
            className="bg-accent-gradient justify-self-start rounded-cta px-5 py-2.5 text-[14px] font-bold text-paper shadow-cta sm:col-span-2"
          >
            Record sale
          </button>
        </form>
      </details>

      <h2 className="mt-10 text-[17px] font-bold">Recorded sales</h2>
      {referrals.length === 0 ? (
        <p className="mt-3 text-[14px] text-muted">No sales recorded for this affiliate yet.</p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-card border border-line bg-paper">
          <table className="w-full min-w-[760px] text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-line text-[11px] tracking-[0.1em] text-muted uppercase">
                <th className="px-4 py-3">Sale date</th>
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Buyer label</th>
                <th className="px-4 py-3 text-right">Discount</th>
                <th className="px-4 py-3 text-right">Commission</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {referrals.map((r) => (
                <tr key={r.id} className="border-b border-line last:border-b-0">
                  <td className="px-4 py-3">{r.sale_date}</td>
                  <td className="px-4 py-3">{r.property_reference ?? '—'}</td>
                  <td className="px-4 py-3">{r.buyer_label ?? '—'}</td>
                  <td className="px-4 py-3 text-right">
                    {formatAmount(r.discount_amount_cents, r.currency)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {formatAmount(r.commission_amount_cents, r.currency)}
                  </td>
                  <td className="px-4 py-3">
                    {r.payout_status === 'paid' ? (
                      <span title={r.paid_at ?? undefined} className="font-semibold text-accent-deep">
                        Paid
                      </span>
                    ) : (
                      <span className="font-semibold text-amber-700">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {r.payout_status === 'pending' && (
                      <form action={markPaid}>
                        <input type="hidden" name="locale" value={locale} />
                        <input type="hidden" name="affiliate_id" value={affiliate.id} />
                        <input type="hidden" name="referral_id" value={r.id} />
                        <button
                          type="submit"
                          className="rounded-btn border border-line px-3 py-1.5 text-[12px] font-semibold hover:border-accent hover:text-accent-deep"
                        >
                          Mark as paid
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
