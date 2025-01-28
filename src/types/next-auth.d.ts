// types/next-auth.d.ts
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken: string
    user: {
      id: string
      roles: any[]
      schools: any[] // Add the schools property
      isAdmin: boolean
      national_number: string
      username: string
    } & DefaultSession['user']
  }

  interface User {
    id: string
    email: string
    name: string
    roles: any[]
    username: string
    token: string
    isAdmin: boolean
    schools: any[] // Add the schools property
    user: any
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    name: string
    isAdmin: boolean
    roles: any[]
    accessToken: string
    username: string
    schools: any[] // Add the schools property
  }
}
