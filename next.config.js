const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: false,
  images: {
    domains: ['cloudflare-ipfs.com', process.env.API_PROD_URI],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  env: {
    API_PROD_URI: process.env.API_PROD_URI,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    GMAIL_ADDRESS: process.env.GMAIL_ADDRESS,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    MONGODB_URI: process.env.MONGODB_URI,
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    GOOGLE_CLIENTSECRET: process.env.GOOGLE_CLIENTSECRET,
    FACEBOOK_CLIENTID: process.env.FACEBOOK_CLIENTID,
    FACEBOOK_CLIENTSECRET: process.env.FACEBOOK_CLIENTSECRET,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_FROM: process.env.EMAIL_FROM,

    EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID,
    EMAILJS_TEMPLATEID: process.env.EMAILJS_TEMPLATEID,
    EMAILJS_USERID: process.env.EMAILJS_USERID,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
  },
}

module.exports = nextConfig
