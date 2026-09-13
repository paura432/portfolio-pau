export type SystemProject = {
  slug: 'ovi' | 'duplex' | 'trustos'
  index: string
  title: string
  chapter: string
  company: string
  period: string
  summary: string
  proof: string[]
  technologies: string[]
  confidential?: boolean
}

export type IntegrationEvidence = {
  id: string
  name: string
  category: 'CONSUMED' | 'CONSUMED + ORCHESTRATED' | 'BUILT' | 'ORCHESTRATED' | 'PLATFORM' | 'AI' | 'QUALITY'
  projects: ('ovi' | 'duplex' | 'broki' | 'trustos' | 'portfolio')[]
  capabilities: string[]
  work: string
  publicDescription: string
}

type CaseDetail = {
  role: string
  builtAt: string
  year: string
  scope: string[]
  stack: string[]
  challenge: string
  decisions: { decision: string; why: string; tradeOff: string }[]
  delivered: string[]
  quality: string[]
  boundary: string
}

export const caseDetails: Record<'ovi' | 'duplex' | 'broki' | 'trustos', CaseDetail> = {
  ovi: { role: 'Full Stack Product Engineer', builtAt: 'Performanze', year: '2026 — now', scope: ['Product workflows', 'Microsoft context', 'Artifacts'], stack: ['React', 'Supabase', 'Microsoft Graph'], challenge: 'Turn work requests into reliable actions across Microsoft 365 context.', decisions: [{ decision: 'Structured product routing', why: 'Actions need explicit intent and context.', tradeOff: 'More contracts than a pure chat interface.' }], delivered: ['AI-assisted productivity workflows', 'Microsoft 365 context integration', 'Artifact generation integration'], quality: ['Husky pre-commit gates', 'Playwright browser checks', 'Public-safe conceptual demo'], boundary: 'No tenant data, credentials, private payloads or exact architecture.' },
  duplex: { role: 'Technical leadership on SAT module', builtAt: 'Performanze', year: '2026 — now', scope: ['Technical workflows', 'Retrieval', 'Source traceability'], stack: ['Next.js', 'Supabase', 'PostgreSQL', 'RAG'], challenge: 'Keep technical diagnosis grounded in equipment context and traceable sources.', decisions: [{ decision: 'Evidence before diagnosis', why: 'Technical answers need manuals, checklists and history.', tradeOff: 'More explicit source handling than generic chat.' }], delivered: ['SAT assistant workflow', 'Source-backed diagnosis', 'Escalation context'], quality: ['Husky pre-commit gates', 'Playwright browser checks', 'Public-safe sanitized reconstruction'], boundary: 'No manuals, customer data, equipment records or private integrations.' },
  broki: { role: 'Independent product engineering', builtAt: 'Independent product', year: '2026', scope: ['Product architecture', 'Frontend', 'Backend', 'Data', 'QA'], stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Playwright'], challenge: 'Model airport ground operations in one coherent operational platform.', decisions: [{ decision: 'Operational domains as one system', why: 'Fleet, GSE, tools and personnel share operational state.', tradeOff: 'Requires clear domain relations and access boundaries.' }, { decision: 'Legacy transition as secondary work', why: 'Existing records must keep operational meaning.', tradeOff: 'Audit and normalization add delivery complexity.' }], delivered: ['Airport operations platform', 'Operational resource workflows', 'PWA and realtime interfaces'], quality: ['Husky pre-commit gate', 'Unit, integration and E2E coverage', 'Offline smoke checks'], boundary: 'No airport name, customer data, production records or private workflows.' },
  trustos: { role: 'Software Developer', builtAt: 'Telefónica Tech', year: '2025 — 2026', scope: ['Backend APIs', 'Provider integration', 'Credential flows'], stack: ['Node.js', 'Express', 'MongoDB', 'OpenAPI'], challenge: 'Provide a coherent credential lifecycle across identity providers.', decisions: [{ decision: 'Provider abstraction', why: 'Credential flows need a consistent product contract.', tradeOff: 'Provider differences remain a system constraint.' }], delivered: ['Credential lifecycle services', 'Provider integrations', 'QR verification flows', 'OpenAPI documentation'], quality: ['Infrastructure-level public model'], boundary: 'No tenant data, credentials, provider configuration or private infrastructure.' },
}

export const contact = {
  name: 'Pau Ramos',
  email: 'pauramosimo@gmail.com',
  github: 'https://github.com/paura432',
  linkedin: 'https://www.linkedin.com/in/pau-ramos-sim%C3%B3-520751202/',
  location: 'Madrid, Spain',
} as const

export const systems: SystemProject[] = [
  {
    slug: 'ovi',
    index: '01',
    title: 'OVI',
    chapter: 'AI PRODUCTIVITY SYSTEM',
    company: 'Performanze',
    period: '2026 — NOW',
    summary: 'Private current system for AI-assisted productivity workflows.',
    proof: ['Product engineering', 'Contextual workflow design', 'Private-system delivery'],
    technologies: [],
    confidential: true,
  },
  {
    slug: 'duplex',
    index: '02',
    title: 'DUPLEX',
    chapter: 'AI TECHNICAL OPERATIONS',
    company: 'Performanze',
    period: '2026 — NOW',
    summary: 'Technical service workflows that join context, retrieval and traceable assisted diagnosis.',
    proof: ['SAT assistant workflow', 'Document retrieval direction', 'Field-use patterns', 'Source-backed response flow'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Supabase', 'PostgreSQL', 'RAG'],
  },
  {
    slug: 'trustos',
    index: '03',
    title: 'TRUSTOS',
    chapter: 'DIGITAL IDENTITY INFRASTRUCTURE',
    company: 'Telefónica Tech',
    period: '2025 — 2026',
    summary: 'Verifiable credential infrastructure across issuance, wallets and verification.',
    proof: ['Credential lifecycle services', 'Provider integrations', 'QR verification flows', 'OpenAPI documentation'],
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Docker', 'OpenAPI'],
  },
]

export const independentWork = {
  title: 'BROKI',
  chapter: 'AIRPORT OPERATIONS PLATFORM',
  period: '2026',
  summary: 'Operational platform for airport ground operations, connecting fleet, GSE, tools, personnel and operational traceability.',
  technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Edge Functions', 'RLS', 'Realtime', 'PWA', 'Playwright'],
} as const

export const designPractice = [
  { title: 'SOFÍA', chapter: 'EDITORIAL WEB IMPLEMENTATION', url: 'https://sofia-chi-gold.vercel.app', repository: 'https://github.com/paura432/Sofia' },
  { title: 'DIEGO', chapter: 'PORTFOLIO WEB IMPLEMENTATION', url: 'https://portfolio-diego-delgado.vercel.app', repository: 'https://github.com/paura432/portfolio-diego' },
] as const

export const capabilities = [
  ['PRODUCT ENGINEERING', 'TypeScript · React · Next.js · Vite'],
  ['BACKEND & DATA', 'Node.js · Express · Supabase · PostgreSQL · MongoDB · Edge Functions · Realtime · RLS'],
  ['AI & KNOWLEDGE', 'RAG · document retrieval · embeddings · LLM integration'],
  ['APIs & INTEGRATIONS', 'Microsoft Graph · Outlook · Teams · Calendar · OneDrive · SharePoint · Gamma · OpenAPI'],
  ['QUALITY ENGINEERING', 'Playwright · unit · integration · acceptance · production smoke · Husky'],
  ['SYSTEMS', 'C · C++ · UNIX · processes · threads · networking'],
  ['DELIVERY', 'Docker · Vercel · Git · Linux · Postman'],
] as const

export const integrations: IntegrationEvidence[] = [
  { id: 'graph', name: 'MICROSOFT GRAPH API', category: 'CONSUMED + ORCHESTRATED', projects: ['ovi'], capabilities: ['REST API', 'OData queries', 'Outlook', 'Teams', 'Calendar', 'OneDrive', 'SharePoint'], work: 'Integrated Microsoft 365 context into AI-assisted product workflows.', publicDescription: 'RESTful Microsoft Graph API with OData query options. Communication, calendar and file context can support product actions; no tenant data or resource identifiers are public.' },
]

export const foundations = [
  { id: 'memory', title: 'MEMORY / C', projects: 'LIBFT · FT_PRINTF · GET_NEXT_LINE', lesson: 'Reusable primitives, formatted output and stream reading.' },
  { id: 'algorithms', title: 'ALGORITHMS', projects: 'PUSH_SWAP', lesson: 'Constraints, ordering and trade-offs.' },
  { id: 'unix', title: 'UNIX / PROCESSES', projects: 'PIPEX · MINISHELL', lesson: 'Pipes, parsing, file descriptors and process execution.' },
  { id: 'concurrency', title: 'CONCURRENCY', projects: 'PHILOSOPHERS', lesson: 'Threads, synchronization and shared resources.' },
  { id: 'graphics', title: 'GRAPHICS', projects: 'SO_LONG · CUB3D', lesson: 'Rendering, maps, movement and raycasting.' },
  { id: 'networking', title: 'NETWORKING', projects: 'NET_PRACTICE', lesson: 'Network-level reasoning and topology.' },
  { id: 'cpp', title: 'OBJECT ORIENTED', projects: 'C++ 00 → 08', lesson: 'Abstraction and language evolution.' },
] as const

export const experience = [
  ['2026 — NOW', 'PERFORMANZE', 'FULL STACK PRODUCT ENGINEER', 'Current systems: OVI and DUPLEX.'],
  ['2025 — 2026', 'TELEFÓNICA TECH', 'SOFTWARE DEVELOPER', 'TrustOS and digital identity infrastructure.'],
  ['2023 — NOW', '42 MADRID', 'ENGINEERING FOUNDATIONS', 'C, C++, UNIX, graphics, concurrency and networking.'],
] as const
