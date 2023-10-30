/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['loremflickr.com'],
  },
  swcMinify: true,
  experimental: {
    appDir:true,
    serverActions:true,
  },
};

module.exports = nextConfig;
