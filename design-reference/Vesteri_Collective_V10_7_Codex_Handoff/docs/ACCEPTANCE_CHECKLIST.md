# Acceptance checklist | Vesteri V10.7

## Core pages
- [ ] `/pl` and `/en` buyer-first homepage match reference
- [ ] `/pl/sprzedajacy` and `/en/sellers` match latest seller V10.7
- [ ] `/pl/dla-agentow` and `/en/agents` match agent V10.7
- [ ] EN/PL switching preserves current section; both mobile and desktop navigation show Buyers, Sellers, Agents
- [ ] Buyer FAQ 8 entries/locale; agent FAQ 12 entries/locale; seller FAQ verified against mockup
- [ ] All visible platform/product text uses Vesteri system (domain exception)
- [ ] Removed old marketing pages and previous ES/DE presentation handled with deliberate routing and no broken links

## Platform and offers
- [ ] All marketplace/agent-system CTAs go to verified `vesteri.estalara.com` destination
- [ ] Three property cards use approved photos, true listing descriptions and exact matching listing URLs; no invented data
- [ ] LIVE, webinar and consultation CTAs lead to working existing destinations; no fake forms
- [ ] Seller contact CTA uses confirmed process; no fake submissions
- [ ] Exact Affiliate Program URL identified in repository and present in footer in both locales
- [ ] Affiliate login/registration/dashboard/referral tracking not regressed

## Delivery and safeguards
- [ ] Legal copy, commission and 10%-promotion statements reviewed with operator
- [ ] Production image usage/licensing reviewed and remote demo images replaced
- [ ] 375 / 430 / 768 / 1024 / 1440 px screenshot comparisons for all relevant sections
- [ ] No horizontal scrolling, overlap, clipped Polish copy or broken mobile menu
- [ ] `lint`, `test`, `build` passed or blockers explicitly documented
- [ ] SEO: title, description, canonical, hreflang EN/PL, sitemap, robots, redirects, old SEO cleanup
- [ ] No production merge, push, deployment, or database migrations without separate approval

## Owner-selected branch policy
- [ ] Implementation is based on the verified current primary branch; no separate GitHub feature branch required.
- [ ] Primary-branch push/automatic Cloudflare deployment trigger has been inspected before any push.
- [ ] No production-triggering push or remote migration occurs without explicit owner approval.
- [ ] Pre-change commit and rollback procedure are recorded.
