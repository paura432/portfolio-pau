# Responsive and navigation audit

Date: 2026-09-13

## Current architecture

- Home owns its full primary navigation in `PortfolioShell`.
- Case, archive, design and Colophon pages use `CaseHeader`, which exposes only contextual back navigation.
- Desktop CV uses a native disclosure control. Mobile navigation is not yet a full-sheet dialog.

## Responsive smoke baseline

| Viewport | Routes render | Status | Notes |
| --- | --- | --- | --- |
| 320 × 568 | all public routes | PASS | Existing Playwright smoke. |
| 390 × 844 | not yet certified | WARN | Add targeted mobile menu checks before i18n. |
| 768 × 1024 | not yet certified | WARN | Header breakpoint needs explicit test. |
| 1024 × 768 | not yet certified | WARN | Case header has no global navigation. |
| 1440 × 900 | all public routes | PASS | Existing Playwright smoke. |
| 1920 × 1080 | not yet certified | WARN | Contact and header visual review pending. |
| 2560 × 1440 | not yet certified | WARN | Line-length visual review pending. |

## P0 navigation issue

Case pages and Colophon do not share Home's global navigation. Fix this before locale routes or motion polish.

## Gate

Do not implement `/en` and `/es` until a route-independent global header and expanded responsive tests are complete.
