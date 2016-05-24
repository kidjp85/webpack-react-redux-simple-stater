'use strict';
let path = require('path');
let defaultConfig = require('./defaults');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let NpmInstallPlugin = require('npm-install-webpack-plugin');
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultConfig.port,
  debug: true,
  devtool: 'eval',
  entry: {
    app: defaultConfig.app,
    style: defaultConfig.style
  },
  output: {
    path: defaultConfig.public,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: defaultConfig.aliasPaths
  },
  module: {}
};
