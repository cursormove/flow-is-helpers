const path           = require('upath');
const appRoot        = require('app-root-dir');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PATHS          = require(path.joinSafe(appRoot.get(), 'paths.js'));

/**
 * Constants
 */
const {
  NODE_DEVELOPMENT_ENV,
  NODE_PRODUCTION_ENV,
} = PATHS;


/**
 * Optimization Config
 * @docs: https://webpack.js.org/configuration/optimization
 */
const optimization = Object.create(null);

/**
 * Developmnet Optimizations
 */
if (NODE_DEVELOPMENT_ENV) {
  // Tell webpack to minimize the bundle using the UglifyjsWebpackPlugin.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-minimize
  optimization.minimize = false;

  // Tells webpack to use readable module identifiers for better debugging
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-namedmodules
  optimization.namedModules = true;

  // Tells webpack to use readable chunk identifiers for better debugging.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-namedchunks
  optimization.namedChunks = true;
}
/**
 * Production Optimizations
 */
if (NODE_PRODUCTION_ENV) {
  // Tells webpack to detect and remove modules from chunks when these modules
  // are already included in all parents.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-removeavailablemodules
  optimization.removeAvailableModules = true;

  // Tells webpack to detect and remove chunks which are empty
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-removeemptychunks
  optimization.removeEmptyChunks = true;

  // Tells webpack to merge chunks which contain the same modules.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-mergeduplicatechunks
  optimization.mergeDuplicateChunks = true;

  // Tells webpack to determine and flag chunks which are subsets of other chunks
  // in a way that subsets don’t have to be loaded when the bigger chunk has been already loaded.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-flagincludedchunks
  optimization.flagIncludedChunks = true;

  // Tells webpack to figure out an order of modules which will result in the smallest initial bundle.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-occurrenceorder
  optimization.mergeDuplicateChunks = true;

  // Tells webpack to figure out which exports are provided by modules to generate
  // more efficient code for `export * from ...`
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-providedexports
  optimization.providedExports = true;

  // Tells webpack to determine used exports for each module.
  // This depends on `optimization.providedExports`. Information collected by
  // `optimization.usedExports` is used by other optimizations or code generation
  // i.e. exports are not generated for unused exports, export names are mangled
  // to single char identifiers when all usages are compatible. Dead code elimination
  // in minimizers will benefit from this and can remove unused exports.
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-usedexports
  optimization.usedExports = true;

  // Tells webpack to find segments of the module graph which can be safely concatenated
  // into a single module. Depends on `optimization.providedExports` and
  // `optimization.usedExports.`
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-concatenatemodules
  optimization.providedExports = true;

  // SplitChunksPlugin (v3 === CommonsChunkPlugin)
  // There's a shit load of configurations when it comes to split chunks and it
  // all depends on your setup. I highly recommend you read the docs on this one
  // if you want to "optimize" how chunks are handled/split
  // @docs: https://webpack.js.org/plugins/split-chunks-plugin/
  optimization.splitChunks = {
    // Specifies the delimiter to use for the generated names
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-automaticnamedelimiter
    automaticNameDelimiter: '_',
    // Indicates which chunks will be selected for optimization
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-chunks
    chunks: 'async',
    // Minimum size, in bytes, for a chunk to be generated
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-minsize
    minSize: 30000,
    // Intended to be used with HTTP/2 and long term caching
    // @note: I recommend you read the docs if you plan on changing value
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-maxsize
    maxSize: 0,
    // Minimum number of chunks that must share a module before splitting.
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-minchunks
    minChunks: 1,
    // Maximum number of parallel requests when on-demand loading.
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-maxasyncrequests
    maxAsyncRequests: 5,
    // Maximum number of parallel requests at an entry point.
    // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-maxinitialrequests
    maxInitialRequests: 3,
    // Automatically generate a name based on chunks and cache group key.
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-name
    name: true,
    // Cache groups can inherit and/or override any options from splitChunks.*;
    // but test, priority and reuseExistingChunk can only be configured on
    // cache group level.
    // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups
    cacheGroups: {
      vendors: {
        // A module can belong to multiple cache groups. The optimization will
        // prefer the cache group with a higher priority
        // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups-priority
        priority: -10,
        // Controls which modules are selected by this cache group. Omitting it selects
        // all modules. It can match the absolute module resource path or chunk names.
        // When a chunk name is matched, all modules in the chunk are selected.
        // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups-test
        test: /[\\/]node_modules[\\/]/,
      },
      default: {
        minChunks: 2,
        priority: -20,
        // If the current chunk contains modules already split out from the
        // main bundle, it will be reused instead of a new one being generated.
        // This can impact the resulting file name of the chunk
        // @docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-cachegroups-reuseexistingchunk
        reuseExistingChunk: true,
      }
    }
  };

  // Tell webpack to minimize the bundle using the UglifyjsWebpackPlugin.
  // @note: Using Bable minfiy defined in babel.config.js
  // @docs: https://webpack.js.org/configuration/optimization/#optimization-minimize
  // @docs: https://github.com/webpack-contrib/uglifyjs-webpack-plugin#options
  optimization.minimizer = [new UglifyJsPlugin()];
}

module.exports = optimization;
