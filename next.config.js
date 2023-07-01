/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "jsonkeeper.com", "s3.ap-south-1.amazonaws.com", "www.india.com", "images.moneycontrol.com"],
  },
};

module.exports = nextConfig;
