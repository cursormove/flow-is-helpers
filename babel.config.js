const _ = require('lodash');

/**
 * If Babel finds other .babelrc files while transpiling files in
 * subfolder, it will merge the configuration together. This can lead
 * to undefined behaviors thats why we use 'babel.config.js'
 * @note -> Can still extend other .bablerc's files - check the docs
 * @docs -> https://babeljs.io/docs/en/next/babelconfigjs
 */
const babelConfig = function babelConfig (api) {
  // Babel cache
  // @docs: https://babeljs.io/docs/en/next/config-files#apicache
  api.cache.invalidate(() => process.env.NODE_ENV);

  // Node/Babel env
  // @docs: https://babeljs.io/docs/en/next/config-files#apienv
  const BABEL_ENV = _.isString(api)
    ? api || 'production'
    : api.env() || 'production';
  const IS_DEV = BABEL_ENV === 'development';
  // Build Type 🠲 browser || node
  const BUILD_TYPE = process.env.BUILD_TYPE || 'node';


  /**
   * Enviroment specific presets/plugins
   * @note: depending on BUILD_TYPE merges specific config
   * @type {Object}
   */
  const env = {
    /**
     * Browser Env
     */
    browser: {
      presets: [
        // A Babel preset for each environment.
        // @docs: https://babeljs.io/docs/en/next/babel-preset-env.html
        ['@babel/preset-env', {
          modules: 'umd',
          shippedProposals: true,
          useBuiltIns: 'usage',
          targets: {
            browsers: [
              '>0.2%',
              'not dead',
              'not ie <= 11',
              'not op_mini all',
            ],
          }
        }],
      ]
    },
    /**
     * Node Env
     */
    node: {
      presets: [
        // A Babel preset for each environment.
        // @docs: https://babeljs.io/docs/en/next/babel-preset-env.html
        ['@babel/preset-env', {
          modules: false,
          shippedProposals: true,
          useBuiltIns: 'usage',
          targets: {
            node: '10.7.0',
          }
        }],
      ]
    },
  };


  /**
   * Config Babel env plugins/presets
   * @todo: Maybe throw warning if not found?
   */
  let envPresets = _.get(env, `${BUILD_TYPE}.presets`) || [];
  let envPlugins = _.get(env, `${BUILD_TYPE}.plugins`) || [];


  /**
   * Common babel presets
   * @type {Array}
   */
  const presetsCommon = [];


  /**
   * Common babel plugins
   * @type Array<String | Array>
   */
  const pluginsCommon = [
    // Allow parsing of import()
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html
    '@babel/plugin-syntax-dynamic-import',

    // Allow parsing of import.meta
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-import-meta.html
    '@babel/plugin-syntax-import-meta',

    // Escape U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR in JS strings
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-json-strings.html
    '@babel/plugin-proposal-json-strings',

    // Compile class and object decorators to ES5
    // @note: Must be declared before '@babel/plugin-proposal-class-properties'
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],

    // Plugin transforms static class properties as well as properties
    // declared with the property initializer syntax
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],

    // Compile function bind operator to ES5
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-function-bind.html
    '@babel/plugin-proposal-function-bind',

    // Compile optional catch bindings
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-catch-binding.html
    '@babel/plugin-proposal-optional-catch-binding',

    // Transform optional chaining operators into a series of nil checks
    // @note: Might want to replace with the package 'idx'
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining.html
    '@babel/plugin-proposal-optional-chaining',

    // Allow parsing of async generator functions
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-async-generators.html
    '@babel/plugin-syntax-async-generators',

    // Allow parsing of do expressions
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-do-expressions.html
    '@babel/plugin-syntax-do-expressions',

    // Allow parsing of object rest/spread
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-object-rest-spread.html
    '@babel/plugin-syntax-object-rest-spread',

    // Allow parsing of optional catch bindings
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-optional-catch-binding.html
    '@babel/plugin-syntax-optional-catch-binding',

    // Apply ES2015 function.name semantics to all functions
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-function-name.html
    '@babel/plugin-transform-function-name',

    // Compile ES2015 shorthand properties to ES5
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-shorthand-properties.html
    '@babel/plugin-transform-shorthand-properties',

    // Turn async functions into ES2015 generators
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-async-to-generator.html
    '@babel/plugin-transform-async-to-generator',

    // Allow parsing of the flow syntax
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-syntax-flow.html
    '@babel/plugin-syntax-flow',

    // Turn flow type annotations into comments
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-flow-comments.html
    '@babel/plugin-transform-flow-comments',

    // Transforms ES2015 modules to CommonJS
    // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-modules-commonjs.html
    ['@babel/plugin-transform-modules-commonjs', {
      // Do not lazy-initialize local `./foo` imports, but lazy-init `foo` dependencies.
      lazy: true,
    }],

    // Cherry-picks lodash modules - works with `lodash-webpack-plugin`.
    // This plugin also works with `recompose` and a few other libs
    // @docs: https://github.com/lodash/babel-plugin-lodash
    ['lodash', {
      id: [
        'lodash',
      ]
    }],

    // Plugin can add a new resolver for your modules when compiling your code
    // using Babel. Allows you to add new 'root' directories that contain your
    // modules. It also allows for custom alias for directories,
    // specific files, or even other npm modules.
    // @docs: https://github.com/tleunen/babel-plugin-module-resolver#readme
    ['module-resolver', {
      root: ['.'],
      alias: {
        lib : './lib',
        util : './lib/util',
      }
    }],

    // This plugin allows all the helpers to reference the module babel-runtime
    // to avoid duplication across your compiled output.
    // @note: Unlike the production version this version make debugging a bit easier
    // @docs: https://babeljs.io/docs/en/babel-plugin-transform-runtime
    ['@babel/plugin-transform-runtime', {
      helpers: true,
      regenerator: true,
      corejs: 2,
      useESModules: false,
    }],
  ];


  /**
   * Development env plugins/presets
   */
  if (IS_DEV) {
    // development presets (none)
    envPresets = _.concat(envPresets, []);
    // development plugins
    envPlugins = _.concat(envPlugins, []);
  }
  /**
   * Production env plugins/presets
   */
  if (!IS_DEV) {
    // production presets
    envPresets = _.concat(envPresets, []);

    // to be minified
    if (process.env.BABEL_MINIFY) {
      envPresets =  _.concat(envPresets, [
        // An ES6+ aware minifier based on the Babel toolchain
        // @note:
        //    + Current pipeline
        //      - ES2015+ code -> BabelMinify -> Minified ES2015+ Code
        //      - Might want to enable Webpack uglify for multiple passes
        //      - @ref: https://github.com/babel/minify/issues/61
        // @docs: https://babeljs.io/docs/en/babel-preset-minify
        ['minify', {
          keepClassName: true,
          keepFnName: true,
          mangle: false,
          mergeVars: false,
          removeUndefined: false,
          tdz: true,
        }],
      ]);
    }

    // production plugins
    envPlugins = _.concat(envPlugins, [
      // Compile ES2015 destructuring to ES5
      // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-destructuring.html
      '@babel/plugin-transform-destructuring',

      // Compile ES2015 default and rest parameters to ES5
      // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-parameters.html
      '@babel/plugin-transform-parameters',

      // Compile ES5 property mutator shorthand syntax to Object.defineProperty
      // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-property-mutators.html
      '@babel/plugin-transform-property-mutators',

      // Compile ES2015 template literals to ES5
      // @docs: https://babeljs.io/docs/en/next/babel-plugin-transform-template-literals.html
      '@babel/plugin-transform-template-literals',

      // Removes flow types
      // @docs: https://babeljs.io/docs/en/babel-plugin-transform-flow-strip-types
      '@babel/plugin-transform-flow-strip-types',

      // Inline's environment variables
      // @docs: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-inline-environment-variables
      ['transform-inline-environment-variables', {
        include: [
          'NODE_ENV',
          'WEBPACK_MODE'
        ]
      }],
    ]);
  }


  /**
   * Config based on env and return
   */
  const presets = _.concat(presetsCommon, envPresets);
  const plugins = _.concat(pluginsCommon, envPlugins);


  // ->
  return {
    presets,
    plugins,
  };
};

module.exports = babelConfig;
