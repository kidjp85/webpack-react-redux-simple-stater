/**
 * DEFAULT SETTING FOR WEBPACK CONFIGURATION
 */

const path = require('path');

const PATHS = {
  app: path.join(process.cwd(), 'app'),
  buildPath: path.join(process.cwd(), 'public'),
  libPath: path.join(process.cwd(), 'libs'),
  manifestJson: path.join(process.cwd(), 'config')
};

/**
 * Define alias paths
 * Example: require('app/libs') can be shorten to: require('libs')
 */

const aliasPaths = {
  actions: path.join(PATHS.app, 'actions'),
  components: path.join(PATHS.app, 'components'),
  config: path.join(PATHS.app, 'config'),
  constants: path.join(PATHS.app, 'constants'),
  containers: path.join(PATHS.app, 'containers'),
  reducers: path.join(PATHS.app, 'reducers'),
  selectors: path.join(PATHS.app, 'selectors'),
  stores: path.join(PATHS.app, 'stores'),
  styles: path.join(PATHS.app, 'assets', 'styles'),
  images: path.join(PATHS.app, 'assets', 'images'),
  test: path.join(PATHS.app, '../test'),
  testHelpers: path.join(PATHS.app, '../test/helpers'),
  testMockData: path.join(PATHS.app, '../test/mockData'),
  utils: path.join(PATHS.app, 'utils')
}

/**
 * Get the default modules object for webpack
 * @return {Object}
 */

const defaultModules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      include: PATHS.app,
      loader: 'eslint',
      enforce: 'pre',
      exclude: /node_modules/
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: PATHS.app,
      exclude: /node_modules/,
      options: {
        cacheDirectory: true
      }
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|jpe?g|ico|ttf|eot|mp4|ogg|svg)$/,
      include: PATHS.app,
      exclude: /node_modules/,
      loader: 'file',
    }
  ]
};

/**
 * Get the default resolve object for webpack
 * @return {Object}
 */

const defaultResolve = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: aliasPaths,
    modules: [
      PATHS.app,
      'node_modules'
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}

module.exports = {
  aliasPaths,
  defaultModules,
  defaultResolve,
  app: PATHS.app,
  buildPath: PATHS.buildPath,
  libPath: PATHS.libPath,
  manifestJson: PATHS.manifestJson,
  nodeEnv: process.env.NODE_ENV !== 'production' ? 'development' : 'production'
}