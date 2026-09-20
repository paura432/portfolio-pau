'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'next/navigation'
import { copy, type Locale } from '../i18n'

export default function CaseHeader({ chapter }: { chapter: string }) {
  const { locale = 'en' } = useParams<{ locale?: Locale }>()
  return <header className="case-header">
    <Link className="case-back" href={`/${locale}`}><ArrowLeft size={18} /> {copy[locale].back}</Link>
    <span>{chapter}</span>
  </header>
}
