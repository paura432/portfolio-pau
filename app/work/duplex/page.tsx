import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import { DuplexModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'DUPLEX — Pau Ramos', description: 'AI technical operations and traceable assisted diagnosis.' }

export default function DuplexPage() {
  const flow = ['TECHNICIAN', 'TECHNICAL CONTEXT', 'DIAGNOSTIC FLOW', 'RETRIEVAL', 'ASSISTED DIAGNOSIS', 'TRACEABLE RESPONSE']
  return <main className="case-page case-duplex"><CaseHeader chapter="02 / AI TECHNICAL OPERATIONS" /><section className="duplex-hero"><p className="kicker">PERFORMANZE / 2026 — NOW</p><h1>DUPLEX</h1><p>Technical operations software for diagnosis, documentation and field context.</p><div className="diagnostic-grid" aria-hidden="true"><span>EQP / 042</span><span>STATUS / REVIEW</span><span>MANUAL / INDEXED</span><span>HISTORY / AVAILABLE</span></div></section><section className="case-split"><p className="case-label">SYSTEM, NOT CHATBOT</p><div><h2>Assistance needs evidence.</h2><p>DUPLEX connects a technician’s context with documentation and historical knowledge so an assisted diagnosis can remain traceable. The public account omits operational data and private client details.</p></div></section><DuplexModel /><section className="duplex-flow"><p className="case-label">DIAGNOSTIC PATH</p><ol>{flow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol><aside><strong>RETRIEVAL SOURCES</strong><span>MANUALS</span><span>HISTORICAL CASES</span></aside></section><section className="case-proof"><div><p className="case-label">WORKED ON</p><ul><li>SAT assistant workflow</li><li>Document retrieval direction</li><li>Responsive field-use patterns</li><li>Source-backed response flow</li></ul></div><div><p className="case-label">TECHNICAL FRAME</p><p>TypeScript · React · Next.js · Supabase · PostgreSQL · RAG</p></div></section><footer className="case-footer"><Link href="/work/trustos">Next: TrustOS <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}
