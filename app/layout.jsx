import './globals.css'

export const metadata = {
  title: 'Pau Ramos - Full Stack Product Engineer Portfolio',
  description: 'Full stack product engineer portfolio focused on TypeScript, React, Next.js, Vite, Supabase, Vercel, API integrations, AI-assisted workflows and digital identity.',
  keywords: 'full stack product engineer, TypeScript, React, Next.js, Vite, Supabase, Vercel, API integrations, AI workflows, digital identity, verifiable credentials',
  authors: [{ name: 'Pau Ramos' }],
  openGraph: {
    title: 'Pau Ramos - Full Stack Product Engineer Portfolio',
    description: 'Modern web products, API integrations, AI-assisted workflows, digital identity and secure systems.',
    url: 'https://tu-dominio.com',
    siteName: 'Pau Ramos Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
