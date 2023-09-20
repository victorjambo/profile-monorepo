/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["shared-data"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/victorjambo/blog/main/images/**',
      },
    ],
  }
};
