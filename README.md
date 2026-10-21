# Vesteri Collective

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4 and next-intl.
The public website is English and Polish, based on the approved Vesteri
Collective v9 handoff in:

`design-reference/Vesteri_Collective_EN_PL_Codex_Handoff_v9/vesteri-collective-handoff-v9/`

## Development and checks

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
```

The homepage is served at `/en` and `/pl`. `/` negotiates the locale using the
existing next-intl cookie/browser-language convention, with Polish as fallback.
Homepage copy is in `src/messages/{en,pl}.json` under `collective`; all 19 FAQ
questions and answers in each locale are checked against the reference HTML.

Homepage components and isolated styles live in `src/components/home/`.
DM Sans and Manrope match the reference; Montserrat remains available for the
unchanged Affiliate Program and retained legal templates. Fonts are self-hosted
in `src/fonts/` with their SIL Open Font License files. A small Google Fonts
subset of Noto Sans Symbols / Symbols 2 supplies missing interface glyphs. There is no
build-time dependency on the Google Fonts service.

## Curated property cards and preview functionality

`src/content/collective-properties.ts` is the static property-card configuration.
The current local WebP photographs reproduce the approved mockup and are
illustrative. Replace each image and set its `listingUrl` to its owner-confirmed
`https://vesteri.estalara.com/...` destination. Until then, those cards are
non-interactive and explicitly labeled as awaiting real listing destinations.
No property details, feeds, API integrations or synchronization are implemented.

Search filters and the buyer-assistance dialog are explicitly labeled previews.
The disabled controls submit/store no personal information and have no backend.
The separate marketplace link goes to `https://vesteri.estalara.com`, the verified
platform entry point. Deeper application/login/search paths are not assumed.

Hero/brokerage source: Unsplash `photo-1600607687920-4e2a09cf159d`.
Property sources: `photo-1600596542815-ffad4c1539a9`,
`photo-1600607688969-a5bfcd646154`, `photo-1600566753190-17f0baa2a6c3`.
These are the supplied mockup photographs, temporarily authorized by the owner;
final listing assets/rights and URLs must be reviewed before publication.

## Retained features and URL migration

The existing Affiliate Program is retained, including registration, signed
sessions, account/admin dashboards, referral codes, manual sales and payout
records, rate limits, audit logs, settings and versioned legal consent. Its
public footer entry is `/en/affiliate` or `/pl/affiliate`. Core affiliate code,
migrations and deployment bindings are unchanged.

Existing legal documents remain verbatim in `src/content/legal/`; only EN/PL
are bundled by `scripts/generate-legal.mjs`. Other archived content on disk is
not routed or advertised in the sitemap. Old marketing page implementations
were removed.

`src/i18n/legacy-routes.ts` defines the explicit migration policy:

- ES/DE homepages, recognized affiliate URLs and translated legal documents
  redirect permanently to their English equivalents. Local queries survive.
- Former About URLs redirect to the new international-brokerage section.
- Former platform/partnership URLs redirect to the confirmed Estalara entry.
- Known retired developer/guide/comparison content without an equivalent returns
  HTTP 410, with a homepage link and `noindex`.
- Unknown URLs return 404; they are not redirected indiscriminately.

## Production infrastructure

Cloudflare Workers with OpenNext: `open-next.config.ts` and `wrangler.jsonc`.
The canonical host is `https://www.vesteri.com`; the apex redirect is managed at
the Cloudflare edge. Existing security headers, analytics, HubSpot integration,
D1 bindings and affiliate secrets remain in place. Do not commit local secrets.

**Do not run deployment commands during implementation review.**
`.github/workflows/deploy.yml` deploys on pushes to
`claude/vesteri-website-kxnbng` and can apply remote D1 migrations.
Use an isolated feature branch and obtain explicit owner approval before any
production push, merge, remote migration or deployment.

`npm run build` regenerates committed geographic/legal/article artifacts;
CI checks that generated files match their sources. Archived article/map
sources and their generators remain available but have no public marketing
routes in the new site.

## Publication decisions still required

- Real listing photographs, publication rights and corresponding listing URLs.
- Final search and buyer-assistance behavior (currently approved as previews).
- Formal definition of the approved FAQ's 10% Collective promotion commitment:
  revenue base, period and reporting approach.
- Legal review of retained legal disclosures and existing affiliate placeholders.
- Explicit approval to merge and deploy after visual review.
