# Implementation plan and boundaries

**Phase 1 goal:** replace the existing Vesteri.com public homepage with the approved Vesteri Collective v8 design in English and Polish, fully responsive and production-tested. No backend/marketplace integration work.

1. Inspect existing code and prepare proposed edits (analysis-only stop gate).
2. Adapt supplied `mockup/en/index.html` and `mockup/pl/index.html` to the site's actual framework and localization setup, keeping visual design and responsive behavior; do not publish standalone HTML as an unrelated new site.
3. Reuse the official current logo and fonts/assets from the site when available. The mockup may show remotely sourced imagery/logo and is NOT a vetted production asset bundle.
4. Replace illustrative listing images with owner-provided property photographs and assign each card a verified `vesteri.estalara.com` URL; no data/API feeds. Confirm existing page URLs for other CTAs.
5. Make any non-functional demo search/contact controls explicitly non-deceptive or connect them to a real existing flow with owner approval. Do not silently create fake functionality.
6. Preserve existing SEO and localization infrastructure; use real published routes, not mockup URL assumptions.
7. Perform responsive visual QA across EN/PL at narrow phones, large phones, tablet and desktop; test navigation, FAQ, accessibility, build and links.
8. Deliver review-ready feature branch/PR, screenshots, QA notes and rollback instructions; owner approves any merge and deployment.

**Not in scope:** Estalara API, listing feed, commission accounting, new community, new CRM, changing agent approval/account status, cross-site auth, novel integrations or large-scale redesign.
