# CODEX TASK: Vesteri Collective homepage EN + PL, phase 1 (v9)

You are working in the EXISTING Vesteri.com repository. The bundled mockups are approved responsive design and copy references. Implement **only the public-facing homepage** in English and Polish. Do not build a standalone second app, switch the project framework or change the Estalara platform.

## STAGE A: ANALYSIS ONLY. DO NOT EDIT FILES.

1. Read `START_HERE.md`, `README.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/CONTENT_GUIDE.md`, `docs/ACCEPTANCE_TESTS.md`, plus BOTH `mockup/en/index.html` and `mockup/pl/index.html` inside this handoff folder. If the folder is not in your workspace, STOP and ask for it. Do not infer the content from this prompt.
2. Inspect the existing repository to identify framework, homepage, shared components, styles, brand assets, internationalization/routing, build/test commands, CI/CD and deployment approach. Respect existing `AGENTS.md` instructions.
3. Determine the actual current routes of EN/PL pages, navigation targets, marketplace, agent application, and any working contact/request assistance flow. Do not guess production URLs.
4. Explain how you will preserve the APPROVED RESPONSIVE DESIGN. Audit breakpoints, navigation, cards, forms and typography against both HTML mockups, including long Polish strings. Adapt to the existing stack without redesigning desktop or mobile layouts, except to correct demonstrable accessibility, overflow or rendering problems.
5. List exact files expected to be modified, unverified assumptions, missing production listing photographs and target listing URLs, a staged verification plan, and deployment rollback approach.
6. Do not modify files, run a production deployment or create a pull request until I approve the plan. Stop after delivering a concise report.

## STAGE B: IMPLEMENT ONLY AFTER OWNER APPROVAL

- Create or use a dedicated feature branch. Keep changes limited to the homepage and necessary i18n/shared styling support. Do not change existing functioning Estalara user registration or agent approval, other pages, translations, authentication, CRM or deployment configuration without a clear need and approval.
- Implement all approved homepage sections and EN/PL copy from the mockups. Preserve all 19 FAQ questions/answers in each language, idiomatic Polish, real brand/logo and precise approved positioning. **Never machine-translate at runtime.** Do not restore the Community section.
- Preserve pre-existing responsive CSS behavior of the designs at desktop, tablet and mobile widths. Test both languages at approximate widths 375, 768, 1024 and 1440 px (and intermediate widths if problems arise). Check that Polish button labels and headings wrap correctly, cards do not overflow, navigation is usable on touch and keyboard, and content remains legible.
- For **One Marketplace. Many Possibilities.**, use **real property images supplied by the owner** as static website assets. Each individual card links to its confirmed destination on `vesteri.estalara.com`; if the target URL isn't confirmed, ask the owner rather than guessing. The overall marketplace CTA links to the marketplace destination already used by the website. No Estalara listings API or data synchronization in this phase.
- Existing calls to action should use verified website/marketplace/application routes. The illustrative search interface and property-assistance contact interface in the mockups are NOT production functionality. Either hook to an already working verified flow, or flag the missing behavior and get owner direction before production. Never leave deceptive functional-looking controls.
- Preserve sitewide locale conventions; the mockup's `/en/` and `/pl/` structure is illustrative. Correct locale-aware navigation, `lang`, title, description, canonical/hreflang, translated URLs as applicable; do not break other already-supported languages.
- Respect business policy: Vesteri Collective is a selectively approved network of independent agents, covering local AND international properties. Buyers browse without membership. All members/listings are treated under shared principles. Fair Play & Trust are essential. Vesteri's own international brokerage is additional supply, not a preferred tier. Commission attribution and community features are not launched. Do not invent claims/testimonials/metrics. The proposed commitment to dedicate at least 10% of revenues to Collective promotion needs owner-approved exact wording and legal definition, not invented conditions.
- Keep changes readable and maintainable; use existing frameworks, testing tools and dependencies. Do not add an unnecessary CSS framework, new CMS, custom i18n system or external API.

## STAGE C: VERIFY AND PRESENT RESULTS. DO NOT DEPLOY.

Run lint, tests and production build that apply to the repository. Perform browser-based visual comparison to mockups on desktop/tablet/mobile for EN and PL; give screenshot paths or images, report any deviations and their reasons. Verify EVERY link/CTA, language switch, FAQ text and SEO outputs. Check keyboard navigation, accessible labels, image alt text and image loading. Check that unrelated routes still work. Use `docs/ACCEPTANCE_TESTS.md` as a checklist. Provide a summary of changed files, test output, known limitations and a rollback plan. WAIT for explicit owner approval before merging or publishing.

## DELIVERY PRIORITY

1. Design fidelity in BOTH languages; 2. Responsive/mobile correctness; 3. Existing architecture and routes; 4. Correct navigation and CTA behavior; 5. SEO/accessibility; 6. Minimal and reviewable changes.
