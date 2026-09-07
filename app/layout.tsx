import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Pau Ramos — Full Stack Product Engineer',
  description: 'Pau Ramos builds products across interface, systems and intelligence.',
  authors: [{ name: 'Pau Ramos' }],
  openGraph: { title: 'Pau Ramos — Full Stack Product Engineer', description: 'Products across interface, systems and intelligence.', siteName: 'Pau / Systems', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: 'Pau Ramos — Full Stack Product Engineer', description: 'Products across interface, systems and intelligence.' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geistSans.variable + ' ' + geistMono.variable}><body>{children}</body></html>
}
