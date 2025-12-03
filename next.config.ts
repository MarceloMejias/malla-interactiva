import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/malla-interactiva',
  assetPrefix: '/malla-interactiva',
};

export default nextConfig;
