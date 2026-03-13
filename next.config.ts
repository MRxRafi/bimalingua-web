import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bimalingua.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
