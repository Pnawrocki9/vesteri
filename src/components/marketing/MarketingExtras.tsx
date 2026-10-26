import { Link } from '@/i18n/navigation';
import { extrasFor } from '@/content/marketing-extras-pl';
import './marketing-support.css';

type Audience = 'buyers' | 'sellers' | 'agents';

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

export function CommissionSummary({ locale }: { locale: string }) {
  if (locale !== 'pl') return null;
  return (
    <div
      className="commission-summary"
      id="podzial-prowizji"
      aria-labelledby="commission-summary-title"
    >
      <h3 id="commission-summary-title">Podział prowizji przy współpracy</h3>
      <div className="commission-grid">
        <article>
          <h4>Polecenie klienta</h4>
          <p>
            <strong>25%</strong> dla członka polecającego
            <br />
            <strong>75%</strong> dla członka obsługującego
          </p>
        </article>
        <article>
          <h4>Wspólna transakcja</h4>
          <p>
            <strong>50%</strong> dla Agenta Oferty
            <br />
            <strong>50%</strong> dla Agenta Kupującego
          </p>
        </article>
      </div>
      <p className="commission-basis">
        Domyślny podział dotyczy prowizji netto faktycznie otrzymanej od
        klienta. Inne proporcje wymagają zgody obu członków, potwierdzonej w
        systemie lub e-mailem przed pierwszą prezentacją.
      </p>
      <Link
        href={{ pathname: '/how-it-works', hash: 'commission' }}
        className="support-link"
      >
        Zobacz zasady współpracy i rozliczeń
      </Link>
    </div>
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
