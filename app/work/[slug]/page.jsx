import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { work } from '../../data/portfolio'

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = work.find((item) => item.slug === slug)
  return { title: project ? `${project.name} — Pau Ramos` : 'Work — Pau Ramos', description: project?.summary }
}

export default async function WorkPage({ params }) {
  const { slug } = await params
  const project = work.find((item) => item.slug === slug)
  if (!project) return <main className="case-study"><Link href="/">Back home</Link></main>
  const flow = slug === 'trustos' ? ['ISSUER', 'VCS API', 'PROVIDER ABSTRACTION', 'WALLET', 'VERIFY'] : slug === 'duplex' ? ['TECHNICIAN', 'INTERFACE', 'RETRIEVAL', 'AI', 'TRACEABLE RESPONSE'] : ['USER NEED', 'PRODUCT FLOW', 'API LOGIC', 'DELIVERY', 'ITERATION']
  return <main className={`case-study case-${slug}`}>
    <header className="case-header"><Link href="/"><ArrowLeft size={18}/> Pau Ramos</Link><span>{project.number} / {project.year}</span></header>
    <section className="case-hero"><p>{project.company}</p><h1>{project.name}</h1><strong>{project.role}</strong><p className="case-summary">{project.summary}</p><div className="case-image"><Image src={project.image} alt={`${project.name} project preview`} fill priority sizes="100vw"/></div></section>
    <section className="case-context"><p className="case-label">CONTEXT</p><p>{project.context}</p></section>
    <section className="case-flow"><p className="case-label">PRODUCT FLOW</p><div>{flow.map((item, index) => <span key={item}>{item}{index < flow.length - 1 && <i>↓</i>}</span>)}</div></section>
    <section className="case-details"><div><p className="case-label">WHAT I WORKED ON</p><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="case-label">TECHNICAL FRAME</p><p className="case-stack">{project.stack.join(' · ')}</p><p className="case-note">Public case study. Technical detail is intentionally limited to protect professional confidentiality.</p></div></section>
    <footer className="case-footer"><Link href="/#work">All selected work <ArrowUpRight size={18}/></Link><Link href="/lab">Explore lab <ArrowUpRight size={18}/></Link></footer>
  </main>
}
