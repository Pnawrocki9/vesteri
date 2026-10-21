'use client';
import { useRef, useState } from 'react';
type Content = {
  eyebrow: string;
  title: string;
  intro: string;
  tabs: string[];
  groups: { q: string; a: string }[][];
  note: string;
  label: string;
};
export default function CollectiveFaq({ content }: { content: Content }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <section className="section faq" id="faq" aria-labelledby="faqTitle">
      <div className="wrap">
        <div className="faq-intro">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 id="faqTitle">{content.title}</h2>
          <p className="lead">{content.intro}</p>
        </div>
        <div className="faq-tabs" role="tablist" aria-label={content.label}>
          {content.tabs.map((label, index) => (
            <button
              key={label}
              type="button"
              className="faq-tab"
              role="tab"
              id={`faq-tab-${index}`}
              aria-controls={`faq-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === 'ArrowRight' || event.key === 'ArrowLeft')
                  next = 1 - index;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = 1;
                else return;
                event.preventDefault();
                setActive(next);
                tabs.current[next]?.focus();
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {content.groups.map((group, index) => (
          <div
            key={index}
            id={`faq-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${index}`}
            hidden={active !== index}
            className={`faq-group ${active === index ? 'active' : ''}`}
            tabIndex={0}
          >
            {group.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        ))}
        <p className="faq-sub">{content.note}</p>
      </div>
    </section>
  );
}
