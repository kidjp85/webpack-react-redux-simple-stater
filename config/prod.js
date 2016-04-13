'use strict';

let path = require('path');
let webpack = require('webpack');
let merge = require('webpack-merge');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let pkg = require('../package.json');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = merge(baseConfig, {
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function(v) {
      return v !== 'ejs' && v !== 'express' && v !=='compression';
    })
  },
  output: {
    path: defaultSettings.public,
    filename: '[name].min.js',
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('[name].min.css'),
    // Extract vendor and manifest files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // Setting DefinePlugin affects React library size!
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  module: defaultSettings.defaultModules,
});

// Add needed loaders to the defaults here
config.module.loaders.push(
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: [].concat(
      config.additionalPaths, defaultSettings.app
    )
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize'
    )
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style', 'css?minimize!sass'
    )
  }
);

module.exports = config;


        