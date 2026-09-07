import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../components/CaseHeader'
import { foundations } from '../data/portfolio'

export const metadata = { title: 'Engineering Foundations — Pau Ramos', description: 'Public systems work in C, UNIX, graphics, networking and C++.' }

export default function FoundationsPage() {
  return <main className="foundations-page"><CaseHeader chapter="03 / ENGINEERING FOUNDATIONS" /><section className="foundations-hero"><p className="kicker">42 MADRID / PUBLIC WORK</p><h1>Before products,<br/>there were systems.</h1><p>Foundations are not school cards. They are the public engineering problems behind the product work.</p></section><section className="foundation-map">{foundations.map((item) => <article key={item.id}><span>{item.title}</span><h2>{item.projects}</h2><p>{item.lesson}</p>{item.id === 'graphics' && <Link href="/foundations/cub3d">Explore raycasting <ArrowUpRight size={18}/></Link>}{item.id === 'unix' && <Link href="/foundations/minishell">Explore Minishell <ArrowUpRight size={18}/></Link>}</article>)}</section><footer className="case-footer"><Link href="/design">Next: Design practice <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}
