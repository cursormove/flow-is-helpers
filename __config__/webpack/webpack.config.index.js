const path          = require('upath');
const _             = require('lodash');
const appRoot       = require('app-root-dir');
const nodeExternals = require('webpack-node-externals');
const optimizations = require('./webpack.config.optimizations.js');
const plugins       = require('./webpack.config.plugins.js');
const PATHS         = require(path.joinSafe(appRoot.get(), 'paths.js'));


/**
 * Constants
 */
const {
  BUILD_TYPE,
  DIST_ROOT_PATH,
  NODE_DEVELOPMENT_ENV,
  PROJECT_EXT,
  PROJECT_NAME,
  PROJECT_WEB_EXT,
  PROJECT_WEB_MIN_EXT,
  SRC_INDEX_PATH,
  SRC_ROOT_PATH,
  WEBPACK_MODE,
} = PATHS;


/**
 * Base Webpack Config
 */
const webpackBaseConfig = {
  mode: WEBPACK_MODE,
  entry: {
    [PROJECT_NAME]: SRC_INDEX_PATH
  },
  devtool: NODE_DEVELOPMENT_ENV ? '#eval-source-map' : 'source-map',
  // The top-level output key contains set of options instructing webpack on how
  // and where it should output your bundles, assets and anything else you
  // bundle or load with webpack
  // @docs: https://webpack.js.org/configuration/output
  output: {
    // Output path
    // @docs: https://webpack.js.org/configuration/output/#output-path
    path: DIST_ROOT_PATH,
    // Output name
    // @docs: https://webpack.js.org/configuration/output/#output-filename
    filename: `[name]${PROJECT_EXT}`,
    // Name of library to be refranced
    // @docs: https://webpack.js.org/configuration/output/#output-library
    library: '[name]',
    // Configure how the library will be exposed. Using "umd" This exposes the
    // library under all the module definitions, allowing it to work with
    // CommonJS, AMD and as global variable.
    // @docs: https://webpack.js.org/configuration/output/#output-librarytarget
    libraryTarget: 'umd'
  },
  // Options determine how the different types of modules are processed/treated.
  // Right now we are only processing ".js" files but with these modules loaders
  // you can load/do just about anything. Hell, wrighting your own module isn't
  // all to hard so if you can't find a loader - make a loader.
  // @note: Some of the module loaders are listed here
  //        🠲 https://webpack.js.org/loaders/
  // @docs: https://webpack.js.org/configuration/module/
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: path.resolve(SRC_ROOT_PATH),
      loaders: ['babel-loader'],
    }]
  },
};


/**
 * Add plugins & optimizations to base
 */
webpackBaseConfig.optimization = optimizations;
webpackBaseConfig.plugins = plugins;


/**
 * Web Build
 */
const web = _.defaultsDeep(Object.create(null), webpackBaseConfig);
web.target = 'web';
web.output.filename = `[name]${PROJECT_WEB_EXT}`;
web.optimization.minimize  = false;
web.optimization.minimizer = [];


/**
 * Web Min Build
 */
const webMin = _.defaultsDeep(Object.create(null), webpackBaseConfig);
webMin.target = 'web';
webMin.output.filename = `[name]${PROJECT_WEB_MIN_EXT}`;
webMin.optimization.minimize = true;


/**
 * Node Build
 */
const node = _.defaultsDeep(Object.create(null), webpackBaseConfig);
node.target = 'node';
node.externals = [nodeExternals()];
node.optimization.minimize  = false;
node.optimization.minimizer = [];


module.exports = BUILD_TYPE === 'node'
  ? [node]
  : [web, webMin];
