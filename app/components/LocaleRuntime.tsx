'use client'

import { useEffect } from 'react'
import { spanishText, type Locale } from '../i18n'

export default function LocaleRuntime({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const nodes: Text[] = []
    while (walker.nextNode()) nodes.push(walker.currentNode as Text)
    nodes.forEach((node) => {
      const parent = node.parentElement
      if (!parent) return
      if (locale === 'en' && parent.dataset.en) node.nodeValue = parent.dataset.en
      if (locale === 'es' && spanishText[node.nodeValue?.trim() ?? '']) {
        parent.dataset.en ??= node.nodeValue ?? ''
        node.nodeValue = node.nodeValue?.replace(node.nodeValue.trim(), spanishText[node.nodeValue.trim()]) ?? ''
      }
    })
  }, [locale])
  return <div className="localized-site" lang={locale}>{children}</div>
}
