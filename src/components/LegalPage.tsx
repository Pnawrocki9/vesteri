import { getTranslations } from 'next-intl/server';
import MarkdownBody from '@/components/MarkdownBody';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import { legalDocuments, type LegalSlug } from '@/generated/legal';
import { getPathname, Link } from '@/i18n/navigation';
import { breadcrumbJsonLd } from '@/lib/jsonld';

// Every legal document renders through here; MarkdownBody supplies the
// typography, shared with the Poradnik articles.

const LEGAL_PAGES: LegalSlug[] = ['privacy', 'terms', 'cookies', 'gdpr', 'ai', 'disclaimers'];

export default async function LegalPage({
  page,
  locale,
}: {
  page: LegalSlug;
  locale: 'pl' | 'en';
}) {
  const t = await getTranslations('legal');
  const tAbout = await getTranslations('about');
  const tDev = await getTranslations('developers');
  const tNav = await getTranslations('nav');
  const document = legalDocuments[locale][page];

  const href = (slug: LegalSlug) => getPathname({ locale, href: `/${slug}` as '/privacy' });

  return (
    <div className="bg-paper-alt text-ink">
      <JsonLd
        nodes={[breadcrumbJsonLd({ href: `/${page}` as '/privacy', locale, name: t(page) })]}
      />
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper-alt px-4 py-[22px] sm:px-6 md:px-14">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vesteri-logo-horizontal.svg"
            width={900}
            height={260}
            alt="VESTERI"
            className="block h-8 w-auto sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Link
            href="/about"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('title')}
          </Link>
          <Link
            href="/developers"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tAbout('nav.developers')}
          </Link>
          <Link
            href="/platform"
            className="hidden text-[13px] font-semibold tracking-[0.1em] uppercase hover:text-accent-deep lg:inline"
          >
            {tDev('nav.listings')}
          </Link>
          <LanguageSwitch />
          <MobileNav
            links={[
              { label: tAbout('title'), href: getPathname({ locale, href: '/about' }) },
              {
                label: tAbout('nav.developers'),
                href: getPathname({ locale, href: '/developers' }),
              },
              { label: tDev('nav.listings'), href: getPathname({ locale, href: '/platform' }) },
            ]}
            openLabel={tNav('openMenu')}
            closeLabel={tNav('closeMenu')}
          />
        </div>
      </nav>

      <main className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 px-6 py-14 md:px-14 md:py-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        {/* Index of the other documents — these are read side by side. */}
        <aside className="lg:sticky lg:top-[110px] lg:self-start">
          <span className="text-[11px] font-bold tracking-[0.16em] text-accent-deep uppercase">
            {t('sectionLabel')}
          </span>
          <ul className="mt-4 flex flex-col border-t border-line">
            {LEGAL_PAGES.map((slug) => (
              <li key={slug}>
                <a
                  href={href(slug)}
                  aria-current={slug === page ? 'page' : undefined}
                  className={`block border-b border-line py-3 text-[13px] leading-[1.5] transition-colors hover:text-accent-deep ${
                    slug === page ? 'font-bold text-ink' : 'text-muted'
                  }`}
                >
                  {t(slug)}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="min-w-0">
          <MarkdownBody>{document}</MarkdownBody>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
