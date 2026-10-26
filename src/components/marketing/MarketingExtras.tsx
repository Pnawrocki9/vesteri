import MarkdownBody from '@/components/MarkdownBody';
import { extrasFor } from '@/content/marketing-extras-pl';
import '@/components/marketing/how-it-works.css';

type Audience = 'buyers' | 'sellers' | 'agents';

// Polish-only SEO sections added to a marketing page (renders nothing in EN).
export function ExtraSections({ locale, audience }: { locale: string; audience: Audience }) {
  const { sections } = extrasFor(locale, audience);
  if (!sections.length) return null;
  return (
    <section className="section marketing-extras">
      <div className="wrap how-document legal-document">
        {sections.map(({ id, title, body }) => (
          <section className="how-section" key={id} id={id} aria-labelledby={`x-${id}`}>
            <h2 id={`x-${id}`}>{title}</h2>
            <MarkdownBody variant="marketing">{body}</MarkdownBody>
          </section>
        ))}
      </div>
    </section>
  );
}

// Extra FAQ <details>, placed inside the page's existing FAQ group.
export function ExtraFaq({ locale, audience }: { locale: string; audience: Audience }) {
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
