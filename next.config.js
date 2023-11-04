/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["./src"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "icons.duckduckgo.com",
      },
    ],
  },
};

module.exports = nextConfig;
