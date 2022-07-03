/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, "src/styles/")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "astroturf/loader",
          options: { extension: ".module.scss", enableCssProp: true },
        },
      ],
    });

    return config;
  },
};
