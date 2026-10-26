// Explicit migration policy for the retired public website.
// Unknown URLs stay unknown; only actual equivalents receive a redirect.
export const legacyMarketing: Record<string, string> = {
  '/about': '/#about',
  '/o-nas': '/#about',
  '/about-us': '/#about',
  '/sobre-nosotros': '/#about',
  '/ueber-uns': '/#about',
  '/platform': 'platform',
  '/platforma': 'platform',
  '/plataforma': 'platform',
  '/plattform': 'platform',
  '/partners': 'platform',
  '/zostan-partnerem': 'platform',
  '/become-a-partner': 'platform',
  '/hazte-partner': 'platform',
  '/partner-werden': 'platform',
  '/developers': 'gone',
  '/dla-deweloperow': 'gone',
  '/for-developers': 'gone',
  '/para-promotores': 'gone',
  '/fuer-bautraeger': 'gone',
  '/compare': 'gone',
  '/porownania': 'gone',
  '/comparativas': 'gone',
  '/vergleiche': 'gone',
  '/articles': 'gone',
  '/poradnik': 'gone',
  '/guides': 'gone',
  '/guias': 'gone',
  '/ratgeber': 'gone',
  '/compare/leady-z-portali': 'gone',
  '/porownania/leady-z-portali': 'gone',
  '/comparativas/leady-z-portali': 'gone',
  '/vergleiche/leady-z-portali': 'gone',
  '/compare/portal-leads': 'gone',
  '/porownania/portal-leads': 'gone',
  '/comparativas/portal-leads': 'gone',
  '/vergleiche/portal-leads': 'gone',
  '/compare/leads-de-portales': 'gone',
  '/porownania/leads-de-portales': 'gone',
  '/comparativas/leads-de-portales': 'gone',
  '/vergleiche/leads-de-portales': 'gone',
  '/compare/leads-von-portalen': 'gone',
  '/porownania/leads-von-portalen': 'gone',
  '/comparativas/leads-von-portalen': 'gone',
  '/vergleiche/leads-von-portalen': 'gone',
  '/compare/wlasne-biuro-sprzedazy': 'gone',
  '/porownania/wlasne-biuro-sprzedazy': 'gone',
  '/comparativas/wlasne-biuro-sprzedazy': 'gone',
  '/vergleiche/wlasne-biuro-sprzedazy': 'gone',
  '/compare/own-sales-office': 'gone',
  '/porownania/own-sales-office': 'gone',
  '/comparativas/own-sales-office': 'gone',
  '/vergleiche/own-sales-office': 'gone',
  '/compare/oficina-de-ventas-propia': 'gone',
  '/porownania/oficina-de-ventas-propia': 'gone',
  '/comparativas/oficina-de-ventas-propia': 'gone',
  '/vergleiche/oficina-de-ventas-propia': 'gone',
  '/compare/eigenes-vertriebsbuero': 'gone',
  '/porownania/eigenes-vertriebsbuero': 'gone',
  '/comparativas/eigenes-vertriebsbuero': 'gone',
  '/vergleiche/eigenes-vertriebsbuero': 'gone',
  '/compare/siec-posrednikow': 'gone',
  '/porownania/siec-posrednikow': 'gone',
  '/comparativas/siec-posrednikow': 'gone',
  '/vergleiche/siec-posrednikow': 'gone',
  '/compare/broker-networks': 'gone',
  '/porownania/broker-networks': 'gone',
  '/comparativas/broker-networks': 'gone',
  '/vergleiche/broker-networks': 'gone',
  '/compare/redes-de-intermediarios': 'gone',
  '/porownania/redes-de-intermediarios': 'gone',
  '/comparativas/redes-de-intermediarios': 'gone',
  '/vergleiche/redes-de-intermediarios': 'gone',
  '/compare/maklernetzwerke': 'gone',
  '/porownania/maklernetzwerke': 'gone',
  '/comparativas/maklernetzwerke': 'gone',
  '/vergleiche/maklernetzwerke': 'gone',
  '/articles/nordzypern-und-republik-zypern': 'gone',
  '/poradnik/nordzypern-und-republik-zypern': 'gone',
  '/guides/nordzypern-und-republik-zypern': 'gone',
  '/guias/nordzypern-und-republik-zypern': 'gone',
  '/ratgeber/nordzypern-und-republik-zypern': 'gone',
  '/articles/wie-wir-bautraeger-pruefen': 'gone',
  '/poradnik/wie-wir-bautraeger-pruefen': 'gone',
  '/guides/wie-wir-bautraeger-pruefen': 'gone',
  '/guias/wie-wir-bautraeger-pruefen': 'gone',
  '/ratgeber/wie-wir-bautraeger-pruefen': 'gone',
  '/articles/thailand-2026-fakten-und-schlagzeilen': 'gone',
  '/poradnik/thailand-2026-fakten-und-schlagzeilen': 'gone',
  '/guides/thailand-2026-fakten-und-schlagzeilen': 'gone',
  '/guias/thailand-2026-fakten-und-schlagzeilen': 'gone',
  '/ratgeber/thailand-2026-fakten-und-schlagzeilen': 'gone',
  '/articles/mehrwertsteuer-zypern-5-oder-19': 'gone',
  '/poradnik/mehrwertsteuer-zypern-5-oder-19': 'gone',
  '/guides/mehrwertsteuer-zypern-5-oder-19': 'gone',
  '/guias/mehrwertsteuer-zypern-5-oder-19': 'gone',
  '/ratgeber/mehrwertsteuer-zypern-5-oder-19': 'gone',
  '/articles/kauf-vom-plan-raten-und-treuhand': 'gone',
  '/poradnik/kauf-vom-plan-raten-und-treuhand': 'gone',
  '/guides/kauf-vom-plan-raten-und-treuhand': 'gone',
  '/guias/kauf-vom-plan-raten-und-treuhand': 'gone',
  '/ratgeber/kauf-vom-plan-raten-und-treuhand': 'gone',
  '/articles/northern-cyprus-vs-republic-of-cyprus': 'gone',
  '/poradnik/northern-cyprus-vs-republic-of-cyprus': 'gone',
  '/guides/northern-cyprus-vs-republic-of-cyprus': 'gone',
  '/guias/northern-cyprus-vs-republic-of-cyprus': 'gone',
  '/ratgeber/northern-cyprus-vs-republic-of-cyprus': 'gone',
  '/articles/how-we-vet-developers': 'gone',
  '/poradnik/how-we-vet-developers': 'gone',
  '/guides/how-we-vet-developers': 'gone',
  '/guias/how-we-vet-developers': 'gone',
  '/ratgeber/how-we-vet-developers': 'gone',
  '/articles/thailand-2026-facts-vs-headlines': 'gone',
  '/poradnik/thailand-2026-facts-vs-headlines': 'gone',
  '/guides/thailand-2026-facts-vs-headlines': 'gone',
  '/guias/thailand-2026-facts-vs-headlines': 'gone',
  '/ratgeber/thailand-2026-facts-vs-headlines': 'gone',
  '/articles/cyprus-property-vat-5-or-19': 'gone',
  '/poradnik/cyprus-property-vat-5-or-19': 'gone',
  '/guides/cyprus-property-vat-5-or-19': 'gone',
  '/guias/cyprus-property-vat-5-or-19': 'gone',
  '/ratgeber/cyprus-property-vat-5-or-19': 'gone',
  '/articles/off-plan-deposits-and-escrow': 'gone',
  '/poradnik/off-plan-deposits-and-escrow': 'gone',
  '/guides/off-plan-deposits-and-escrow': 'gone',
  '/guias/off-plan-deposits-and-escrow': 'gone',
  '/ratgeber/off-plan-deposits-and-escrow': 'gone',
  '/articles/chipre-del-norte-y-republica-de-chipre': 'gone',
  '/poradnik/chipre-del-norte-y-republica-de-chipre': 'gone',
  '/guides/chipre-del-norte-y-republica-de-chipre': 'gone',
  '/guias/chipre-del-norte-y-republica-de-chipre': 'gone',
  '/ratgeber/chipre-del-norte-y-republica-de-chipre': 'gone',
  '/articles/como-verificamos-a-los-promotores': 'gone',
  '/poradnik/como-verificamos-a-los-promotores': 'gone',
  '/guides/como-verificamos-a-los-promotores': 'gone',
  '/guias/como-verificamos-a-los-promotores': 'gone',
  '/ratgeber/como-verificamos-a-los-promotores': 'gone',
  '/articles/tailandia-2026-hechos-y-titulares': 'gone',
  '/poradnik/tailandia-2026-hechos-y-titulares': 'gone',
  '/guides/tailandia-2026-hechos-y-titulares': 'gone',
  '/guias/tailandia-2026-hechos-y-titulares': 'gone',
  '/ratgeber/tailandia-2026-hechos-y-titulares': 'gone',
  '/articles/iva-en-chipre-5-o-19': 'gone',
  '/poradnik/iva-en-chipre-5-o-19': 'gone',
  '/guides/iva-en-chipre-5-o-19': 'gone',
  '/guias/iva-en-chipre-5-o-19': 'gone',
  '/ratgeber/iva-en-chipre-5-o-19': 'gone',
  '/articles/compra-sobre-plano-pagos-y-escrow': 'gone',
  '/poradnik/compra-sobre-plano-pagos-y-escrow': 'gone',
  '/guides/compra-sobre-plano-pagos-y-escrow': 'gone',
  '/guias/compra-sobre-plano-pagos-y-escrow': 'gone',
  '/ratgeber/compra-sobre-plano-pagos-y-escrow': 'gone',
  '/articles/cypr-polnocny-a-republika-cypru': 'gone',
  '/poradnik/cypr-polnocny-a-republika-cypru': 'gone',
  '/guides/cypr-polnocny-a-republika-cypru': 'gone',
  '/guias/cypr-polnocny-a-republika-cypru': 'gone',
  '/ratgeber/cypr-polnocny-a-republika-cypru': 'gone',
  '/articles/jak-weryfikujemy-deweloperow': 'gone',
  '/poradnik/jak-weryfikujemy-deweloperow': 'gone',
  '/guides/jak-weryfikujemy-deweloperow': 'gone',
  '/guias/jak-weryfikujemy-deweloperow': 'gone',
  '/ratgeber/jak-weryfikujemy-deweloperow': 'gone',
  '/articles/przyklad': 'gone',
  '/poradnik/przyklad': 'gone',
  '/guides/przyklad': 'gone',
  '/guias/przyklad': 'gone',
  '/ratgeber/przyklad': 'gone',
  '/articles/tajlandia-2026-fakty-i-naglowki': 'gone',
  '/poradnik/tajlandia-2026-fakty-i-naglowki': 'gone',
  '/guides/tajlandia-2026-fakty-i-naglowki': 'gone',
  '/guias/tajlandia-2026-fakty-i-naglowki': 'gone',
  '/ratgeber/tajlandia-2026-fakty-i-naglowki': 'gone',
  '/articles/vat-na-cyprze-5-czy-19': 'gone',
  '/poradnik/vat-na-cyprze-5-czy-19': 'gone',
  '/guides/vat-na-cyprze-5-czy-19': 'gone',
  '/guias/vat-na-cyprze-5-czy-19': 'gone',
  '/ratgeber/vat-na-cyprze-5-czy-19': 'gone',
  '/articles/off-plan-transze-escrow': 'gone',
  '/poradnik/off-plan-transze-escrow': 'gone',
  '/guides/off-plan-transze-escrow': 'gone',
  '/guias/off-plan-transze-escrow': 'gone',
  '/ratgeber/off-plan-transze-escrow': 'gone',
};
const legalAliases: Record<string, string[]> = {
  privacy: [
    'privacy',
    'polityka-prywatnosci',
    'privacy-policy',
    'politica-de-privacidad',
    'datenschutz',
  ],
  terms: [
    'terms',
    'regulamin',
    'terms-of-service',
    'terminos-del-servicio',
    'nutzungsbedingungen',
  ],
  cookies: ['cookies'],
  gdpr: ['gdpr', 'rodo', 'rgpd', 'dsgvo'],
  ai: ['ai', 'informacja-o-ai', 'ai-notice', 'aviso-de-ia', 'ki-hinweis'],
  disclaimers: [
    'disclaimers',
    'zastrzezenia',
    'avisos-legales',
    'haftungsausschluss',
  ],
};
const englishLegal: Record<string, string> = {
  privacy: 'privacy-policy',
  terms: 'terms-of-service',
  cookies: 'cookies',
  gdpr: 'gdpr',
  ai: 'ai-notice',
  disclaimers: 'disclaimers',
};
// Exact (locale-prefixed) URLs served as 301 by next.config.ts.
// next.config.ts redirects() serves these first; middleware mirrors them.
export const LEGACY_PERMANENT: Record<string, string> = {
  '/pl/poradnik/cypr-polnocny-a-republika-cypru':
    '/pl/nieruchomosci-za-granica/cypr',
};
const AGENT_TOPICS = [
  'developers',
  'for-developers',
  'dla-deweloperow',
  'para-promotores',
  'fuer-bautraeger',
  'siec-posrednikow',
  'broker-networks',
  'redes-de-intermediarios',
  'maklernetzwerke',
];
export type LegacyResult =
  | { kind: 'redirect'; target: string; status?: 301 }
  | { kind: 'unknown'; locale: 'en' | 'pl' };
