import { MARKETPLACE_URL } from '@/lib/site';
type Content = {
  title: string;
  subtitle: string;
  fields: { label: string; value: string }[];
  cta: string;
  note: string;
};
// A visibly labeled preview. No guessed filter contract or fake submission.
export default function MarketplacePanel({ content }: { content: Content }) {
  return (
    <div className="search-panel">
      <div className="search-title">
        <span>{content.title}</span>
        <span>{content.subtitle}</span>
      </div>
      <div className="search-form">
        {content.fields.map((field, index) => (
          <div key={field.label} className="field">
            <label htmlFor={`preview-field-${index}`}>{field.label}</label>
            <select
              id={`preview-field-${index}`}
              disabled
              aria-describedby="search-preview-note"
            >
              <option>{field.value}</option>
            </select>
          </div>
        ))}
        <a className="btn btn-primary" href={MARKETPLACE_URL}>
          {content.cta}
        </a>
      </div>
      <p className="note" id="search-preview-note">
        {content.note}
      </p>
    </div>
  );
}
