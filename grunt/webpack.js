var webpack = require("webpack");
var webpackConfig = require("../webpack.config.js");

module.exports = {
  options: webpackConfig,
  dist: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
    ]
  },
  dev: {
    devtool: "sourcemap",
    debug: true
  },
  "webpack-dev-server": {
    options: {
      webpack: webpackConfig
    },
    start: {
      keepAlive: true,
      webpack: {
        devtool: "eval",
        debug: true
      }
    }
  }
};
