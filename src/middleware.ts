import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';
import { resolveLegacyPath } from './i18n/legacy-routes';

const localize = createMiddleware(routing);
export default function middleware(request: NextRequest) {
  const legacy = resolveLegacyPath(request.nextUrl.pathname);
  if (!legacy) return localize(request);
  if (legacy.kind === 'redirect') {
    const target = new URL(legacy.target, request.url);
    // Preserve affiliate referral/tracking queries on same-site equivalents.
    // Legacy marketing parameters are not an Estalara filter contract.
    if (target.origin === request.nextUrl.origin)
      target.search = request.nextUrl.search;
    return NextResponse.redirect(target, 308);
  }
  const pl = legacy.locale === 'pl';
  const gone = legacy.kind === 'gone';
  const title = gone
    ? pl
      ? 'Ta strona została wycofana'
      : 'This page has been retired'
    : 'Page not found';
  return new NextResponse(
    `<!doctype html><html lang="${legacy.locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${title} — Vesteri</title></head><body><main><h1>${title}</h1><p><a href="/${legacy.locale}">${pl ? 'Przejdź do Vesteri Collective' : 'Visit Vesteri Collective'}</a></p></main></body></html>`,
    {
      status: gone ? 410 : 404,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex, follow',
      },
    },
  );
}
export const config = { matcher: '/((?!api|_next|.*\\..*).*)' };
