# CODEX TASK | Implement Vesteri Collective V10.7, EN/PL

## Context and authoritative sources
Implement the entire new Vesteri.com **marketing website** based on the six HTML reference pages in the adjacent `preview/` directory. The buyer copy comes from approved V10.2, and the agents/sellers pages are the latest V10.7. All six references are required. Treat them as the approved source for design, layout, wording, section order, and responsive behavior. Preserve copy meaning in both languages and do not regenerate texts.

**Project locations (within this handoff directory)**:
- Buyers: `preview/pl/index.html`, `preview/en/index.html`
- Sellers: `preview/pl/sprzedajacy/index.html`, `preview/en/sellers/index.html`
- Agents: `preview/pl/dla-agentow/index.html`, `preview/en/agents/index.html`

## Non-negotiable product scope
1. Marketing website languages **EN and PL only**, routes `/en`, `/pl`, `/en/sellers`, `/pl/sprzedajacy`, `/en/agents`, `/pl/dla-agentow`. Existing old public marketing content may be replaced; this is **not** a modernization of the old landing page. Do not preserve old marketing layouts.
2. **Preserve existing Affiliate Program end-to-end**: affiliate routes, login/registration, referral attribution, dashboards, background dependencies, database/schema, and supporting infrastructure must not regress. Add working localized Affiliate Program link in new footer. Inspect repository to discover its exact existing route; do not assume mockup placeholder is correct.
3. All links that enter the Marketplace/agent platform must use `https://vesteri.estalara.com` (locale-specific paths only if verified). Individual listing cards need exact verified listing links once owner supplies them. No Estalara APIs, data feeds, auth changes, membership backend changes, commission engine, or registration redesign.
4. Three audience paths: Buyer home is primary; Sellers and Agents have their own pages. Global navigation and mobile menu provide all three routes, with EN/PL language switching preserving destination intent. Keep approved CTA hierarchy and footer.
5. Do not describe the system as Estalara in visible marketing text: call it **Vesteri system / system Vesteri**. The technical destination domain retains `vesteri.estalara.com`.
6. No claims that all agents actively market all listings, that a sale is guaranteed, that legal due diligence automatically occurs, or that a fixed quantity of leads is guaranteed. Preserve copy in approved references but flag any statement which would be inaccurate under current terms.
7. Features described as currently available (AI, LIVE, webinars, transcripts, ads, commissions, membership rules, 10% revenue commitment, international commission shares) must be reconciled against actual platform capabilities, regulations, contracts and current commercial terms. Flag discrepancies; do not silently weaken or invent provisions.
8. Static owner-approved images initially, no API synchronization. Maintainable local assets/configuration for featured cards. No fake functional forms, no invented listing URLs, no dead buttons. Seller CTA may use an owner-confirmed inbox or approved contact route. If not confirmed, stop/flag this CTA before production.
9. Reuse the existing production technology stack and necessary utilities (Next.js App Router, TypeScript, Tailwind, next-intl, Cloudflare/OpenNext, analytics, security, SEO, legal compliance) but do not reuse obsolete site design or copy. Remove/unpublish obsolete marketing pages safely, with redirect plan for legacy public URLs, including ES/DE routes. Preserve technical dependencies essential to Affiliate Program.
10. Use precise responsive behavior from reference, accessible semantic structure, working keyboard/mobile navigation and FAQ. Ensure long Polish strings wrap without clipping. Homepage stays buyer-first.

## Work method (two gates)
**Gate A, preflight**: Confirm six HTML paths; map repo routing, existing Affiliate Program routes and database dependencies, production-deploy branch triggers, unresolved images/listing URLs/contact/terms. State proposed change inventory and safe execution plan. If six files missing, stop. The owner explicitly wants implementation against the current primary branch, not a separate feature branch. First inspect the GitHub Actions workflow and identify whether commits/pushes to the primary branch automatically trigger production deployment or remote database migrations. Create a recoverable baseline by recording the current commit and explaining the rollback method. You may edit and test the working copy of the primary branch. Do not push, commit-and-push, or trigger any production workflow until the owner separately authorizes publication. If Codex Cloud only supports a task branch internally, use that as its technical workspace without asking the owner to create a new GitHub feature branch.

**Gate B, implementation**: Once safe workspace is confirmed, implement new EN/PL marketing site, run local checks, produce screenshot comparisons (375, 430, 768, 1024, 1440 px for PL/EN pages), run `npm run lint`, `npm test`, `npm run build` as applicable and smoke-test Affiliate Program and legacy redirect behavior. Do not claim visual QA without screenshots.

## Review / output required
- Routes built and code changes by file
- Exact source of shared logo, fonts and photographic assets
- All CTAs, external links, language switches and Affiliate Program verified
- FAQ counts and section inventory
- Automated test results, browser screenshots and accessibility checks
- Remaining placeholders/unverified business statements
- No production-triggering push, deployment, production migrations or DNS changes without explicit separate approval

**Permission boundary**: The owner authorizes replacing the old marketing site in the working copy sourced from the current primary branch, running local tests, and preparing changes. Do not push to a production-triggering branch, merge, deploy, or run remote migrations without separate approval. If an ordinary `git commit` is safe and local-only, report it transparently. Do not create a dedicated GitHub feature branch.
