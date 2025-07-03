// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // Enables static HTML export (no server)
  images: {
    unoptimized: true,      // Disables image optimization so <Image /> works with static export
  },
};

export default nextConfig;
