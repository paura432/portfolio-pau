# Motion Reference Analysis

| Reference | Technology observed | Interaction principle | Pau application | Decision |
| --- | --- | --- | --- | --- |
| Corentin Bernadou | Three.js, GLSL, GSAP, Lenis | Editorial layout stays legible while motion exposes grid and page continuity. | Keep restrained project-state morphs and grid diagnostics. | Implement principle, never layout or assets. |
| Ameen Abdullah | Three.js, WebGL/WebGPU, TSL, GSAP | DOM and GPU layers share semantic timing; expensive work is treated as a performance budget. | Use one lightweight semantic topology and lazy Canvas. | Implement performance discipline; reject cinematic shaders and WebGPU migration. |
| Ricardo Chance | Next.js, TypeScript, R3F, GSAP | Creative runtime stays integrated with product UI and clear interaction state. | Keep React routes, Zustand state and limited R3F topology. | Implement product/runtime balance; reject particle spectacle. |
| Bruno Simon | Three.js, GSAP | Runtime discipline and visible technical craft can make a portfolio itself evidence. | Keep Developer Mode, interactive labs and performance profiles. | Implement inspectability; reject driving world, physics and audio. |
| Emil Kowalski / Rauno Freiberg | CSS and precise UI feedback | Small, immediate hover and focus responses improve perceived quality. | Use short CSS feedback on rows and controls. | Implement restraint; reject new motion library. |

## Library decision

Retain GSAP, Three.js, React Three Fiber, Drei and Zustand. Do not add Lenis: the current portfolio has no scroll-linked sequence that native scrolling cannot support. Do not add Theatre.js, Motion, WebGPU, physics, audio or postprocessing.
