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
