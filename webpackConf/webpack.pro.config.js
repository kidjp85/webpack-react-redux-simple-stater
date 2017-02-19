/**
 * CLIENT BUILD WEBPACK CONFIGURATION
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const defaultConf = require('./defaultConf');

const config = merge(baseConfig, {
  output: {
    filename: '[name]-bundle.js',
    path: defaultConf.buildPath
  }
});

config.module.rules.push(
  {
    test: /\.css$/,
    include: defaultConf.app,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style',
      loader: [
        'css',
        'postcss'
      ],
    })
  },
  {
    test: /\.(scss|sass)$/,
    include: defaultConf.app,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style',
      loader: [
        'css',
        'postcss',
				'sass'
      ],
    })
  }
)

config.plugins.push(
  new AddAssetHtmlPlugin({
    includeSourcemap: false,
    filepath: `${defaultConf.libPath}/vendor_bundle.js`
  }),
  new webpack.PrefetchPlugin('style-loader/addStyles'),
  new webpack.PrefetchPlugin('css-loader/lib/css-base'),
  new webpack.PrefetchPlugin('babel-polyfill/lib/index'),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./vendor-manifest.json')
  }),
  new ExtractTextPlugin({ filename: '[name]-bundle.css', allChunks: false })
)

module.exports = config;