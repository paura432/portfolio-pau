# V3 Gap Analysis

## Verified baseline

The working branch is `feat/live-systems-v2`, after `13ba716`. The production canonical URL returns HTTP 200. The corrected Diego URL, `https://portfolio-diego-delgado.vercel.app`, also returns HTTP 200.

The portfolio has static professional work, an independent Broki route, design practice, 42 archive, interactive educational demos, Developer Mode, CV, metadata, sitemap, robots and Playwright route smoke coverage.

## V3 gaps

- No shared cross-route rendering layer or render-profile state exists.
- No GSAP, Three, React Three Fiber, Drei or Zustand dependency exists.
- Project hover/focus does not alter a semantic system visualization.
- OVI playground accepts text but has no deterministic workflow model.
- DUPLEX has source selection but no equipment, symptom or diagnostic-session state.
- Broki has no migration state visualizer.
- Capability Map lists technology but does not link project evidence interactively.
- Developer Mode reports a hard-coded `LITE` profile.
- Design page uses correct visual boundaries but has no approved screenshot evidence.
- E2E smoke covers routes and sizes only; controls need browser interaction coverage.

## V3 decision

Use one lazy client-side Canvas enhancement with DOM/CSS fallback. Keep all professional claims and demo data sanitized. Add no Lenis, Theatre, Rapier, audio or postprocessing.
