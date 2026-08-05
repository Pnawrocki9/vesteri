import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '@/lib/site';

// Full site footer — company details, contact, legal links and attribution.
// Shared by the For Developers and About pages; the copy still lives in the
// `developers` namespace it was written for.
export default async function SiteFooter() {
  const t = await getTranslations('developers');
  const tLegal = await getTranslations('legal');

  return (
    <footer className="bg-ink-deep px-6 pt-[72px] pb-9 md:px-14">
      <h2 className="mb-12 max-w-[720px] text-[24px] font-bold text-balance text-paper-alt md:text-h2">
        {t('footer.title')}
      </h2>
      <div className="grid grid-cols-1 gap-10 border-b border-line-dark pb-11 md:grid-cols-[1fr_auto] md:gap-20">
        <div className="flex flex-col gap-5">
          <Link href="/" className="self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/vesteri-logo-horizontal-reversed.svg"
              alt="VESTERI"
              className="block h-[38px]"
            />
          </Link>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
              {t('footer.addrLabel')}
            </span>
            <span className="text-[13.5px] leading-[1.7] whitespace-pre-line text-muted-dark">
              {t('footer.addr')}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
              {t('footer.contactLabel')}
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="self-start text-[13.5px] text-muted-dark hover:text-accent-light"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="self-start text-[13.5px] text-muted-dark hover:text-accent-light"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3.5 md:text-right">
          <span className="text-[11px] font-bold tracking-[0.16em] text-accent-light uppercase">
            {t('footer.legalLabel')}
          </span>
          <div className="flex flex-col gap-2.5">
            {(['privacy', 'terms', 'cookies', 'gdpr', 'ai', 'disclaimers'] as const).map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                className="text-[13.5px] text-muted-dark hover:text-paper-alt"
              >
                {tLegal(page)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-6">
        <span className="text-[12px] text-muted-dark-2">
          {t.rich('footer.madeBy', {
            link: (chunks) => (
              <a href="https://www.estalara.com" rel="noreferrer" className="hover:text-paper-alt">
                {chunks}
              </a>
            ),
          })}
        </span>
        <span className="text-[12px] whitespace-nowrap text-muted-dark-2">
          {t('footer.copyright')}
        </span>
      </div>
    </footer>
  );
}
