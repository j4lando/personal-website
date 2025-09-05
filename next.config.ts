import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features that don't work with static export
  experimental: {
    // Disable features that require server-side rendering
  }
};

export default nextConfig;
