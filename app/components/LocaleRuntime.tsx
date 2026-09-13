'use client'

import { useEffect } from 'react'
import type { Locale } from '../i18n'

export default function LocaleRuntime({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  useEffect(() => { document.documentElement.lang = locale }, [locale])
  return <div className="localized-site" lang={locale}>{children}</div>
}
