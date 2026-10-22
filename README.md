# Vesteri Collective V10.7

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4 and next-intl.
The authoritative six-page bilingual handoff is in:

`design-reference/Vesteri_Collective_V10_7_Codex_Handoff/`

## Development and checks

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit --incremental false
npm test
npm run build
npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion
```

The final command builds a Cloudflare artifact locally; it does not publish it.
The adapter currently requires the existing unsupported-Next-version flag.

| Audience | English | Polish |
| --- | --- | --- |
| Buyers | `/en` | `/pl` |
| Sellers | `/en/sellers` | `/pl/sprzedajacy` |
| Agents | `/en/agents` | `/pl/dla-agentow` |

`/` negotiates language using next-intl, with Polish as fallback. Audience routes
and their translations are defined in `src/i18n/routing.ts`. Language switching
preserves the audience and current section, including on Sellers pages.
Only EN/PL are advertised in navigation, metadata, sitemap and llms.txt.

Reference-derived components and scoped styles live in `src/components/marketing/`.
Copy is in `src/messages/{en,pl}.json` under `marketing`, grouped by audience and
reference section. Native `details` elements provide keyboard-accessible FAQ:
8 buyer, 7 seller and 12 agent entries per language. Automated content checks
compare the translated editorial text and FAQ to all six authoritative HTML files,
with an explicit exception for the owner-approved two-line buyer intro title.

DM Sans, Manrope and the official mark reproduce the reference. Fonts are
self-hosted in `src/fonts/` with their SIL Open Font License files. Small Noto
Sans Symbols subsets supply interface glyphs. Montserrat and the existing shared
templates remain unchanged for the Affiliate Program and legal pages.

## Photographs and destinations

`src/content/collective-properties.ts` contains three manually curated image/link
slots. Current photographs are illustrative mockup images, explicitly identified
as previews. Without an owner-confirmed `listingUrl`, a card is an article rather
than a link. Replace images and set the corresponding exact verified listing URL
when supplied. No property details, marketplace API or synchronization is added.

All marketplace/agent-platform entry links use `https://vesteri.estalara.com`.
No deeper application destinations are assumed. Presentation/consultation CTAs
open that same entry point; they do not simulate booking. Seller contact CTAs use
the reference mailto inbox, `contact@vesteri.com`, with a localized subject. There
are no hosted enquiry forms or booking systems.

Local assets in `public/img/collective/` reproduce the reference Unsplash photos:

- Hero and international: `photo-1600607687920-4e2a09cf159d`.
- Properties: `photo-1600596542815-ffad4c1539a9`,
  `photo-1600607688969-a5bfcd646154`, `photo-1600566753190-17f0baa2a6c3`.
- Seller hero: `photo-1600607687939-ce8a6c25118c`.

The official mark is `public/logo/vesteri-mark-teal-gradient.svg`. Reference
photographs are temporary; final assets and publication rights need owner review.
The owner-approved footer displays company/contact details and Collective rules.
Reference-only review annotations have been removed. The Collective terms item
is inactive until the approved document is supplied; its future URL is configured
in `src/components/marketing/MarketingFooter.tsx`.

## Retained Affiliate Program and infrastructure

Affiliate routes, registration, authentication, account/admin dashboards, referral
codes, manual sale attribution, fixed commission snapshots, payouts, rate limits,
audit history, settings and legal consents are preserved. Entry points remain
`/en/affiliate` and `/pl/affiliate`. Public footer and llms.txt promotion links are
currently hidden at the owner’s request; the program remains available at its
existing direct URLs. Affiliate
source, schema, migrations, security code and database binding are unchanged.

Retained legal documents are linked from every footer. Only EN/PL legal content
is bundled. Archived ES/DE and old article/map sources are not public marketing
pages. Existing analytics, consent integration, SEO helpers, security headers,
Cloudflare/OpenNext configuration and deployment bindings are retained.

`src/i18n/legacy-routes.ts` defines the migration policy:

- ES/DE homepages, recognized affiliate URLs and legal documents redirect to
  their English equivalents, preserving queries.
- Former About URLs redirect to the corresponding section on the Agents page.
- Former platform/partnership URLs redirect to the verified marketplace host.
- Retired developer/guide/comparison URLs without equivalents return 410/noindex.
- Unknown URLs remain 404.

## Publication boundary and baseline

Implementation baseline: `6930f9281d852be3a2146482183e9709b67d8c86` on existing
primary branch `claude/vesteri-website-kxnbng`. No separate feature branch is used.
Keep this SHA as the pre-change recovery point. Before discarding local work,
export its diff and new files; restoring this baseline must be an explicit action.
A later production rollback requires an owner-approved deployment of a verified
previous revision; do not reset or force-push the remote branch.

**Do not push or deploy without separate owner approval.** The existing
`.github/workflows/deploy.yml` automatically deploys primary-branch pushes and
can apply remote D1 migrations. It also supports manual dispatch. Workflows,
Git configuration and database migrations are outside this implementation scope.
`npm run deploy` publishes; `npm run preview` also builds and starts a preview.
Neither is needed for the local implementation review.

`npm run build` runs the existing geographic/legal/article generators. Archived
sources remain available to these generators without restoring their old routes.

## Decisions required before publication

- Actual listing photographs, publication rights and exact listing URLs.
- Confirmation of the seller inbox and operational enquiry handling.
- Working presentation/LIVE/webinar/consultation destinations and actual features.
- Current membership/AI/pricing terms and contractual cooperation/exclusivity rules.
- Commercial/legal review of commission sharing, the 5–8% foreign-developer
  commission range, the introducing-agent share and the 10% revenue promotion
  commitment, all retained verbatim from the approved reference.
- Supply the Collective terms document to activate the prepared footer item.
- Separate explicit approval for production publication.
