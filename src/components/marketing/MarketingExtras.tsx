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
