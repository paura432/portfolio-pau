import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import CaseDeepDive from '../../components/CaseDeepDive'
import { DuplexModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'DUPLEX — Pau Ramos', description: 'AI technical operations and traceable assisted diagnosis.' }
export default function DuplexPage() {
  return <main className="case-page case-duplex"><CaseHeader chapter="02 / AI TECHNICAL OPERATIONS" /><section className="duplex-hero"><p className="kicker">PERFORMANZE / 2026 — NOW</p><h1>DUPLEX</h1><p>Technical operations software for diagnosis, documentation and field context.</p><div className="diagnostic-grid" aria-hidden="true"><span>EQP / 042</span><span>STATUS / REVIEW</span><span>MANUAL / INDEXED</span><span>HISTORY / AVAILABLE</span></div></section><CaseDeepDive project="duplex" /><section className="case-split"><p className="case-label">SYSTEM, NOT CHATBOT</p><div><h2>Assistance needs evidence.</h2><p>DUPLEX joins equipment context, manuals, checklists and case history so assisted diagnosis remains source-traceable. Public account omits operational data and private client details.</p></div></section><DuplexModel /><footer className="case-footer"><Link href="/work/trustos">Next: TrustOS <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}
