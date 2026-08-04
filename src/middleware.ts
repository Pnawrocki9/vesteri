import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Locale negotiation: the user's saved cookie wins, then Accept-Language,
// then Polish as the fallback (all next-intl defaults with this routing).
export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)',
};
