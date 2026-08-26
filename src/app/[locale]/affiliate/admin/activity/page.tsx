import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/affiliate/auth';
import { listAudit } from '@/lib/affiliate/audit';
import { getDb } from '@/lib/affiliate/env';
import AdminShell from '../AdminShell';

export const metadata: Metadata = {
  title: 'Activity — Vesteri Affiliate Admin',
  robots: { index: false, follow: false },
};

export default async function AdminActivityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await requireAdmin(locale);
  const entries = await listAudit(await getDb(), 200);

  return (
    <AdminShell locale={locale} active="activity" adminEmail={session.sub}>
      <h1 className="text-[22px] font-bold">Activity</h1>
      <p className="mt-1 text-[13px] text-muted">Last 200 entries, newest first.</p>
      {entries.length === 0 ? (
        <p className="mt-8 text-[14px] text-muted">Nothing recorded yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-card border border-line bg-paper">
          <table className="w-full min-w-[820px] text-left text-[13px]">
            <thead>
              <tr className="border-b border-line text-[11px] tracking-[0.1em] text-muted uppercase">
                <th className="px-4 py-3">When (UTC)</th>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Target</th>
                <th className="px-4 py-3">Change</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-line align-top last:border-b-0">
                  <td className="px-4 py-3 whitespace-nowrap text-muted">
                    {entry.created_at.slice(0, 16)}
                  </td>
                  <td className="px-4 py-3">{entry.actor}</td>
                  <td className="px-4 py-3 font-semibold">{entry.action}</td>
                  <td className="px-4 py-3 font-mono text-[12px]">{entry.target_id ?? '—'}</td>
                  <td className="px-4 py-3">
                    {entry.before_json && (
                      <div className="text-[12px] text-muted">before: {entry.before_json}</div>
                    )}
                    {entry.after_json && <div className="text-[12px]">after: {entry.after_json}</div>}
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
