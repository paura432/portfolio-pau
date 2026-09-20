import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const locale = request.nextUrl.pathname.split('/')[1] === 'es' ? 'es' : 'en'
  const headers = new Headers(request.headers)
  headers.set('x-portfolio-locale', locale)
  return NextResponse.next({ request: { headers } })
}

export const config = { matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'] }
