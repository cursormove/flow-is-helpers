// @flow
const path        = require('upath');
const projectRoot = require('app-root-dir');


/**
 * Root Dir
 */
const ROOT_DIR /*: string */ = projectRoot.get();


/**
 * Project Specific
 */
const PROJECT_NAME         /*: string */ = 'flow-is-helpers';
const PROJECT_EXT          /*: string */ = '.js';
const PROJECT_NODE_EXT     /*: string */ = PROJECT_EXT;
const PROJECT_NODE_FILE    /*: string */ = `${PROJECT_NAME}${PROJECT_NODE_EXT}`;
const PROJECT_WEB_EXT      /*: string */ = `.web${PROJECT_EXT}`;
const PROJECT_WEB_FILE     /*: string */ = `${PROJECT_NAME}${PROJECT_WEB_EXT}`;
const PROJECT_WEB_MIN_EXT  /*: string */ = `.min.web${PROJECT_EXT}`;
const PROJECT_WEB_MIN_FILE /*: string */ = `${PROJECT_NAME}${PROJECT_WEB_MIN_EXT}`;


/**
 * Env Constants
 */
const NODE_ENV              /*: string */ = process.env.NODE_ENV || 'production';
const NODE_TEST_ENV        /*: boolean */ = NODE_ENV === 'test';
const NODE_DEVELOPMENT_ENV /*: boolean */ = NODE_ENV === 'development';
const NODE_PRODUCTION_ENV  /*: boolean */ = NODE_ENV === 'production';
const WEBPACK_MODE          /*: string */ = process.env.WEBPACK_MODE || 'production';
const BUILD_TYPE            /*: string */ = process.env.BUILD_TYPE || 'node';
const TEST_TYPE             /*: string */ = process.env.TEST_TYPE || 'node';
const TEST_TYPE_NODE       /*: boolean */ = TEST_TYPE === 'node';


/**
 * Root Files
 */
const BABEL_CONFIG_FILE      /*: string */ = 'babel.config.js';
const CHANGELOG_FILE         /*: string */ = 'CHANGELOG.md';
const CONTRIBUTING_FILE      /*: string */ = 'CONTRIBUTING.md';
const LICENSE_FILE           /*: string */ = 'LICENSE.txt';
const MOCHA_CONF_FILE        /*: string */ = 'mocha.conf.js';
const PACKAGE_JSON_FILE      /*: string */ = 'package.json';
const YARN_LOCK_FILE         /*: string */ = 'yarn.lock';
const BABEL_CONFIG_FILE_PATH /*: string */ = path.joinSafe(ROOT_DIR, BABEL_CONFIG_FILE);
const CHANGELOG_FILE_PATH    /*: string */ = path.joinSafe(ROOT_DIR, CHANGELOG_FILE);
const CONTRIBUTING_FILE_PATH /*: string */ = path.joinSafe(ROOT_DIR, CONTRIBUTING_FILE);
const LICENSE_FILE_PATH      /*: string */ = path.joinSafe(ROOT_DIR, LICENSE_FILE);
const MOCHA_CONF_FILE_PATH   /*: string */ = path.joinSafe(ROOT_DIR, MOCHA_CONF_FILE);
const NODE_MODULES_DIR_PATH  /*: string */ = path.joinSafe(ROOT_DIR, 'node_modules');
const PACKAGE_JSON_FILE_PATH /*: string */ = path.joinSafe(ROOT_DIR, PACKAGE_JSON_FILE);
const YARN_LOCK_FILE_PATH    /*: string */ = path.joinSafe(ROOT_DIR, YARN_LOCK_FILE);


/**
 * Library Src Dir's
 */
const SRC_ROOT_DIR   /*: string */ = 'lib';
const SRC_INDEX_FILE /*: string */ = 'index.js';
const SRC_ROOT_PATH  /*: string */ = path.joinSafe(ROOT_DIR, SRC_ROOT_DIR);
const SRC_INDEX_PATH /*: string */ = path.joinSafe(SRC_ROOT_PATH, SRC_INDEX_FILE);


/**
 * Library Dist Dir's
 */
const DIST_ROOT_DIR  /*: string */ = 'dist';
const DIST_ROOT_PATH /*: string */ = path.joinSafe(ROOT_DIR, DIST_ROOT_DIR);
const DIST_NODE_PATH /*: string */ = path.joinSafe(DIST_ROOT_PATH, PROJECT_NODE_FILE);


