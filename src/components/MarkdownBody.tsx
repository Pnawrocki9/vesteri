import type { ReactNode } from 'react';
import Markdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MdProps = { children?: ReactNode };

// The element map that ties Markdown to the site's type scale and palette —
// there is no prose plugin in play. Shared by the legal documents and the
// Poradnik articles so both render in one typography rather than drifting
// apart.
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

/** Renders a Markdown string in the site's typography. */
export default function MarkdownBody({ children }: { children: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </Markdown>
  );
}
