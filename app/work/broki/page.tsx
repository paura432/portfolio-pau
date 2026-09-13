import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import CaseDeepDive from '../../components/CaseDeepDive'
import { BrokiModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'Broki — Pau Ramos', description: 'Airport operations platform for ground operations.' }
export default function BrokiPage() {
  const stages = ['FLEET', 'GSE', 'TOOLS', 'PERSONNEL', 'OPERATIONAL TRACEABILITY']
  return <main className="case-page case-broki"><CaseHeader chapter="02 / INDEPENDENT PRODUCT" /><section className="broki-hero"><p className="kicker">INDEPENDENT PRODUCT / PUBLIC CASE</p><h1>BROKI</h1><p>Airport operations platform for ground operations, connecting fleet, Ground Support Equipment, tools, personnel and operational traceability.</p><div className="broki-mark" aria-hidden="true"><i /><i /><i /></div></section><CaseDeepDive project="broki" /><section className="case-split"><p className="case-label">AIRPORT OPERATIONS</p><div><h2>Make operational work legible.</h2><p>BROKI is an operational platform, not a migration story. It brings field resources and operational state into one system.</p></div></section><BrokiModel /><section className="broki-stages"><p className="case-label">PRODUCT SYSTEM</p><ol>{stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol></section><footer className="case-footer"><Link href="/work/trustos">Professional systems <ArrowUpRight size={18}/></Link><Link href="/">All work <ArrowUpRight size={18}/></Link></footer></main>
}
