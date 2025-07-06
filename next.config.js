// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');

module.exports = {
  output: 'standalone',
  i18n,
  reactStrictMode: true,
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  //   disable: process.env.NODE_ENV === 'development',
  //   runtimeCaching,
  //   buildExcludes: [/middleware-manifest.json$/],
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });
    return config;
  },
};
