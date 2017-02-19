/**
 * HOT RELOAD DEV WEBPACK CONFIGURATION
 */

const webpack = require('webpack');
const config = require('./webpack.base.config');
const defaultConf = require('./defaultConf');
const autoprefixer = require('autoprefixer');

config.entry = {
	app:  [
		'babel-polyfill',
		'webpack/hot/dev-server',
		defaultConf.app
	]
}

config.output = {
  filename: '[name]-bundle.js',
  path: defaultConf.buildPath
};

config.module.rules.push(
  {
    test: /\.css$/,
    include: defaultConf.app,
    use: [
      'style',
      'css',
      'postcss'
    ]
  },
  {
    test: /\.(scss|sass)$/,
    include: defaultConf.app,
    use: [
      'style',
      'css',
      'postcss',
      'sass'
    ]
  }
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.LoaderOptionsPlugin({
		options: {
			babelQuery: {
				presets: ['babel-preset-react-hmre'].map(require.resolve),
			},
			postcss: [
				autoprefixer({
					browsers: [
						'last 3 version',
						'ie >= 10',
					],
				})
			]
		}
	})
);

config.devtool = 'eval-source-map';

module.exports = config;