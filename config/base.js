'use strict';

let defaultConfig = require('./defaults');
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
