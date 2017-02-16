// This file isn't transpiled, so mucht use CommonJS and ES5

// Register babel to tranpile before our tests run.
require('babel-register');

// Disable webpack features tha Mocha doesn't understand.
require.extensions['.css'] = function() {};
