import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/affiliate/auth';
import { adminLogin } from '../actions';

export const metadata: Metadata = {
  title: 'Admin login — Vesteri Affiliate Program',
  robots: { index: false, follow: false },
};

// Reachable by URL only — nothing public links here.
export default async function AdminLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string; wait?: string }>;
}) {
  const { locale } = await params;
  const { error, wait } = await searchParams;
  if (await getAdminSession()) {
    redirect(`/${locale}/affiliate/admin`);
  }

  const message =
    error === 'credentials'
      ? 'Wrong email or password.'
      : error === 'throttled'
        ? `Too many attempts. Try again in ${Number(wait) || 60} seconds.`
        : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper-alt px-6 text-ink">
      <form
        action={adminLogin}
        className="w-full max-w-[380px] rounded-card border border-line bg-paper p-8 shadow-lift"
      >
        <input type="hidden" name="locale" value={locale} />
        <h1 className="text-[20px] font-bold">Affiliate admin</h1>
        <p className="mt-1 text-[13px] text-muted">Vesteri internal access only.</p>
        {message && (
          <p role="alert" className="mt-4 rounded-btn border border-red-300 bg-red-50 px-3 py-2 text-[13px] text-red-800">
            {message}
          </p>
        )}
        <label className="mt-6 block text-[12px] font-semibold tracking-[0.08em] uppercase">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="username"
            className="mt-1.5 w-full rounded-btn border border-line bg-paper-alt px-3 py-2 text-[14px] font-normal normal-case tracking-normal"
          />
        </label>
        <label className="mt-4 block text-[12px] font-semibold tracking-[0.08em] uppercase">
          Password
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="mt-1.5 w-full rounded-btn border border-line bg-paper-alt px-3 py-2 text-[14px] font-normal normal-case tracking-normal"
          />
        </label>
        <button
          type="submit"
          className="bg-accent-gradient mt-6 w-full rounded-cta px-4 py-2.5 text-[14px] font-bold text-paper shadow-cta"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
