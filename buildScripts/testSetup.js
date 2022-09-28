// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile our tests before they run
require("@babel/register")();

// Disable Webpack features that Mocha doesn't understand (e.g: import a css file in a js file)
require.extensions[".css"] = function () {};
