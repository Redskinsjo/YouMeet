/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cloudflare-ipfs.com'],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  env: {
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID,
    EMAILJS_TEMPLATEID: process.env.EMAILJS_TEMPLATEID,
    EMAILJS_USERID: process.env.EMAILJS_USERID,
  },
}

module.exports = nextConfig
