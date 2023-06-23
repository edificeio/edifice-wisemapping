const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    library: {
      type: 'umd',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      usedExports: true,
    },
  },
};

module.exports = merge(common, prodConfig);
