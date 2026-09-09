# PAU / LIVE SYSTEMS — Forensic audit

Date: 2026-09-09  
Scope: Phase 0 only. No UI, dependency, or product-content changes were made.

## Repository state

- Branch created for this work: `feat/live-systems-ultimate`.
- The working tree was clean before this audit.
- Stack: Next.js 16, React 19, TypeScript, ESLint, and `lucide-react`.
- Available scripts: `dev`, `build`, `lint`, and `typecheck`.
- There is no `public/` directory, CV PDF, test script, or browser-automation setup.

## Current architecture

| Area | Observed implementation | Keep / change |
| --- | --- | --- |
| App shell | Next App Router, static server pages, one home client shell. | Keep App Router; split home only when a concrete feature requires it. |
| Home | `PortfolioShell.tsx` owns header, navigation, language switch, theme switch, hero, work, archive, design, experience, and contact. | Rebuild its hierarchy; it is the main coupling point. |
| Content | `app/data/portfolio.ts` holds typed project, contact, experience, and archive data. | Keep typed data source; expand only with verified evidence. |
| Work routes | Separate routes exist for OVI, DUPLEX, and TrustOS. | Keep routes; give each its own case composition. |
| Archive | Foundations, cub3D, and Minishell routes already exist. | Rename the public framing to Engineering Archive; retain cub3D and Minishell as evidence. |
| Interaction | `SystemTopology`, `RaycastDemo`, and `MiniShellFlow` use small React/CSS interactions. | Keep progressive-enhancement baseline; do not add GPU rendering before static redesign is approved. |
| Styling | One global stylesheet, CSS variables, responsive breakpoint, and reduced-motion override. | Retain tokens and accessibility baseline; replace visual direction. |

## Evidence present in checkout

| Chapter | Safe public claim in current source | Limitation |
| --- | --- | --- |
| OVI | Private AI-assisted productivity system at Performanze. | No approved stack, integrations, metrics, screenshots, or implementation details. |
| DUPLEX | Technical operations, documentation retrieval, assisted diagnosis, and traceability. | No client data, field records, source documents, or metrics. |
| TrustOS | Verifiable credentials, lifecycle services, provider integration, QR verification, REST/OpenAPI. | Existing provider names and media need confidentiality review before reuse. |
| 42 | C, UNIX, raycasting, process execution, concurrency, networking, and C++. | Claims must stay tied to public repositories and source code. |
| Sofía | Web implementation and responsive editorial system. | Do not claim ownership of photographic or editorial content. |

## Existing strengths

- Semantic links and case routes work without canvas.
- Skip link, 44 px controls, responsive layout, and `prefers-reduced-motion` exist.
- cub3D has a native range control and textual explanation.
- Minishell has a small, inspectable process-pipeline explanation.
- Project data already places OVI, DUPLEX, and TrustOS in required order.
- Dependency surface is intentionally small.

## Gaps against LIVE SYSTEMS brief

1. Home still presents `PAU / SYSTEMS`, not `PAU / LIVE SYSTEMS`.
2. Navigation is `Systems / Foundations / Design / CV`; required recruiter path is not present.
3. Partial EN/ES switch is incomplete. Ship English only until full localization exists.
4. Global theme switch conflicts with single art direction.
5. CV link is a mailto request. No public PDF exists.
6. Home has a large static topology; it does not yet evolve by chapter or prove work.
7. OVI is text and a decorative conceptual orbit, not a clearly labelled conceptual public playground.
8. DUPLEX has no inspectable source-trace interaction.
9. TrustOS has no selectable credential lifecycle visualizer.
10. Foundations is still too prominent in home framing.
11. Sofía is text plus a typographic block. No approved media is present.
12. No command palette, developer mode, layout grid, X-Ray view, colophon, sitemap, canonical metadata, JSON-LD, tests, or visual QA harness exists.

## Content and asset blockers

- A public CV PDF and its final filename/path.
- OVI-approved scope: role, permitted workflow facts, sanitized artifact or media, and wording approval.
- Confidentiality approval for any DUPLEX and TrustOS screenshots or source material.
- Sofía media usage and authorship confirmation.
- Canonical production domain.

## Phase decisions

1. Build the static English shell before a persistent renderer.
2. Use DOM/SVG/CSS for every current interaction. GPU work has no demonstrated need yet.
3. Remove the partial language and global-theme controls in the redesign.
4. Keep OVI factual boundaries. Its public explainer must say `CONCEPTUAL PUBLIC MODEL`.
5. Do not fabricate a CV, product screenshot, metric, integration, or performance number.
6. Implement the three requested delight moments only after their textual, keyboard, touch, and reduced-motion paths exist.

## Next phase

Phase 1: document reference principles, then produce a static product-direction prototype. The first implementation target is the recruiter path: identity, selected work, experience, direct CV contract, contact, and archive demotion.

## Verdict

**READY FOR STATIC REDESIGN; BLOCKED FOR FINAL CONTENT AND CV DELIVERY.**
