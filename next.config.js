// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withFonts = require("next-fonts");

module.exports = withFonts({
    webpack(config, options) {
        
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "url-loader?limit=100000",
                },
                {
                    loader: "file-loader",
                },
            ],
        });
        return config;
    },
});

module.exports = {
  images: {
    // loader: 'akamai',
    // path: '/',
    // deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}