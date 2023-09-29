const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  transpilePackages: ["shared-data"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/**',
      },
    ],
  },
});
