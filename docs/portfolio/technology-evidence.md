# PAU RAMOS — Technology evidence

Public claims are limited to evidence available in this workspace, supplied CV evidence, or direct confirmation for a provider-level claim. No secrets, IDs, customer data, private URLs, payloads or internal architecture appear here.

| Technology | Project | Evidence | Type of use | Public-safe claim | Confidence |
| --- | --- | --- | --- | --- | --- |
| Microsoft Graph | OVI | Existing project evidence map | External API + orchestration | Microsoft 365 context supports AI-assisted workflows. | High |
| Outlook, Teams, Calendar, OneDrive, SharePoint | OVI | Existing project evidence map | Microsoft Graph surfaces | Surface names only; no tenant or resource identity details. | High |
| Gamma | OVI | User-confirmed integration | Artifact generation integration | Presentation generation is integrated into an artifact workflow. | High |
| Supabase, PostgreSQL, Edge Functions, RLS, Realtime | BROKI; OVI; DUPLEX | BROKI source; existing project evidence map | Platform + backend | Data, authorization and application backend flows. | High |
| RAG, embeddings, retrieval | OVI; DUPLEX | Existing project evidence map | AI architecture | Source-aware document context supports product workflows. | High |
| Playwright | OVI; DUPLEX; BROKI; portfolio | User-confirmed for professional projects; repository tests for BROKI/portfolio | E2E / acceptance quality | Browser-level regression and acceptance checks. | High |
| Husky | OVI; DUPLEX; BROKI | User-confirmed for professional projects; BROKI `.husky/pre-commit` and `package.json` inspected | Pre-commit quality gate | Quality gates run before commit; exact BROKI command is documented. | High |
| REST APIs, OpenAPI | TrustOS | Supplied CV and project evidence map | Built API + contract documentation | Credential lifecycle and provider flows at infrastructure level. | CV-verified |
| PrivadoID, Procivis, Idenfy | TrustOS | Supplied CV and existing case evidence | External provider integration | Provider-backed credential lifecycle flows. | CV-verified |
| PWA | BROKI | App source and project evidence map | Application delivery | Operational web application capability. | High |
| C, C++, UNIX, processes, threads, networking | 42 archive | Public repositories | Systems engineering | Public foundations behind product work. | High |

## Verification boundaries

- No `lint-staged` configuration exists in BROKI. Do not claim it.
- No current OVI or DUPLEX checkout is available in this workspace. Public OVI/DUPLEX claims retain the existing evidence-map boundary; no deeper implementation detail is added.
- Microsoft Graph resource identity (`site` / `drive` / `item`) is not published: current evidence does not justify a public implementation claim.
- No source verifies PPTXGenJS, Automizer, pgvector, LangChain, Jest, pytest, GitHub Actions or a project-wide CI workflow for this pass. They are not presented as portfolio capability claims.
