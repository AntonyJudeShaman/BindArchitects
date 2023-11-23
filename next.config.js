/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/",
      destination: "/index.html",
    },
  ],
};

module.exports = nextConfig;
