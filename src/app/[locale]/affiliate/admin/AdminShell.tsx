import Link from 'next/link';
import { adminLogout } from './actions';

// Internal tool: deliberately plain, English-only, and outside the marketing
// design system beyond the shared color tokens. Not linked from any public page.

const TABS = [
  { key: 'affiliates', label: 'Affiliates', path: '' },
  { key: 'settings', label: 'Settings', path: '/settings' },
  { key: 'activity', label: 'Activity', path: '/activity' },
] as const;

export type AdminTab = (typeof TABS)[number]['key'];

export default function AdminShell({
  locale,
  active,
  adminEmail,
  children,
}: {
  locale: string;
  active: AdminTab;
  adminEmail: string;
  children: React.ReactNode;
}) {
  const base = `/${locale}/affiliate/admin`;
  return (
    <div className="min-h-screen bg-paper-alt text-ink">
      <header className="border-b border-line bg-paper px-6 py-4">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-[13px] font-bold tracking-[0.16em] text-accent-deep uppercase">
              Vesteri · Affiliate admin
            </span>
            <nav className="flex gap-4">
              {TABS.map((tab) => (
                <Link
                  key={tab.key}
                  href={`${base}${tab.path}`}
                  aria-current={tab.key === active ? 'page' : undefined}
                  className={`text-[13.5px] hover:text-accent-deep ${
                    tab.key === active ? 'font-bold text-ink' : 'text-muted'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </div>
          <form action={adminLogout} className="flex items-center gap-3">
            <input type="hidden" name="locale" value={locale} />
            <span className="text-[12px] text-muted">{adminEmail}</span>
            <button
              type="submit"
              className="rounded-btn border border-line px-3 py-1.5 text-[12.5px] font-semibold hover:border-accent hover:text-accent-deep"
            >
              Log out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1100px] px-6 py-10">{children}</main>
    </div>
  );
}
