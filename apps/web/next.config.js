/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/suporte-tech-30-dias',
  assetPrefix: '/suporte-tech-30-dias/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
};

module.exports = nextConfig;
