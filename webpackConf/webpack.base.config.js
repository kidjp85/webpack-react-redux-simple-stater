const webpack = require('webpack');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const autoprefixer = require('autoprefixer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const defaultConf = require('./defaultConf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const isPro = defaultConf.nodeEnv === 'production';

const config = {
  // the project dir
  context: __dirname,
  entry: {
    app: [defaultConf.app, 'styles/main']
  },
  resolve: defaultConf.defaultResolve.resolve,
  resolveLoader: defaultConf.defaultResolve.resolveLoader,
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: fs.readFileSync(
        `${defaultConf.app}/index.html`
      ).toString()
    }),
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
    new webpack.LoaderOptionsPlugin({
      minimize: isPro,
      debug: !isPro,
      options: {
        context: defaultConf.app,
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          })
        ],
        eslint: {
          rules: isPro ? {} : {
            'no-restricted-syntax': [1, 'DebuggerStatement'],
            'no-debugger': 0
          }
        }
      }
    })
  ],
  module: defaultConf.defaultModules
};

// Generate webpack build status file
if (process.env.WEBPACK_BUILD_STATUS === 'true') {
  config.plugins.push(
    new StatsWriterPlugin({
      filename: 'webpackBuildStatus.json'
    })
  )
}

// Minify js for production build
if (isPro) {
  config.plugins.push(
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
    })
  )
}

module.exports = config;