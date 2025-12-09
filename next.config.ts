import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/malla-interactiva' : '',
  assetPrefix: isProd ? '/malla-interactiva' : '',
  
  // Optimizaciones de rendimiento
  compiler: {
    removeConsole: isProd ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Optimizar chunks
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      'framer-motion',
    ],
  },
};

export default nextConfig;
