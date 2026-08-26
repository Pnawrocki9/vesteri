import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/affiliate/auth';
import { getDb } from '@/lib/affiliate/env';
import { getSettings } from '@/lib/affiliate/settings';
import AdminShell from '../AdminShell';
import { saveSettings } from '../actions';

export const metadata: Metadata = {
  title: 'Settings — Vesteri Affiliate Admin',
  robots: { index: false, follow: false },
};

export default async function AdminSettingsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { locale } = await params;
  const session = await requireAdmin(locale);
  const { saved, error } = await searchParams;
  const settings = await getSettings(await getDb());

  const inputClass =
    'mt-1.5 w-full rounded-btn border border-line bg-paper-alt px-3 py-2 text-[14px] font-normal normal-case tracking-normal';
  const labelClass = 'block text-[12px] font-semibold tracking-[0.08em] uppercase';

  return (
    <AdminShell locale={locale} active="settings" adminEmail={session.sub}>
      <h1 className="text-[22px] font-bold">Program settings</h1>
      {saved && (
        <p className="mt-4 rounded-btn border border-accent bg-accent/10 px-4 py-2.5 text-[13.5px] text-accent-deep">
          Settings saved. They apply to future sales only.
        </p>
      )}
      {error && (
        <p role="alert" className="mt-4 rounded-btn border border-red-300 bg-red-50 px-4 py-2.5 text-[13.5px] text-red-800">
          Not saved — amounts must be numbers and the currency a 3-letter code.
        </p>
      )}
      <form
        action={saveSettings}
        className="mt-6 grid max-w-[520px] grid-cols-1 gap-4 rounded-card border border-line bg-paper p-6 sm:grid-cols-2"
      >
        <input type="hidden" name="locale" value={locale} />
        <label className={labelClass}>
          Buyer discount
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
          Affiliate commission
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
          Currency
          <input
            type="text"
            name="currency"
            required
            maxLength={3}
            defaultValue={settings.currency}
            className={inputClass}
          />
        </label>
        <label className="flex items-end gap-2 pb-2 text-[13.5px]">
          <input
            type="checkbox"
            name="program_active"
            defaultChecked={settings.program_active === 1}
            className="size-4 accent-(--color-accent)"
          />
          Program open for new registrations
        </label>
        <p className="text-[12.5px] text-muted sm:col-span-2">
          Changes apply to future sales only. Sales already recorded keep the amounts they were
          created with. Closing the program blocks new registrations; existing affiliates keep
          access to their dashboard.
        </p>
        <button
          type="submit"
          className="bg-accent-gradient justify-self-start rounded-cta px-5 py-2.5 text-[14px] font-bold text-paper shadow-cta sm:col-span-2"
        >
          Save settings
        </button>
      </form>
      <p className="mt-4 text-[12.5px] text-muted">
        Last updated {settings.updated_at.slice(0, 16)} UTC
        {settings.updated_by ? ` by ${settings.updated_by}` : ''}.
      </p>
    </AdminShell>
  );
}
