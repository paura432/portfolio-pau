'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CaseHeader({ chapter }: { chapter: string }) {
  const router = useRouter()
  const back = () => window.history.length > 1 ? router.back() : router.push('/')
  return <header className="case-header"><button type="button" className="case-back" onClick={back} aria-label="Go back"><ArrowLeft size={18} /> PAU / SYSTEMS</button><span>{chapter}</span></header>
}
