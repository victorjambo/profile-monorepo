const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
NextConfig = {
  transpilePackages: ["shared-data"],
  reactStrictMode: true,
};

module.exports = withNextra(NextConfig);
