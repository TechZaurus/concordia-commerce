import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error - React Compiler is available in Next.js 15+ but types might be lagging
    reactCompiler: true,
  },
};

export default nextConfig;
