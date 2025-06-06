/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Mystichat-App',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/Mystichat-App/',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
