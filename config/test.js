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
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  // required for enzyme to work properly
  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      helpers: PATHS.test + '/helpers',
      components: PATHS.app + '/components/',
      config: PATHS.app + '/config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  plugins: []
};
