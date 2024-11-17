/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
	ignoreDuringBuilds: true,
  },
  
}

module.exports = nextConfig
