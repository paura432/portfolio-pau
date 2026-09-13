# Motion Gap Analysis

## Current state

The live system is a lazy, pointer-inert Canvas with semantic route state, a DOM fallback and Full/Balanced/Lite profiles. Project row hover and focus supply temporary project state. The educational OVI, DUPLEX, Broki and TrustOS models use native controls and semantic text.

## Defects and gaps found

- P0 route synchronization, duplicate Developer Mode state, hard-coded profile and OVI compound intent were fixed in the hardening branch.
- Full and Balanced now differ in DPR, antialiasing and node density.
- Continuous topology rotation was removed because it did not communicate state.
- No purposeful GSAP timeline currently exists. The dependency remains for a future verified topology tween; it must be removed if no such implementation is added.
- Canvas nodes still use positional arrays rather than stable semantic identities, so topology morph interpolation is not implemented.
- The portfolio does not need Lenis until a real scroll choreography justifies it.

## Next safe implementation

Replace anonymous topology points with stable semantic node IDs and interpolate positions on project changes. This is the only proposed creative-runtime expansion because it directly explains continuity.
