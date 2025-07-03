/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,  // <-- Critical for static exports
  },
};

export default nextConfig;
