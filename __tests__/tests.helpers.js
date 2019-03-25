const fs          = require('fs-extra');
const colur       = require('colur');
const _           = require('lodash');
const path        = require('upath');
const projectRoot = require('app-root-dir');


/**
 * Constants
 */
const {
  WEBPACK_INDEX_FILE_PATH,
  TEST_TYPE_NODE,
} = require(path.joinSafe(projectRoot.get(), 'paths.js'));


/**
 * Error/exit helper
 * @param  {str} msg -> error message
 * @return {exit}
 */
const throwErrorAndExit = function (msg) {
  colur(`TESTS:::ERROR 🠲 ${_.trim(msg)}   🠲 EXITING.`, {
    error: true,
  });
  // gracefully exit
  // @docs: https://nodejs.org/api/process.html#process_process_exit_code
  process.exitCode = 1;
  return;
};


/**
 * Checks and gets webpack config and it's target if specified
 * @method hasWebpackTarget
 * @param  {obj}         opts -> {target: node | web}
 * @return {---}              -> Throws err, or returns webpack config
 */
const hasWebpackTarget = function (opts = {}) {
  // Set options
  const options = _.defaults(opts, {
    target: TEST_TYPE_NODE ? 'node' : 'web',
  });
  const target = options.target;

  // Make sure that the webpack index file exists
  const webpackIndexFileExists = fs.existsSync(WEBPACK_INDEX_FILE_PATH);
  if (!webpackIndexFileExists) {
    return throwErrorAndExit(`
      TESTS:::ERROR 🠲 Webpack config index file not found. Needed file location: "${WEBPACK_INDEX_FILE_PATH}".
    `);
  }

  // Grab webpack config
  const webpackConfig = require(WEBPACK_INDEX_FILE_PATH);

  // Make sure webpack has a web target
  if (_.isArray(webpackConfig)) {
    const webpackTargetConfigs = _.filter(webpackConfig, function (config) {
      if (_.has(config, 'target') && config.target === target) {
        return true;
      }
    });
    // Throw error if no web/node target found
    if (!webpackTargetConfigs || !webpackTargetConfigs.length) {
      return throwErrorAndExit(`
        TESTS:::ERROR 🠲 No "${target}" target found in webpack configuration.
      `);
    }
    return webpackTargetConfigs;
  }else if (_.isPlainObject(webpackConfig)) {
    if (!_.has(webpackConfig, 'target') || webpackConfig.target !== target) {
      return throwErrorAndExit(`
        TESTS:::ERROR 🠲 No "${target}" target found in webpack configuration.
      `);
    }
    return webpackConfig;
  } else {
    return throwErrorAndExit(`
      TESTS:::ERROR 🠲 Webpack configuration format error. Needs to be an Object or an Array of Objects.
    `);
  }
};



module.exports = {
  throwErrorAndExit,
  hasWebpackTarget,
};
