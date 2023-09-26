const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
NextConfig = {
  transpilePackages: ["shared-data"],
  reactStrictMode: true,
  redirects: () => [
    {
      source: "/blog",
      destination: "/",
      statusCode: 301,
    },
  ],
};

module.exports = withNextra(NextConfig);
