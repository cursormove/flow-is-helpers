const _ = require('lodash');
const {
  assert,
} = require('chai');
const {
  isIterable,
} = require(global.DIST_PATH);

/** Used to test generator functions. */
const generator = _.attempt(function () {
  return function*(i){
    yield i;
    yield i + 2;
  };
});


describe('Misc Helpers', function () {
  it('isIterable() fn 🠲 should return `true` for empty string', function () {
    assert.strictEqual(isIterable(''), true);
    // assert.strictEqual(isIterable(String()), false);
    // assert.strictEqual(isIterable(String('')), false);
    // assert.strictEqual(isIterable(String('a')), true);
    // assert.strictEqual(isIterable('ab'), true);
    // assert.strictEqual(isIterable(generator(2)), true);
    // assert.strictEqual(isIterable(new Uint8Array([0x00, 0xff])), true);
    // assert.strictEqual(isIterable(new Map([['a', 1], ['b', 2], ['c', 3]])), true);
    // assert.strictEqual(isIterable(new Set([1, 1, 2, 2, 3, 3])), true);
    // (function () {
    //   assert.strictEqual(isIterable(arguments), true);
    // })(1, 2, 3);
    // assert.strictEqual(isIterable({
    //   0: 1,
    //   length: 1,
    // }), false);
    // assert.strictEqual(isIterable(Object), false);
    // assert.strictEqual(isIterable({}), false);
    // assert.strictEqual(isIterable(1), false);
    // assert.strictEqual(isIterable(0), false);
    // assert.strictEqual(isIterable(NaN), false);
    // assert.strictEqual(isIterable(), false);
    // assert.strictEqual(isIterable(undefined), false);
    // assert.strictEqual(isIterable(false), false);
    // assert.strictEqual(isIterable(true), false);
    // assert.strictEqual(isIterable(Array.isArray), false);
    // assert.strictEqual(isIterable(/x/), false);
    // assert.strictEqual(isIterable(Symbol('foo')), false);
  });
});

