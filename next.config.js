// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true, // enables the SWC-based minifier (recommended for faster builds)
  images: {
    domains: ['example.com'], // Add any image domains you need to allow (e.g., for external image sources)
  },
  // Add any custom configurations you need here
};
