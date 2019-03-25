/**
 * Export Mocha config to be consumed via 🠲 __tests__/tests.node.js
 * @docs: https://mochajs.org/api/mocha
 * @return {obj} 🠲 Config
 */
module.exports = {
  // List of posible options
  // https://mochajs.org/api/mocha

  // Propagate uncaught errors?
  // allowUncaught 🠲 boolean <optional>

  // Force done callback or promise?
  // asyncOnly 🠲 boolean <optional>

  // Bail after first test failure?
  // bail 🠲 boolean <optional>
  bail: true,

  // Delay root suite execution?
  // delay 🠲 boolean <optional>

  // Enable timeouts?
  // enableTimeouts 🠲 boolean <optional>

  // Test filter given string.
  // fgrep 🠲 string  <optional>

  // Tests marked only fail the suite?
  // forbidOnly 🠲 boolean <optional>

  // Pending tests fail the suite?
  // forbidPending 🠲 boolean <optional>

  // Full stacktrace upon failure?
  // fullStackTrace 🠲 boolean <optional>
  fullStackTrace: true,

  // Variables expected in global scope.
  // globals 🠲 Array.<string>  <optional>
  // globals: [],

  // Test filter given regular expression.
  // grep 🠲 RegExp | string <optional>

  // Enable desktop notifications?
  // growl 🠲 boolean <optional>

  // Suppress diffs from failures?
  // hideDiff 🠲 boolean <optional>

  // Ignore global leaks?
  // ignoreLeaks 🠲 boolean <optional>

  // Invert test filter matches?
  // invert 🠲 boolean <optional>

  // Disable syntax highlighting?
  // noHighlighting 🠲 boolean <optional>

  // Reporter name.
  // reporter 🠲 string  <optional>
  reporter: 'list',

  // Reporter settings object.
  // reporterOptions 🠲 Object  <optional>

  // Number of times to retry failed tests.
  // retries 🠲 number  <optional>

  // Slow threshold value.
  // slow 🠲 number  <optional>

  // Timeout threshold value.
  // timeout 🠲 number | string <optional>

  // Interface name.
  // ui 🠲 string  <optional>

  // Color TTY output from reporter?
  // useColors 🠲 boolean <optional>
  useColors: true,

  // Use inline diffs?
  // useInlineDiffs 🠲 boolean <optional>
};
