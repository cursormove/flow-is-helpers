const {
  assert,
} = require('chai');
const {
  isArray,
  isEmptyArray,
  isNonEmptyArray,
} = require(global.DIST_PATH);


describe('Array Helpers', function () {
  it('isArray() fn 🠲 should return `true` for arrays', function () {
    assert.strictEqual(isArray([1, 2, 3]), true);
  });
  it('isArray() fn 🠲 should return `flase` for non-arrays', function () {
    assert.strictEqual(isArray(true), false);
    assert.strictEqual(isArray(new Date), false);
    assert.strictEqual(isArray(new Error), false);
    assert.strictEqual(isArray({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isArray(1), false);
    assert.strictEqual(isArray(/x/), false);
    assert.strictEqual(isArray('a'), false);
    assert.strictEqual(isArray(Symbol), false);
  });


  it('isEmptyArray() fn 🠲 should return `true` for empty arrays', function () {
    assert.strictEqual(isEmptyArray([]), true);
    assert.strictEqual(isEmptyArray(new Array()), true);
    assert.strictEqual(isEmptyArray([1, 2, 'a']), false);
    assert.strictEqual(isEmptyArray(new Array(1, 2, 'a')), false);
  });


  it('isNonEmptyArray() fn 🠲 should return `false` for empty arrays', function () {
    assert.strictEqual(isNonEmptyArray([]), false);
    assert.strictEqual(isNonEmptyArray(new Array()), false);
    assert.strictEqual(isNonEmptyArray([1, 2, 'a']), true);
    assert.strictEqual(isNonEmptyArray(new Array(1, 2, 'a')), true);
  });
});

