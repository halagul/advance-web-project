// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     images: {
//     domains: ['images.unsplash.com'],
//   },
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
