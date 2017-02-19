/**
 * DLL BUILD WEBPACK CONFIGURATION
 * IMPORTANT: Run `yarn build:dll` only when you change something in vendor files below
 */

const webpack = require('webpack');
const defaultConf = require('./defaultConf');
const path = require('path')
const merge = require('webpack-merge');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-pure-render'
    ]
  },
  module: defaultConf.defaultModules,
  output: {
    path: defaultConf.libPath,
    filename: '[name]_bundle.js',
    library: '[name]_bundle'
  },
  resolve: merge(defaultConf.defaultResolve.resolve, { unsafeCache: true }),
  resolveLoader: defaultConf.defaultResolve.resolveLoader,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(defaultConf.nodeEnv)
      }
    }),
    new LodashModuleReplacementPlugin({
      flattening: true,
      collections: true,
      paths: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      }
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_bundle'
    })
  ]
}