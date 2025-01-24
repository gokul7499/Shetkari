
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(
        (minimizer) => minimizer.constructor.name === "CssMinimizerPlugin"
      );

      if (minimizerIndex > -1) {
        webpackConfig.optimization.minimizer[minimizerIndex] = new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
                normalizeUrl: false, // Avoid breaking URLs
              },
            ],
          },
        });
      }

      return webpackConfig;
    },
  },
};
