const del     = require('del');
const path    = require('upath');
const appRoot = require('app-root-dir');
const PATHS   = require(path.joinSafe(appRoot.get(), 'paths.js'));

/**
 * Constants
 */
const {
  DIST_ROOT_PATH,
  NODE_MODULES_DIR_PATH,
  YARN_LOCK_FILE_PATH,
} = PATHS;

/**
 * Deletes Dev dir (all files)
 */
const deleteDevDir = function () {
  const filesToDel = !process.env.REINSTALL
    ? [DIST_ROOT_PATH]
    : [NODE_MODULES_DIR_PATH, YARN_LOCK_FILE_PATH];
  const deleted = del.sync(filesToDel);
  if (deleted && deleted.length) {
    console.log('SCRIPTS:::CLEAN 🠲 Deleted files and folders:\n', deleted.join('\n'));
  }
};
deleteDevDir();
