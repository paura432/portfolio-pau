# Final hardening audit

Current source: `e6cc463` on `main` (newer than `77e2fb4`). Working tree clean.

## P0

- I18N: English-only routes and hard-coded `<html lang="en">`; no `/en` or `/es`, locale switcher, localized metadata, or hreflang.
- Navigation: `PortfolioShell` and `CaseHeader` duplicate primary links; case header retains native-anchor ESLint suppression.
- Responsive: mobile menu now works, but navigation CSS remains split across repeated `case-header`/`cv-menu` patch rules; responsive certification does not cover required matrix.
- SEO: root-only canonical, English-only metadata, sitemap has no localized paths, no locale alternates.

## P1

- APIs: `IntegrationEvidence` exposes only Microsoft Graph despite verified project evidence for quality tooling and public stacks. Add entries only after source verification.
- Cases: OVI and DUPLEX currently expose one decision each; BROKI copy still includes legacy-transition framing. Case narratives share one layout.
- Live system: positions vary by project; edge model must be audited for project-specific relationships and document-hidden work.
- Motion: GSAP present, but motion tokens and shared navigation indicator not centralized.
- Accessibility: menu behavior needs final keyboard/focus audit after header consolidation; CMD K needs focus-return verification.

## P2

- CSS: `capabilities.css` contains accumulated compact overrides. Consolidate only affected navigation/case rules.
- Performance: record bundle/runtime observations; pause non-essential canvas work when document hidden if absent.
- Tests: add locale, dead-end, responsive matrix, CV, and evidence assertions.

## Current verified strengths

- Next.js 16, TypeScript, R3F, GSAP, CMD K, render profiles, project deep dives, public-safe boundaries, CV EN/ES, responsive case-menu test, Playwright smoke coverage.
- Recent `main` fixes retained: Colophon navigation, functional case navigation, CV menu, interpolated topology edges, BROKI airport-operations framing, deep-dive evidence.

## Scope order

1. Locale route architecture, GlobalHeader, localized metadata.
2. Responsive/header certification and E2E.
3. Verified evidence/case depth, then live-system, motion, SEO/CSS cleanup.
