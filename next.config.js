/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["dreamlaptops.com"],
  },
  env: {
    baseUrl: "https://dreamlaptops.com/graphql",
  },
};
