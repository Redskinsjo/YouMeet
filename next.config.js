/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
};

module.exports = nextConfig;
