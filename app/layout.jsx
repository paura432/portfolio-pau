import './globals.css'

export const metadata = {
  title: 'Pau ramos - Portfolio',
  description: 'Portfolio profesional de desarrollo web full stack',
  keywords: 'desarrollador, portfolio, react, next.js, full stack',
  authors: [{ name: 'Pau ramos' }],
  openGraph: {
    title: 'Pau ramos - Portfolio',
    description: 'Portfolio profesional de desarrollo web',
    url: 'https://tu-dominio.com',
    siteName: 'Pau ramos Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: 'transparent' }} className="bg-transparent">
        {children}
      </body>
    </html>
  )
}
