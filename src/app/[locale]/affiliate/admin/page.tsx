import type { Metadata } from 'next';
import Link from 'next/link';
import { listAffiliates } from '@/lib/affiliate/affiliates';
import { requireAdmin } from '@/lib/affiliate/auth';
import { getDb } from '@/lib/affiliate/env';
import { formatAmount } from '@/lib/affiliate/money';
import { getSettings } from '@/lib/affiliate/settings';
import AdminShell from './AdminShell';

export const metadata: Metadata = {
  title: 'Affiliates — Vesteri Affiliate Admin',
  robots: { index: false, follow: false },
};

export default async function AdminAffiliatesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const session = await requireAdmin(locale);
  const { q } = await searchParams;

  const db = await getDb();
  const [affiliates, settings] = await Promise.all([listAffiliates(db, q), getSettings(db)]);

  return (
    <AdminShell locale={locale} active="affiliates" adminEmail={session.sub}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[22px] font-bold">Affiliates</h1>
        <form method="get" className="flex gap-2">
          <input
            type="search"
            name="q"
            defaultValue={q ?? ''}
            placeholder="Code, name, email or phone"
            className="w-[280px] rounded-btn border border-line bg-paper px-3 py-2 text-[13.5px]"
          />
          <button
            type="submit"
            className="rounded-btn border border-line bg-paper px-4 py-2 text-[13px] font-semibold hover:border-accent hover:text-accent-deep"
          >
            Search
          </button>
        </form>
      </div>

      {affiliates.length === 0 ? (
        <p className="mt-8 text-[14px] text-muted">
          {q ? 'No affiliates match this search.' : 'No affiliates registered yet.'}
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-card border border-line bg-paper">
          <table className="w-full min-w-[820px] text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-line text-[11px] tracking-[0.1em] text-muted uppercase">
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Sales</th>
                <th className="px-4 py-3 text-right">Pending payout</th>
                <th className="px-4 py-3">Registered</th>
              </tr>
            </thead>
            <tbody>
              {affiliates.map((a) => (
                <tr key={a.id} className="border-b border-line last:border-b-0 hover:bg-paper-alt">
                  <td className="px-4 py-3 font-mono font-semibold">
                    <Link
                      href={`/${locale}/affiliate/admin/affiliates/${a.id}`}
                      className="text-accent-deep hover:underline"
                    >
                      {a.code}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/${locale}/affiliate/admin/affiliates/${a.id}`} className="hover:underline">
                      {a.first_name} {a.last_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{a.email}</td>
                  <td className="px-4 py-3">{a.phone}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-btn px-2 py-0.5 text-[11px] font-bold uppercase ${
                        a.status === 'active' ? 'bg-accent/10 text-accent-deep' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">{a.sales_count}</td>
                  <td className="px-4 py-3 text-right">
                    {formatAmount(a.pending_cents, settings.currency)}
                  </td>
                  <td className="px-4 py-3 text-muted">{a.created_at.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
