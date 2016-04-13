'use strict';

let path = require('path');
let baseConfig = require('./base');
let PATHS = {
  app: path.join(__dirname, '/../app'),
  public: path.join(__dirname, '/../public'),
  test: path.join(__dirname, '/../test')
};

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          PATHS.app
        ]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            PATHS.app,
            PATHS.test
          ]
        )
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },
  plugins: []
};