/**
 * Tests Dir's
 */
const TESTS_ROOT_DIR       /*: string */ = '__tests__';
const TESTS_ROOT_PATH      /*: string */ = path.joinSafe(ROOT_DIR, TESTS_ROOT_DIR);
const TESTS_INDEX_FILE     /*: string */ = 'tests.index.js';
const TESTS_INDEX_PATH     /*: string */ = path.joinSafe(TESTS_ROOT_PATH, TESTS_INDEX_FILE);
const TESTS_NODE_DIR       /*: string */ = 'node';
const TESTS_NODE_PATH      /*: string */ = path.joinSafe(TESTS_ROOT_PATH, TESTS_NODE_DIR);
const TESTS_NODE_PATH_GLOB /*: string */ = path.joinSafe(TESTS_NODE_PATH, '/**/*.js');


/**
 * Config Dir's
 */
const CONFIG_ROOT_DIR                 /*: string */ = '__config__';
const CONFIG_ROOT_PATH                /*: string */ = path.joinSafe(ROOT_DIR, CONFIG_ROOT_DIR);
const WEBPACK_INDEX_FILE              /*: string */ = 'webpack.config.index.js';
const WEBPACK_OPTIMIZATIONS_FILE      /*: string */ = 'webpack.config.optimizations.js';
const WEBPACK_PLUGINS_FILE            /*: string */ = 'webpack.config.plugins.js';
const WEBPACK_INDEX_FILE_PATH         /*: string */ = path.joinSafe(CONFIG_ROOT_PATH, WEBPACK_INDEX_FILE);
const WEBPACK_OPTIMIZATIONS_FILE_PATH /*: string */ = path.joinSafe(CONFIG_ROOT_PATH, WEBPACK_OPTIMIZATIONS_FILE);
const WEBPACK_PLUGINS_FILE_PATH       /*: string */ = path.joinSafe(CONFIG_ROOT_PATH, WEBPACK_PLUGINS_FILE);


/**
 * Exports
 */
module.exports = {
  // Root
  ROOT_DIR,
  // Project specific
  PROJECT_EXT,
  PROJECT_NAME,
  PROJECT_NODE_EXT,
  PROJECT_NODE_FILE,
  PROJECT_WEB_EXT,
  PROJECT_WEB_FILE,
  PROJECT_WEB_MIN_EXT,
  PROJECT_WEB_MIN_FILE,
  // Env Constants
  NODE_DEVELOPMENT_ENV,
  NODE_ENV,
  NODE_PRODUCTION_ENV,
  NODE_TEST_ENV,
  BUILD_TYPE,
  TEST_TYPE,
  TEST_TYPE_NODE,
  WEBPACK_MODE,
  // Root Files
  BABEL_CONFIG_FILE,
  BABEL_CONFIG_FILE_PATH,
  CHANGELOG_FILE,
  CHANGELOG_FILE_PATH,
  CONTRIBUTING_FILE,
  CONTRIBUTING_FILE_PATH,
  LICENSE_FILE,
  LICENSE_FILE_PATH,
  MOCHA_CONF_FILE,
  MOCHA_CONF_FILE_PATH,
  NODE_MODULES_DIR_PATH,
  PACKAGE_JSON_FILE,
  PACKAGE_JSON_FILE_PATH,
  YARN_LOCK_FILE_PATH,
  // Library Src Dir's
  SRC_INDEX_FILE,
  SRC_INDEX_PATH,
  SRC_ROOT_DIR,
  SRC_ROOT_PATH,
  // Library Dist Dir's
  DIST_NODE_PATH,
  DIST_ROOT_DIR,
  DIST_ROOT_PATH,
  // Tests Dir's
  TESTS_INDEX_FILE,
  TESTS_INDEX_PATH,
  TESTS_NODE_DIR,
  TESTS_NODE_PATH,
  TESTS_NODE_PATH_GLOB,
  TESTS_ROOT_DIR,
  TESTS_ROOT_PATH,
  // Config Dir's
  CONFIG_ROOT_DIR,
  CONFIG_ROOT_PATH,
  WEBPACK_INDEX_FILE,
  WEBPACK_INDEX_FILE_PATH,
  WEBPACK_OPTIMIZATIONS_FILE,
  WEBPACK_OPTIMIZATIONS_FILE_PATH,
  WEBPACK_PLUGINS_FILE,
  WEBPACK_PLUGINS_FILE_PATH,
};
