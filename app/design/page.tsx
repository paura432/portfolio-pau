import Link from '../components/LocaleLink'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../components/CaseHeader'

export const metadata = { title: 'Design Practice — Pau Ramos', description: 'Editorial and product web implementation by Pau Ramos.' }

export default function DesignPage() {
  const projects = [{ name: 'SOFÍA', note: 'Editorial hierarchy, media behavior and responsive visual system.', live: 'https://sofia-chi-gold.vercel.app', repo: 'https://github.com/paura432/Sofia' }, { name: 'DIEGO', note: 'Portfolio hierarchy, visual pacing and responsive implementation.', live: 'https://portfolio-diego-delgado.vercel.app', repo: 'https://github.com/paura432/portfolio-diego' }]
  return <main className="design-page"><CaseHeader chapter="05 / DESIGN PRACTICE" /><section className="design-hero"><p className="kicker">PUBLIC IMPLEMENTATION</p><h1>Not every product<br/>should look like software.</h1><p>Editorial and portfolio web implementation. This page attributes implementation and system work only.</p></section><section className="sofia-grid">{projects.map((project) => <article key={project.name}><a className="sofia-type" href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} live site`}><span>{project.name}</span><small>OPEN SITE <ArrowUpRight size={18} /></small></a><div><p className="case-label">WHAT IT DEMONSTRATES</p><h2>{project.note}</h2><p>Media stays on its original public site. This portfolio does not claim ownership of editorial or photographic content.</p><div className="design-links"><a href={project.live} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight size={18}/></a><a href={project.repo} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={18}/></a></div></div></article>)}</section><footer className="case-footer"><Link href="/">Back to systems <ArrowUpRight size={18}/></Link></footer></main>
}
