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
Reference-only review annotations have been removed. The Collective rules footer item opens `/pl/regulamin-vesteri-collective` or
`/en/vesteri-collective-rules`. Both pages use the owner-approved v2.2 Market/community model, effective
28 October 2026, with matching DOCX downloads under `public/docs/collective/v2.2/`.
Previous downloads remain archived; current links point only to v2.2.
Markdown sources live in `src/content/legal/{pl,en}/collective-rules.md`.

## Collective marketplace and community

The public website describes Vesteri Collective as independent agents sharing a
marketplace, professional standards and Vesteri Channels. Every agent who opens
a platform account receives a manually sent Channels email invitation; listing
publication requires separate approval. There is no Channels signup integration
or invented invitation URL on this marketing site. Invitations are operationally
sent by the Vesteri team. The owner confirmed there are no existing members or
transactions under the retired rules before the v2.0 update.

Related-guide cards stay integrated in the existing marketing layout. Keep
PL/EN copy, guides, how-it-works, metadata, JSON-LD and llms.txt aligned. Existing
commission/cooperation anchors resolve to the optional guidance; lead-agent promises are removed from current marketing. Commission examples
are non-binding guidance; agents freely agree any cooperation and compensation.
The separate Affiliate Program remains unchanged.

## Cookie preferences and analytics

The shared locale layout initializes Google consent as denied. Google Analytics
(`G-BQC3M4ED9E`) is downloaded only after analytics consent; HubSpot is downloaded
only after marketing consent. Cloudflare Web Analytics remains cookieless.
`CookieConsent` provides bilingual choices, independent categories and settings
buttons in both public footer components. Preferences are stored locally for
180 days. Withdrawal clears accessible provider cookies and reloads the page
to unload provider code, without changing necessary account/referral cookies.
Do not add unconditional Google or HubSpot scripts alongside this mechanism.
When changing purposes or providers, review the preference version and the
PL/EN cookies and privacy policies together.

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
- Current tool availability, pricing and the existing 10% promotion commitment.
- Operate the manual Channels invitation process for newly registered agents.
- Keep published legal Markdown and the corresponding DOCX downloads synchronized.

## Rules history and legal scopes

The current Collective rules are v2.2 (28 October 2026); PL/EN DOCX files match
the current Markdown. `/pl/archiwum-regulaminow-collective` and its EN equivalent
label historical downloads. Versions 1.0, 2.0 and 2.1 remain byte-for-byte intact;
`public/_headers` and Next response headers mark those assets noindex. The archive
page is noindex/follow and is intentionally absent from the sitemap.

General legal documents distinguish the information website, Vesteri Market,
Collective/Channels and selected developer projects. Developer scoring and data
sharing disclosures remain scoped to the latter, with separate consent. Agent
verification concerns listing publication, not the manual Channels invitation.
