const fs                   = require('fs');
const path                 = require('upath');
const webpack              = require('webpack');
const _                    = require('lodash');
const appRoot              = require('app-root-dir');
const ProgressBarPlugin    = require('progress-bar-webpack-plugin');
const FlowPlugin           = require('flow-webpack-plugin');
const HardSourcePlugin     = require('hard-source-webpack-plugin');
const LodashModulePlugin   = require('lodash-webpack-plugin');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;
const PATHS                = require(path.joinSafe(appRoot.get(), 'paths.js'));

/**
 * Constants
 */
const {
  LICENSE_FILE_PATH,
  NODE_PRODUCTION_ENV,
  NODE_DEVELOPMENT_ENV,
} = PATHS;


/**
 * Common plugins
 */
let plugins = [
  // Create smaller Lodash builds by replacing feature sets of modules with noop,
  // identity, or simpler alternatives.
  // @docs: https://github.com/lodash/lodash-webpack-plugin
  new LodashModulePlugin,
  // Nice little build progress bar
  // @docs: https://github.com/clessg/progress-bar-webpack-plugin
  new ProgressBarPlugin({
    format: 'Build [:bar] :percent (:elapsed seconds)',
    clear: false,
  }),
];
/**
 * Development plugins
 */
if (NODE_DEVELOPMENT_ENV) {
  plugins = _.concat(plugins, [
    // A webpack plugin allowing to call Flow type checker during each webpack compilation.
    // @docs: https://github.com/happylynx/flow-webpack-plugin
    new FlowPlugin(),
    // A webpack plugin that provide an intermediate caching step for modules
    // @note: For the speeds
    // @docs: https://github.com/mzgoddard/hard-source-webpack-plugin
    new HardSourcePlugin({
      // Either an absolute path or relative to webpack's options.context.
      cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
      // Either a string of object hash function given a webpack config.
      // configHash: function (webpackConfig) {
      //   // node-object-hash on npm can be used to build this.
      //   return require('node-object-hash')({sort: false}).hash(webpackConfig);
      // },
      // Either false, a string, an object, or a project hashing function.
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      },
      // An object.
      info: {
        // 'none' or 'test'.
        mode: 'none',
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: 'debug',
      },
      // Clean up large, old caches automatically.
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024
      },
    }),
  ]);
}
/**
 * Production plugins
 */
if (NODE_PRODUCTION_ENV) {
  plugins = _.concat(plugins, [
    // Cause hashes to be based on the relative path of the module,
    // generating a four character string as the module id
    // @docs: https://webpack.js.org/plugins/hashed-module-ids-plugin/
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    // Appends the License into the library builds
    new webpack.BannerPlugin(fs.readFileSync(LICENSE_FILE_PATH, 'utf8')),
    // Manage third-party license compliance in your webpack build.
    // @docs: https://github.com/xz64/license-webpack-plugin
    new LicenseWebpackPlugin({
      addBanner: true,
      renderBanner: (filename, modules) => {
        let banner = '/*!\nUsed external libraries:\n\n';
        _.forEach(modules, function (lib) {
          banner += `  + ${_.get(lib, 'packageJson.name')} 🠲 v${_.get(lib, 'packageJson.version')} 🠲 ${_.get(lib, 'licenseId')}\n`;
        });
        banner += `\nFull context of each license can be found at: ${filename}\n*/\n\n`;
        return banner;
      }
    }),
    // Appends eslint-disable
    new webpack.BannerPlugin({
      banner: '\n\n/* eslint-disable */\n\n',
      raw: true
    }),
  ]);
}

module.exports = plugins;
