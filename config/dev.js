'use strict';

let path = require('path');
let webpack = require('webpack');
let merge = require('webpack-merge');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = merge(baseConfig, {
  devtool: 'eval-source-map',
  cache: true,
  devServer: {
    contentBase: defaultSettings.public,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: defaultSettings.port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React Idangerous Swiper',
      appMountId: 'app',
      inject: false
    })
  ],
  module: defaultSettings.defaultModules
});

// Add needed loaders to the defaults here
config.module.loaders.push(
  {
    test:/\.jsx?$/,
    loaders: ['babel?cacheDirectory'],
    include: [].concat(
      config.additionalPaths, defaultSettings.app
    )
  },
  {
    test: /\.sass/,
    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
  },
  {
    test: /\.scss/,
    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
  }
);

module.exports = config;
