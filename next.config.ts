import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 1000,
    workerThreads: false
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
