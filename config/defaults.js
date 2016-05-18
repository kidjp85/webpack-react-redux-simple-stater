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

let aliasPaths = {
  'libs': path.join(PATHS.app, 'libs'),
  'styles': path.join(PATHS.app, 'assets', 'styles'),
  'config': path.join(PATHS.app, 'config'),
  'actions': path.join(PATHS.app, 'actions'),
  'components': path.join(PATHS.app, 'components'),
  'stores': path.join(PATHS.app, 'stores'),
  'constants': path.join(PATHS.app, 'constants'),
  'reducers': path.join(PATHS.app, 'reducers'),
  'containers': path.join(PATHS.app, 'containers')
};

let defaultModules = {
  preLoaders: [{
    test: /\.(js|jsx)$/,
    include: PATHS.app,
    loader: 'eslint-loader'
  }],
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
  aliasPaths: aliasPaths,
  public: PATHS.public,
  port: defaultPort,
  defaultModules: defaultModules
};
