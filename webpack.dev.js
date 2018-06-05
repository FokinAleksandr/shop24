const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client'],
  output: {
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
