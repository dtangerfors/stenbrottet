/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: false,  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.dtangerfors.se',
        port: '',
        pathname: '/stenbrottsvagen/gallery/**',
      },
    ],
  },
};

module.exports = nextConfig;
