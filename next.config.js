/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["dreamlaptops.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
