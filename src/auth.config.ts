import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
    Credentials({
      name: 'Credentials'
    })
  ]
} satisfies NextAuthConfig
