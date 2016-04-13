'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

// List of allowed environments
const allowedEnvs = ['dev', 'prod', 'test'];

// Set the correct environment
let env;

if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} targetEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(targetEnv) {
  let isValid = targetEnv && targetEnv.length > 0 && allowedEnvs.indexOf(targetEnv) !== -1;
  let validEnv = isValid ? targetEnv : 'dev';
  let config = require(path.join(__dirname, 'config/' + validEnv));
  return config;
}

module.exports = buildConfig(env);
