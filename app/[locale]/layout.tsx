import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import GlobalHeader from '../components/GlobalHeader'
import LocaleRuntime from '../components/LocaleRuntime'
import { isLocale, localeMetadata, locales } from '../i18n'

const origin = 'https://portfolio-pau-khaki.vercel.app'

export function generateStaticParams() { return locales.map((locale) => ({ locale })) }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const meta = localeMetadata[locale]
  return { title: meta.title, description: meta.description, alternates: { canonical: `/${locale}`, languages: { en: '/en', es: '/es', 'x-default': '/en' } }, openGraph: { title: meta.title, description: meta.description, locale: meta.ogLocale, url: `${origin}/${locale}` }, twitter: { card: 'summary', title: meta.title, description: meta.description } }
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <LocaleRuntime locale={locale}><GlobalHeader locale={locale} />{children}</LocaleRuntime>
}
