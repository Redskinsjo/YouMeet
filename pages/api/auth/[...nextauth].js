import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../lib/mongodb'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // FacebookProvider({
    //   clientId: `${process.env.FACEBOOK_CLIENTID}`,
    //   clientSecret: `${process.env.FACEBOOK_CLIENTSECRET}`,
    // }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENTID}`,
      clientSecret: `${process.env.GOOGLE_CLIENTSECRET}`,
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login',
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    // async signIn(user, account, profile) {
    //   console.log('user1', user, 'account1', account, 'profile', profile)
    // },
    // async redirect({ url, baseUrl }) {
    //   console.log('url1', url, 'baseUrl1', baseUrl)
    // Allows relative callback URLs
    // if (url.startsWith('/')) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    // else if (new URL(url).origin === baseUrl) return url
    // return baseUrl
    // return url
    // },
  },
})
