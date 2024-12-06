import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware"
import { applySecurityHeaders, enforceHTTPS } from './lib/security/headers'

function middleware(request: NextRequest) {
  // Redirect HTTP to HTTPS
  if (enforceHTTPS(request)) {
    return NextResponse.redirect(
      `https://${request.nextUrl.host}${request.nextUrl.pathname}`,
      301
    )
  }

  // Handle trailing slashes
  if (request.nextUrl.pathname !== '/' && request.nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.slice(0, -1), request.url)
    )
  }

  // Handle mixed case URLs
  const pathname = request.nextUrl.pathname
  const normalizedPath = pathname.toLowerCase()

  if (pathname !== normalizedPath) {
    return NextResponse.redirect(
      new URL(normalizedPath, request.url)
    )
  }

  // Apply security headers
  const response = NextResponse.next()
  applySecurityHeaders(response)

  return response
}

export default withAuth(middleware, {
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    "/dashboard/:path*",
    "/settings/:path*",
  ],
}