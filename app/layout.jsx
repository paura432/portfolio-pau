import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Pau Ramos - Full Stack Product Engineer Portfolio',
  description: 'Full stack product engineer portfolio focused on TypeScript, React, Next.js, Vite, Supabase, Vercel, API integrations, AI-assisted workflows and digital identity.',
  keywords: 'full stack product engineer, TypeScript, React, Next.js, Vite, Supabase, Vercel, API integrations, AI workflows, digital identity, verifiable credentials',
  authors: [{ name: 'Pau Ramos' }],
  openGraph: {
    title: 'Pau Ramos - Full Stack Product Engineer Portfolio',
    description: 'Modern web products, API integrations, AI-assisted workflows, digital identity and secure systems.',
    siteName: 'Pau Ramos Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pau Ramos - Full Stack Product Engineer Portfolio',
    description: 'Modern web products, API integrations, AI-assisted workflows, digital identity and secure systems.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
