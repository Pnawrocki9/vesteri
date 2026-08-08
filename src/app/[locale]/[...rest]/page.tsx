import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

// A URL that matches no route never reaches a segment's not-found.tsx on its
// own — Next falls back to the global one, which knows nothing about locales
// and renders in English. This catch-all sits below every real route, so it
// only ever runs for unknown addresses, and calling notFound() from inside the
// [locale] segment is what makes the localized page render. The response is
// still a 404.
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  notFound();
}
