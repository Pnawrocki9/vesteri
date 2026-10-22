import { getPathname } from '@/i18n/navigation';
import { routing, type StaticPathname } from '@/i18n/routing';
import en from '@/messages/en.json';
import pl from '@/messages/pl.json';
import { CONTACT_EMAIL, MARKETPLACE_URL, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';
export function GET() {
  const messages = { en, pl };
  const legal: StaticPathname[] = [
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/ai',
    '/disclaimers',
  ];
  const audiences = [
    ['buyers', '/'],
    ['sellers', '/sellers'],
    ['agents', '/agents'],
  ] as const;
  const sections = routing.locales.map((locale) => {
    const m = messages[locale];
    const url = (href: StaticPathname) =>
      `${SITE_URL}${getPathname({ locale, href })}`;
    return [
      `## ${locale === 'en' ? 'English' : 'Polski'}`,
      '',
      ...audiences.map(
        ([audience, href]) =>
          `- [${m.marketing[audience].meta.title}](${url(href)}): ${m.marketing[audience].meta.description}`,
      ),
      `- [${m.marketing.buyers.footer12}](${url('/affiliate')})`,
      `- [${m.affiliate.landing.termsLink}](${url('/affiliate/terms')})`,
      `- [${m.affiliate.landing.privacyLink}](${url('/affiliate/privacy')})`,
      ...legal.map(
        (href) =>
          `- [${m.legal[href.slice(1) as keyof typeof m.legal]}](${url(href)})`,
      ),
      '',
    ].join('\n');
  });
  return new Response(
    [
      '# Vesteri Collective',
      '',
      `> ${en.marketing.buyers.meta.description}`,
      '',
      'The public marketing website is available in English and Polish.',
      `Marketplace and agent platform: ${MARKETPLACE_URL}`,
      '',
      ...sections,
      '## Notes',
      '',
      'Property photographs are illustrative reference images. Final listing photographs and exact listing URLs await owner selection.',
      'Consultation and presentation links open the marketplace; no booking or enquiry forms are hosted on this website.',
      'Private member channels and automated Collective commission settlement are not launched.',
      `Contact: ${CONTACT_EMAIL}`,
      `Sitemap: ${SITE_URL}/sitemap.xml`,
      '',
    ].join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
}
