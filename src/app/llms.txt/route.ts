import { getPathname } from '@/i18n/navigation';
import { routing, type StaticPathname } from '@/i18n/routing';
import en from '@/messages/en.json';
import pl from '@/messages/pl.json';
import { CONTACT_EMAIL, MARKETPLACE_URL, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';
export function GET() {
  const messages = { en, pl };
  const pages: StaticPathname[] = [
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
    '/ai',
    '/disclaimers',
  ];
  const sections = routing.locales.map((locale) => {
    const m = messages[locale];
    const url = (href: StaticPathname) =>
      `${SITE_URL}${getPathname({ locale, href })}`;
    return [
      `## ${locale === 'en' ? 'English' : 'Polski'}`,
      '',
      `- [${m.collective.meta.title}](${url('/')}): ${m.collective.meta.description}`,
      `- [${m.collective.affiliate}](${url('/affiliate')})`,
      `- [${m.affiliate.landing.termsLink}](${url('/affiliate/terms')})`,
      `- [${m.affiliate.landing.privacyLink}](${url('/affiliate/privacy')})`,
      ...pages.map(
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
      `> ${en.collective.meta.description}`,
      '',
      'A network of independent real estate professionals. Buyers browse without professional membership.',
      'The public website is available in English and Polish.',
      `Marketplace and agent platform: ${MARKETPLACE_URL}`,
      '',
      ...sections,
      '## Notes',
      '',
      'Homepage photographs are illustrative reference images; final listing photographs and links await owner selection. Search and buyer enquiry controls are labeled previews.',
      'Private member channels and automated Collective commission settlement are not launched.',
      `Contact: ${CONTACT_EMAIL}`,
      `Sitemap: ${SITE_URL}/sitemap.xml`,
      '',
    ].join('\n'),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
}
