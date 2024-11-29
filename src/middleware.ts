import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'

import authConfig from '@/auth.config'

const { auth } = NextAuth(authConfig)

const publicRoutes = ['/']
const authRoutes = ['/']
const apiAuthPrefix = '/api/auth'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Redirect to /dashboard if the user is logged in and tries to access authentication routes.
  // if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL('/dashboard', nextUrl))
  // }

  // Allow all authentication API routes.
  // if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
  //   return NextResponse.next()
  // }

  // Allow access to public routes regardless of authentication status.
  // if (publicRoutes.includes(nextUrl.pathname)) {
  //   return NextResponse.next()
  // }

  // Redirect to /login if the user is not logged in and tries to access a protected route.
  // if (!isLoggedIn && !authRoutes.includes(nextUrl.pathname) && !publicRoutes.includes(nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL('/', nextUrl))
  // }

  // Redirect to another page if the user tries to access a hidden route
  // if (hiddenRoutes.includes(nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL('/dashboard', nextUrl))
  // }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
