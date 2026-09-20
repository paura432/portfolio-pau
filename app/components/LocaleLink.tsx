'use client'

import NextLink from 'next/link'
import { useParams } from 'next/navigation'
import type { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof NextLink>, 'href'> & { href: string }

export default function LocaleLink({ href, ...props }: Props) {
  const { locale } = useParams<{ locale?: string }>()
  const localizedHref = locale && href.startsWith('/') ? `/${locale}${href === '/' ? '' : href}` : href
  return <NextLink href={localizedHref} {...props} />
}
