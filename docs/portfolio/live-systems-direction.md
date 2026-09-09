# PAU / LIVE SYSTEMS — Product direction

## Positioning

**Pau Ramos — Full Stack Product Engineer**  
Building products across interface, systems and AI.  
Madrid · 2026

The portfolio presents Pau as someone who can define, implement, validate, and explain a digital product as a whole system.

## Information architecture

1. Home: identity, selected work, experience, Engineering Archive, Design Practice, About, contact/CV.
2. OVI: private product work with a labelled conceptual public model.
3. DUPLEX: technical operations case with a sanitised diagnostic and source-trace model.
4. TrustOS: credential lifecycle case with selectable issue/present/verify states.
5. Engineering Archive: public 42 evidence, cub3D, and Minishell.
6. Design Practice: Sofía implementation, subject to media approval.
7. Colophon: build decisions, accessibility, performance, and runtime behaviour.

## Recruiter route

First 20 seconds must reveal name, role, Madrid, current work, previous employer, direct CV action, and contact.

1. Hero: name, role, one factual line, work/CV links.
2. Selected work: OVI, DUPLEX, TrustOS with company and date.
3. Experience: Performanze and Telefónica Tech.
4. Contact: CV, email, LinkedIn, GitHub, Madrid.

## Developer route

1. Select a case study.
2. Inspect a work-specific interactive model.
3. Find Engineering Archive, source links, Developer Mode, and Colophon.
4. Verify motion, layout, and rendering fallbacks through real browser state.

## Visual system

- Base: warm off-white, near-black, graphite, restrained cobalt.
- Type roles: expressive display, readable body, monospace labels.
- Grid roles: controlled text width, wider media field, independent live-system field.
- No global theme. Project routes change atmosphere through scoped CSS variables.
- No rounded-card UI, decorative badges, generic AI gradients, random particles, or fake screenshots.

## Motion hierarchy

- Static composition: 80%.
- Feedback and state change: 15%.
- Work-specific spectacle: 5%.
- Reduced motion: instant state changes; all content remains visible.

## Rendering architecture

Phase 3 baseline: DOM, SVG, and CSS only.

Phase 4 candidate: one fixed `LiveSystem` layer with semantic DOM equivalent. It receives route and scroll state, caps DPR, pauses outside viewport, honours reduced motion and coarse pointer, and can downgrade from Full to Balanced to Lite. WebGL/WebGPU is rejected unless this baseline cannot achieve a specific approved visual requirement.

## Interaction commitments

- OVI: intent to plan to contextual sources to artifact. Label: `CONCEPTUAL PUBLIC MODEL`.
- DUPLEX: selectable symptom, evidence claims, and source trace. All content is labelled sanitised demonstration.
- TrustOS: selectable Issue, Present, Verify lifecycle.
- cub3D: controls for angle, FOV, ray count, plus mathematically correct explanations before any expansion.
- Minishell: editable public command and token/parse/pipeline/execution graph.
- Developer Mode: command palette first; grid and X-Ray only when measured values and component maps exist.

## Content rules

- English only until full ES/EN content is available.
- No public CV control until the real PDF is supplied; reserve one explicit asset contract.
- All confidential professional content remains conceptual, sanitised, or omitted.
- Direct source link: https://github.com/paura432/portfolio-pau.

## Implementation order

1. Static home shell and navigation.
2. Case-study content and controls.
3. Archive and Design Practice curation.
4. Command palette, Developer Mode, grid, X-Ray, and Colophon.
5. Renderer only after static visual QA.
6. Content approval, direct CV, tests, responsive screenshots, performance, then SEO after domain confirmation.
