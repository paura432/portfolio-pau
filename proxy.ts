import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/')[1]
  if (segment && segment !== 'en' && segment !== 'es') return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  const locale = segment === 'es' ? 'es' : 'en'
  const headers = new Headers(request.headers)
  headers.set('x-portfolio-locale', locale)
  return NextResponse.next({ request: { headers } })
}

export const config = { matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'] }
