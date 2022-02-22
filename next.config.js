/** @type {import('next').NextConfig} */

const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles/')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'astroturf/loader',
          options: { extension: '.module.scss', enableCssProp: true },
        },
      ],
    });

    config.plugins.push(new ESLintPlugin({ fix: true }));

    return config;
  },
};
