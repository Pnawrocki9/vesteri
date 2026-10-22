# Vesteri Collective V10.7 | FULL Codex handoff (EN + PL)

## Important
This is the COMPLETE six-page reference set for the new marketing website, including buyer homepage files carried forward from the last approved buyer version V10.2, plus the latest V10.7 agent/seller files. Seller navigation has been added to buyer pages. The existing V10.7 review archive omitted buyer homepage files; this package fixes that.

## Directory map
- `preview/pl/index.html` — buyer homepage PL (approved buyer copy V10.2)
- `preview/en/index.html` — buyer homepage EN
- `preview/pl/sprzedajacy/index.html` — sellers PL, V10.7
- `preview/en/sellers/index.html` — sellers EN, V10.7
- `preview/pl/dla-agentow/index.html` — agents PL with 12 FAQ
- `preview/en/agents/index.html` — agents EN with 12 FAQ
- `docs/CODEX_IMPLEMENTATION_TASK.md` — final task instruction
- `docs/ACCEPTANCE_CHECKLIST.md` — QA and release gates
- `docs/GITHUB_CODEX_STEPS_PL.md` — step-by-step how to hand off and run in Codex Cloud
- `docs/COPY_AND_PRODUCT_RULES.md` — business and copy guardrails
- `docs/DELIVERY_MANIFEST.json` — paths and provenance

## What this is (and is not)
These are static HTML design/copy references, NOT deployed Next.js source code. The Codex task is to implement them in the existing Vesteri GitHub repository using Next.js/next-intl. No Estalara API integration is required. The owner chose implementation based on the existing primary branch, replacing the old marketing site. Do not push or deploy without separate authorization, because the primary-branch workflow may auto-deploy.

## Before release
Provide actual property photos and individual listing URLs, confirm seller contact destination, existing Affiliate Program route and functionality, and reconcile business statements with currently adopted Terms and Pricing. External demo photos/logo need approved assets. Browser screenshot comparison remains mandatory.
