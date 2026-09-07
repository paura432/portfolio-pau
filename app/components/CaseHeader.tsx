import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CaseHeader({ chapter }: { chapter: string }) {
  return <header className="case-header"><Link href="/"><ArrowLeft size={18} /> PAU / SYSTEMS</Link><span>{chapter}</span></header>
}
