/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['cdn.10minuteschool.com', 'img.youtube.com', 's3.ap-southeast-1.amazonaws.com']
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;