/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "icons.duckduckgo.com",
      },
    ],
  },
};

module.exports = nextConfig;
