/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/Mystichat-App',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: '/Mystichat-App/',
}

module.exports = nextConfig
