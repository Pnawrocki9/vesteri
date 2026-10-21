'use client';
import { useRef } from 'react';
type Content = {
  cta: string;
  eyebrow: string;
  title: string;
  note: string;
  close: string;
  fields: { label: string; value: string }[];
};
export default function BuyerAssistance({ content }: { content: Content }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="btn btn-primary buyer-request"
        onClick={() => dialog.current?.showModal()}
      >
        {content.cta}
      </button>
      <p className="note">{content.note}</p>
      <dialog
        ref={dialog}
        className="buyer-preview"
        aria-labelledby="buyer-preview-title"
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="modal-box">
          <button
            autoFocus
            className="modal-close"
            type="button"
            aria-label={content.close}
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 id="buyer-preview-title">{content.title}</h2>
          <p className="lead preview-notice">{content.note}</p>
          <fieldset disabled>
            {content.fields.map((field, index) => (
              <label key={field.label} htmlFor={`buyer-preview-${index}`}>
                {field.label}
                <input
                  id={`buyer-preview-${index}`}
                  placeholder={field.value}
                />
              </label>
            ))}
          </fieldset>
        </div>
      </dialog>
    </>
  );
}
