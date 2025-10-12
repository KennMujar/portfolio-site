/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;  // Automatically true on Vercel builds

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isVercel ? '' : '',  // Always empty for Vercel; customize if needed for other hosts
  // If you add GitHub Pages later: basePath: isVercel ? '' : '/your-actual-repo-name',
};

export default nextConfig;
