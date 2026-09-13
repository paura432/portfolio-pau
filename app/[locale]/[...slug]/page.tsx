import { notFound } from 'next/navigation'
import OviPage from '../../work/ovi/page'
import DuplexPage from '../../work/duplex/page'
import BrokiPage from '../../work/broki/page'
import TrustosPage from '../../work/trustos/page'
import FoundationsPage from '../../foundations/page'
import Cub3dPage from '../../foundations/cub3d/page'
import MinishellPage from '../../foundations/minishell/page'
import DesignPage from '../../design/page'
import ColophonPage from '../../colophon/page'
import { isLocale, locales } from '../../i18n'

const pages = {
  'work/ovi': OviPage,
  'work/duplex': DuplexPage,
  'work/broki': BrokiPage,
  'work/trustos': TrustosPage,
  foundations: FoundationsPage,
  'foundations/cub3d': Cub3dPage,
  'foundations/minishell': MinishellPage,
  design: DesignPage,
  colophon: ColophonPage,
} as const

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(pages).map((path) => ({ locale, slug: path.split('/') })))
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale, slug } = await params
  const Page = pages[slug.join('/') as keyof typeof pages]
  if (!isLocale(locale) || !Page) notFound()
  return <Page />
}
