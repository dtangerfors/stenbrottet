import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true,  
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.dtangerfors.se',
        port: '',
        pathname: '/stenbrottsvagen/gallery/**',
      },
      {
        protocol: 'https',
        hostname: 'stenbrottet.vercel.app',
        port: '',
        pathname: '/**'
      },
    ],
  },
};

export default withPWA({
  dest: "public",         // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
  register: true,         // register the PWA service worker
  skipWaiting: true,      // skip waiting for service worker activation
})(nextConfig);

