const {
  assert,
} = require('chai');
const {
  isEmptyString,
  isNonEmptyString,
} = require(global.DIST_PATH);


describe('String Helpers', function () {
  it('isEmptyString() fn 🠲 should return `true` for empty string', function () {
    assert.strictEqual(isEmptyString(''), true);
    assert.strictEqual(isEmptyString(String()), true);
    assert.strictEqual(isEmptyString(String('')), true);
    assert.strictEqual(isEmptyString(String('a')), false);
    assert.strictEqual(isEmptyString('a'), false);
    assert.strictEqual(isEmptyString({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isEmptyString(Object), false);
    assert.strictEqual(isEmptyString({}), false);
    assert.strictEqual(isEmptyString(1), false);
    assert.strictEqual(isEmptyString(0), false);
    assert.strictEqual(isEmptyString(NaN), false);
    assert.strictEqual(isEmptyString(), false);
    assert.strictEqual(isEmptyString(undefined), false);
    assert.strictEqual(isEmptyString(false), false);
    assert.strictEqual(isEmptyString(true), false);
    assert.strictEqual(isEmptyString(Array.isArray), false);
    assert.strictEqual(isEmptyString(/x/), false);
    assert.strictEqual(isEmptyString([1, 2, 'a']), false);
    assert.strictEqual(isEmptyString(Symbol('foo')), false);
  });

  it('isNonEmptyString() fn 🠲 should return `true` for non-empty string', function () {
    assert.strictEqual(isNonEmptyString(''), false);
    assert.strictEqual(isNonEmptyString(String()), false);
    assert.strictEqual(isNonEmptyString(String('')), false);
    assert.strictEqual(isNonEmptyString(String('a')), true);
    assert.strictEqual(isNonEmptyString('a'), true);
    assert.strictEqual(isNonEmptyString({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isNonEmptyString(Object), false);
    assert.strictEqual(isNonEmptyString({}), false);
    assert.strictEqual(isNonEmptyString(1), false);
    assert.strictEqual(isNonEmptyString(0), false);
    assert.strictEqual(isNonEmptyString(NaN), false);
    assert.strictEqual(isNonEmptyString(), false);
    assert.strictEqual(isNonEmptyString(undefined), false);
    assert.strictEqual(isNonEmptyString(false), false);
    assert.strictEqual(isNonEmptyString(true), false);
    assert.strictEqual(isNonEmptyString(Array.isArray), false);
    assert.strictEqual(isNonEmptyString(/x/), false);
    assert.strictEqual(isNonEmptyString([1, 2, 'a']), false);
    assert.strictEqual(isNonEmptyString(Symbol('foo')), false);
  });
});