export function resolveLegacyPath(pathname: string): LegacyResult | null {
  const permanent = LEGACY_PERMANENT[pathname.replace(/\/+$/, '')];
  if (permanent) return { kind: 'redirect', target: permanent, status: 301 };
  const parts = pathname.split('/').filter(Boolean);
  const first = parts[0];
  const retiredLocale = first === 'es' || first === 'de';
  const prefixed = retiredLocale || first === 'en' || first === 'pl';
  const locale = first === 'en' || retiredLocale ? 'en' : 'pl';
  const path = '/' + (prefixed ? parts.slice(1) : parts).join('/');
  if (retiredLocale) {
    if (path === '/') return { kind: 'redirect', target: '/en' };
    // Affiliate account URLs are stable across locales, including admin.
    if (
      /^\/affiliate(?:\/(?:register|login|dashboard|terms|privacy|admin(?:\/(?:login|settings|activity|affiliates\/[^/]+))?))?$/.test(
        path,
      )
    )
      return { kind: 'redirect', target: '/en' + path };
    for (const [slug, aliases] of Object.entries(legalAliases))
      if (aliases.includes(path.slice(1)))
        return { kind: 'redirect', target: '/en/' + englishLegal[slug] };
  }
  const legacy = legacyMarketing[path];
  // Retired content: 301 to the closest live equivalent (was 410).
  // Developer and broker-network pages -> agents page; the rest -> home.
  if (legacy === 'gone') {
    const agents = AGENT_TOPICS.includes(path.split('/').pop() ?? '');
    const target = agents
      ? locale === 'pl'
        ? '/pl/dla-agentow'
        : '/en/agents'
      : '/' + locale;
    return { kind: 'redirect', target, status: 301 };
  }
  if (legacy === 'platform')
    return { kind: 'redirect', target: 'https://vesteri.estalara.com' };
  if (legacy === '/#about')
    return {
      kind: 'redirect',
      target: locale === 'pl' ? '/pl/dla-agentow#about' : '/en/agents#about',
    };
  return retiredLocale ? { kind: 'unknown', locale: 'en' } : null;
}
