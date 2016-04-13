'use strict';

const path = require('path');
const defaultPort = 8000;

let PATHS = {
  app: path.join(__dirname, '/../app'),
  public: path.join(__dirname, '/../public'),
  style: path.join(__dirname, '/../app/assets/styles/main.scss')
};

/**
 * Get the default modules object for webpack
 * @return {Object}
 */

let defaultModules = {
  loaders: [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.styl/,
      loader: 'style-loader!css-loader!stylus-loader'
    },
    {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.(mp4|ogg|svg)$/,
      loader: 'file-loader'
    }
  ]
};


module.exports = {
  app: PATHS.app,
  style: PATHS.style,
  public: PATHS.public,
  port: defaultPort,
  defaultModules: defaultModules
};
