// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Optional: Use trailing slashes in the URLs
    images: {
      unoptimized: true, // Optional: Disable image optimization if not needed
    },
  };
  
  export default nextConfig;
  