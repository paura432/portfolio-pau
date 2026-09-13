import PortfolioShell from '../components/PortfolioShell'
import { isLocale } from '../i18n'
import { notFound } from 'next/navigation'

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <PortfolioShell standalone={false} />
}
