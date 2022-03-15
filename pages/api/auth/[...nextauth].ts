import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import LoginForm from '../../../components/login-form'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    FacebookProvider({
      clientId: `${process.env.FACEBOOK_CLIENTID}`,
      clientSecret: `${process.env.FACEBOOK_CLIENTSECRET}`,
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENTID}`,
      clientSecret: `${process.env.GOOGLE_CLIENTSECRET}`,
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>',
    }),
  ],
  pages: {
    // signIn: '/login',
  },
})
