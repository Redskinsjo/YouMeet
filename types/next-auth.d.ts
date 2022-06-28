import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Provider {
    callbackUrl: string
    id: 'google' | 'email'
    name: 'Google' | 'Email'
    signinUrl: string
    type: 'oauth'
  }
  type Providers = {
    email: Provider
    google: Provider
  }
}
