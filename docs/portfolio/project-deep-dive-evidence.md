# Project deep-dive evidence

| Project | Claim | Source | Confidence | Public safe | Notes |
| --- | --- | --- | --- | --- | --- |
| BROKI | Fleet, GSE, tooling, personnel, incidents and planning are operational domains. | `web/src/app/broki`, `supabase/functions/{aircraft,tooling,personnel,planner,incidents}` | VERIFIED_CODE | Yes | Generic domain labels only. |
| BROKI | Supabase Edge Functions, RLS, realtime, PWA and Playwright quality exist. | `supabase/functions`, migrations, `web/src/lib/hooks/useBrokiRealtime.ts`, `web/e2e`, `.husky/pre-commit` | VERIFIED_CODE / VERIFIED_TEST | Yes | No endpoint, record or environment detail. |
| SOFÍA | Internationalized editorial implementation, media components, Motion, metadata, sitemap and robots exist. | `package.json`, `src/i18n`, `src/components`, `src/app/sitemap.ts`, `robots.ts` | VERIFIED_CODE | Yes | Credit content owner; implementation only. |
| OVI | Product-level Microsoft 365, retrieval and artifact integration claims. | Existing portfolio evidence only; checkout absent | UNKNOWN | Limited | Keep conceptual public boundary; do not add implementation detail. |
| DUPLEX | Product-level source-backed technical workflow claim. | Existing portfolio evidence only; checkout absent | UNKNOWN | Limited | Keep sanitised model; do not add architecture claims. |
| TrustOS | Credential lifecycle, provider integrations and OpenAPI. | Supplied CV and existing portfolio evidence | VERIFIED_DOC | Yes | Infrastructure level only. |
| 42 archive | Minishell and cub3D engineering descriptions. | Public repository links and route source | VERIFIED_CODE | Yes | Public code only. |

## Excluded

No current source checkout exists for OVI, DUPLEX, TrustOS or Diego. No deep technical mechanism from those systems is asserted as verified code in this pass.
