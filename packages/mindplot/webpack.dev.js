const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
};

module.exports = merge(common, devConfig);
