import type { ReactNode } from 'react';
import Markdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getTranslations } from 'next-intl/server';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import { legalDocuments, type LegalSlug } from '@/generated/legal';
import { getPathname, Link } from '@/i18n/navigation';
import { breadcrumbJsonLd } from '@/lib/jsonld';

type MdProps = { children?: ReactNode };

// Every legal document renders through here. The source is Markdown, so this
// element map is what ties it to the site's type scale and palette — there is
// no prose plugin in play.
//
// Each renderer takes only what it needs instead of spreading the incoming
// props: react-markdown also hands over the mdast node, and spreading that
// puts the whole syntax tree — positions and all — into the page payload.
const components: Components = {
  h1: ({ children }: MdProps) => (
    <h1 className="mb-3 text-[32px] leading-[1.15] font-bold text-balance text-ink md:text-h2-lg">
      {children}
    </h1>
  ),
  h2: ({ children }: MdProps) => (
    <h2 className="mt-14 mb-4 text-[20px] font-bold text-ink md:text-[24px]">{children}</h2>
  ),
  h3: ({ children }: MdProps) => (
    <h3 className="mt-8 mb-3 text-[16px] font-bold text-ink">{children}</h3>
  ),
  p: ({ children }: MdProps) => (
    <p className="mb-4 text-[15px] leading-[1.8] text-muted">{children}</p>
  ),
  ul: ({ children }: MdProps) => (
    <ul className="mb-5 flex list-disc flex-col gap-2 pl-5 marker:text-accent-light">{children}</ul>
  ),
  ol: ({ children }: MdProps) => (
    <ol className="mb-5 flex list-decimal flex-col gap-2 pl-5 marker:font-bold marker:text-accent">
      {children}
    </ol>
  ),
  li: ({ children }: MdProps) => (
    <li className="text-[15px] leading-[1.75] text-muted">{children}</li>
  ),
  strong: ({ children }: MdProps) => <strong className="font-bold text-ink">{children}</strong>,
  em: ({ children }: MdProps) => <em className="text-muted italic">{children}</em>,
  a: ({ children, href }: MdProps & { href?: string }) => (
    <a href={href} className="text-accent underline underline-offset-2 hover:text-accent-deep">
      {children}
    </a>
  ),
  code: ({ children }: MdProps) => (
    <code className="rounded-[3px] bg-paper px-1.5 py-0.5 font-mono text-[13px] text-ink">
      {children}
    </code>
  ),
  hr: () => <hr className="my-10 border-line" />,
  blockquote: ({ children }: MdProps) => (
    <blockquote className="my-6 border-l-2 border-accent pl-5 text-[15px] text-muted">
      {children}
    </blockquote>
  ),
  // Wide tables scroll inside their own container rather than pushing the page.
  table: ({ children }: MdProps) => (
    <div className="mb-6 overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left">{children}</table>
    </div>
  ),
  thead: ({ children }: MdProps) => <thead className="bg-paper">{children}</thead>,
  tbody: ({ children }: MdProps) => <tbody>{children}</tbody>,
  tr: ({ children }: MdProps) => <tr>{children}</tr>,
  th: ({ children }: MdProps) => (
    <th className="border-b border-line px-4 py-3 text-[12px] font-bold tracking-[0.08em] text-ink uppercase">
      {children}
    </th>
  ),
  td: ({ children }: MdProps) => (
    <td className="border-b border-line px-4 py-3 align-top text-[14px] leading-[1.7] text-muted">
      {children}
    </td>
  ),
};

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
          <Markdown remarkPlugins={[remarkGfm]} components={components}>
            {document}
          </Markdown>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
