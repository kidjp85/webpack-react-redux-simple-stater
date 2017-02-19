'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');

// Add support for all files in the test directory
const testsContext = require.context('.', true, /.test.js$/);
testsContext.keys().forEach(testsContext);
