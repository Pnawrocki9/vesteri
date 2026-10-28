import { Link } from '@/i18n/navigation';
import { extrasFor } from '@/content/marketing-extras-pl';
import { commissionGuidance } from '@/content/commission-guidance';
import './marketing-support.css';

type Audience = 'buyers' | 'sellers' | 'agents';

export function CommissionGuidance({ locale }: { locale: 'pl' | 'en' }) {
  const c = commissionGuidance[locale];
  return (
    <section
      className="commission-summary"
      id="podzial-prowizji"
      aria-labelledby="commission-title"
    >
      <h3 id="commission-title">{c.title}</h3>
      <p>{c.intro}</p>
      <p className="commission-freedom">
        <strong>{c.freedom}</strong>
      </p>
      <div className="commission-grid">
        <article>
          <h4>{c.referral}</h4>
          <p>
            <strong>25%</strong> {c.referring}
            <br />
            <strong>75%</strong> {c.handling}
          </p>
        </article>
        <article>
          <h4>{c.joint}</h4>
          <p>
            <strong>50%</strong> {c.listing}
            <br />
            <strong>50%</strong> {c.buying}
          </p>
        </article>
      </div>
      <p className="commission-basis">{c.terms}</p>
      <Link
        className="support-link"
        href={{ pathname: '/how-it-works', hash: 'commission' }}
      >
        {c.link}
      </Link>
    </section>
  );
}

/** Contextual guide links use existing URLs and explicit reading links. */
export function RelatedGuides({
  locale,
  audience,
}: {
  locale: string;
  audience: Audience;
}) {
  const { guides, guidesTitle } = extrasFor(locale, audience);
  if (!guides.length) return null;
  return (
    <section className="related-guides" aria-labelledby={`guides-${audience}`}>
      <div className="wrap">
        <span className="eyebrow">Poradniki Vesteri</span>
        <h2 id={`guides-${audience}`}>{guidesTitle}</h2>
        <div
          className={`related-guides-grid${guides.length === 2 ? ' related-guides-grid--two' : ''}`}
        >
          {guides.map(({ href, title, description }) => (
            <article key={href}>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href={href} aria-label={`Przeczytaj: ${title}`}>
                Przeczytaj
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerGuideLink({ locale }: { locale: string }) {
  if (locale !== 'pl') return null;
  return (
    <p className="career-guide">
      Dopiero zaczynasz?{' '}
      <Link href="/poradnik/jak-zostac-agentem-nieruchomosci">
        Sprawdź, jak zostać agentem nieruchomości.
      </Link>
    </p>
  );
}

export function SellerInsurancePoint({ locale }: { locale: string }) {
  return locale === 'pl' ? (
    <li>W Polsce: aktualne OC pośrednika i kopia polisy dołączona do umowy</li>
  ) : null;
}

export function ExtraFaq({
  locale,
  audience,
}: {
  locale: string;
  audience: Audience;
}) {
  return (
    <>
      {extrasFor(locale, audience).faq.map(({ q, a }) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </>
  );
}
