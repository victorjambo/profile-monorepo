const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  transpilePackages: ["builders"],
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
