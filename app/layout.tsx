import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import DevTools from './components/DevTools'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-pau-khaki.vercel.app/'),
  title: 'Pau Ramos — Full Stack Product Engineer',
  description: 'Pau Ramos builds products across interface, systems and intelligence.',
  authors: [{ name: 'Pau Ramos' }],
  openGraph: { title: 'Pau Ramos — Full Stack Product Engineer', description: 'Products across interface, systems and intelligence.', siteName: 'Pau / Systems', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: 'Pau Ramos — Full Stack Product Engineer', description: 'Products across interface, systems and intelligence.' },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Person', name: 'Pau Ramos', jobTitle: 'Full Stack Product Engineer', url: 'https://portfolio-pau-khaki.vercel.app/', email: 'pauramosimo@gmail.com', sameAs: ['https://github.com/paura432', 'https://www.linkedin.com/in/pau-ramos-sim%C3%B3-520751202/'] }, { '@type': 'WebSite', name: 'PAU / LIVE SYSTEMS', url: 'https://portfolio-pau-khaki.vercel.app/' }] }
  return <html lang="en" className={geistSans.variable + ' ' + geistMono.variable}><body>{children}<DevTools /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>
}
