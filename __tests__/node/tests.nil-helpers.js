const {
  assert,
} = require('chai');
const {
  isNil,
  isNotNil,
} = require(global.DIST_PATH);


describe('Nil Helpers', function () {
  it('isNil() fn 🠲 should return `true` for undefined or null', function () {
    assert.strictEqual(isNil(null), true);
    assert.strictEqual(isNil(), true);
    assert.strictEqual(isNil(undefined), true);
    assert.strictEqual(isNil(NaN), false);
    assert.strictEqual(isNil(false), false);
    assert.strictEqual(isNil(true), false);
    assert.strictEqual(isNil(Array.isArray), false);
    assert.strictEqual(isNil({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isNil(1), false);
    assert.strictEqual(isNil(/x/), false);
    assert.strictEqual(isNil('a'), false);
    assert.strictEqual(isNil(Symbol('foo')), false);
  });

  it('isNotNil() fn 🠲 should return `true` anything but undefined or null', function () {
    assert.strictEqual(isNotNil(null), false);
    assert.strictEqual(isNotNil(), false);
    assert.strictEqual(isNotNil(undefined), false);
    assert.strictEqual(isNotNil(NaN), true);
    assert.strictEqual(isNotNil(false), true);
    assert.strictEqual(isNotNil(true), true);
    assert.strictEqual(isNotNil(Array.isArray), true);
    assert.strictEqual(isNotNil({
      0: 1,
      length: 1,
    }), true);
    assert.strictEqual(isNotNil(1), true);
    assert.strictEqual(isNotNil(/x/), true);
    assert.strictEqual(isNotNil('a'), true);
    assert.strictEqual(isNotNil(Symbol('foo')), true);
  });
});

