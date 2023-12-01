const webpack = require("webpack");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development',
  }),

  webpack: (config, { isServer, buildId, dev, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
        }),
        new webpack.NormalModuleReplacementPlugin(/node:crypto/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
