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
}

module.exports = nextConfig
