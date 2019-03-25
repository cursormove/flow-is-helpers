const fs          = require('fs-extra');
const path        = require('upath');
const _           = require('lodash');
const projectRoot = require('app-root-dir');
const glob        = require('glob-all');
const Mocha       = require('mocha');
const PATHS       = require(path.joinSafe(projectRoot.get(), 'paths.js'));
const {
  throwErrorAndExit,
} = require('./tests.helpers.js');


/**
 * Constants
 */
const {
  DIST_NODE_PATH,
  TESTS_NODE_PATH_GLOB,
  MOCHA_CONF_FILE,
} = PATHS;


/**
 * Node test's
 * @Location: __tests__/node/tests.node.js
 */
const runNodeTests = function runNodeTests () {
  // Get context (file-path) of all node tests
  const testDirFilesContext = glob.sync([TESTS_NODE_PATH_GLOB]) || [];

  // Throw error and exit if no test found
  if (!testDirFilesContext.length) {
    return throwErrorAndExit(`
      TESTS:::ERROR 🠲 No "Node" tests found in "TESTS_NODE_PATH": ${TESTS_NODE_PATH_GLOB}
    `);
  }

  let mochaOptions = {};
  const mochaConfigExists = fs.existsSync(MOCHA_CONF_FILE);
  if (mochaConfigExists) {
    // Import mocha config file to use with Mocha instance
    const mochaConfig = require(MOCHA_CONF_FILE);

    // Check and merge root config if correct format
    if (_.isPlainObject(mochaConfig)) {
      mochaOptions = _.merge(mochaOptions, mochaConfig);
    }else {
      return throwErrorAndExit(`
        TESTS:::ERROR 🠲 Mocha config "./mocha.conf.js" needs to export an Object not a: ${typeof mochaConfig}
      `);
    }
  }

  // Set "global" dist path to be ref in tests
  global.DIST_PATH = DIST_NODE_PATH;

  // Config mocha instance
  const mocha = new Mocha(mochaOptions);

  // Add files to test
  _.forEach(testDirFilesContext, function (testPath) {
    mocha.addFile(testPath);
  });

  // Run Mocha tests
  mocha.run(function (failures){
    // exit with non-zero status if there were failures
    process.exitCode = failures ? -1 : 0;
  });
};
runNodeTests();
