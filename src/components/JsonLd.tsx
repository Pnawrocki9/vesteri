import { jsonLdScript } from '@/lib/jsonld';

// Renders a schema.org @graph as a JSON-LD script tag. The payload is built
// from repo constants and message strings only — see lib/jsonld.ts — and
// jsonLdScript() escapes it for inline injection.
export default function JsonLd({ nodes }: { nodes: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(...nodes) }}
    />
  );
}
