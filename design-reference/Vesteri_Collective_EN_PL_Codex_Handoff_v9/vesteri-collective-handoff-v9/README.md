# Vesteri Collective: bilingual responsive homepage implementation handoff v9

This package contains the **approved v8 English and Polish responsive HTML/CSS mockups** plus **corrected and expanded Codex implementation instructions**. v9 updates the handoff documentation, not the approved website design.

## Files

- `mockup/en/index.html`: source-of-truth EN visual/copy prototype.
- `mockup/pl/index.html`: source-of-truth PL visual/copy prototype.
- `docs/CODEX_TASK.md`: complete Codex instruction; request analysis-only first.
- `docs/IMPLEMENTATION_PLAN.md`: scope and boundaries.
- `docs/CONTENT_GUIDE.md`: positioning, English/Polish content rules.
- `docs/ACCEPTANCE_TESTS.md`: review checklist.
- `START_HERE.md`: practical setup.

## Critical workflow

Codex Cloud must have access to the **existing site's repo** AND to these reference files in its workspace. A ZIP upload by itself is not a substitute for repository access. If your Codex screen offers file attachments, it may be possible to attach the ZIP, but DO NOT assume the runtime extracts it and makes both HTML prototypes readable. The reliable workflow is to extract the folder into the repository (or otherwise make it available to the cloud environment) and instruct Codex to confirm visibility before any edits.

The user supplies actual Vesteri listing photographs and their verified `vesteri.estalara.com` URLs before production release. No new Estalara API integration now. Prototype's responsive CSS is the target, to be preserved and visually tested for both languages in the real application. Current project locale routing overrides illustrative mockup `/en/` and `/pl/` paths.
