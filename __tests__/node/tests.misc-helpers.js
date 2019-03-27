const _ = require('lodash');
const {
  assert,
} = require('chai');
const {
  isAction,
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
  it('isIterable() fn', function () {
    assert.strictEqual(isIterable('abc'), true);
    assert.strictEqual(isIterable(new Map([[1, 'a'], [2, 'b'], [3, 'c']])), true);
    const myObj = {};
    assert.strictEqual(isIterable(new WeakMap([[{}, 'a'], [myObj, 'b'], [{}, 'c']]).get(myObj)), true);
    assert.strictEqual(isIterable([...'abc']), true);
    assert.strictEqual(isIterable(generator(2)), true);
    assert.strictEqual(isIterable(new Uint8Array([0x00, 0xff])), true);
    (function () {
      assert.strictEqual(isIterable(arguments), true);
    })(1, 2, 3);
    assert.strictEqual(isIterable({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isIterable(Object), false);
    assert.strictEqual(isIterable({}), false);
    assert.strictEqual(isIterable(1), false);
    assert.strictEqual(isIterable(0), false);
    assert.strictEqual(isIterable(NaN), false);
    assert.strictEqual(isIterable(), false);
    assert.strictEqual(isIterable(undefined), false);
    assert.strictEqual(isIterable(false), false);
    assert.strictEqual(isIterable(true), false);
    assert.strictEqual(isIterable(Array.isArray), false);
    assert.strictEqual(isIterable(/x/), false);
    assert.strictEqual(isIterable(Symbol('foo')), false);
  });

  it('isAction() fn', function () {
    assert.strictEqual(isAction({type: 'ACTION'}), true);
    assert.strictEqual(isAction({type: 'ACTION', payload: true}), true);
    assert.strictEqual(isAction({payload: true}), false);
  });
});

