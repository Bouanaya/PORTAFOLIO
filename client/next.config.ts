// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      "http://192.168.1.193:3000", // bdlha b l'IP li katsir biha test
      "http://localhost:3000",
    ],
  },
};

module.exports = nextConfig;
