/**
 * TEST WEBPACK CONFIGURATION
 */

const defaultConf = require('./defaultConf');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'isparta-loader',
        include: [
          defaultConf.app
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          defaultConf.app,
          defaultConf.aliasPaths.test
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      }
    ]
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: defaultConf.aliasPaths,
    modules: [
      defaultConf.app,
      'node_modules'
    ]
  },
  plugins: [],
  node: {
    fs: 'empty'
  }
};