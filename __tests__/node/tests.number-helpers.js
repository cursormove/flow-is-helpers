const {
  assert,
} = require('chai');
const {
  isNan,
  isInfinity,
} = require(global.DIST_PATH);


describe('Number Helpers', function () {
  it('isNan() fn 🠲 should return `true` for NaN', function () {
    assert.strictEqual(isNan(NaN), true);
    assert.strictEqual(isNan(1), false);
    assert.strictEqual(isNan(0), false);
    assert.strictEqual(isNan(Number(2)), false);
    assert.strictEqual(isNan(), false);
    assert.strictEqual(isNan(undefined), false);
    assert.strictEqual(isNan(false), false);
    assert.strictEqual(isNan(true), false);
    assert.strictEqual(isNan(Array.isArray), false);
    assert.strictEqual(isNan({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isNan(/x/), false);
    assert.strictEqual(isNan('a'), false);
    assert.strictEqual(isNan(Symbol('foo')), false);
  });

  it('isInfinity() fn 🠲 should return `true` for Infinity', function () {
    assert.strictEqual(isInfinity(Number.NEGATIVE_INFINITY), true);
    assert.strictEqual(isInfinity(Number.POSITIVE_INFINITY), true);
    assert.strictEqual(isInfinity(NaN), false);
    assert.strictEqual(isInfinity(1), false);
    assert.strictEqual(isInfinity(0), false);
    assert.strictEqual(isInfinity(Number(2)), false);
    assert.strictEqual(isInfinity(), false);
    assert.strictEqual(isInfinity(undefined), false);
    assert.strictEqual(isInfinity(false), false);
    assert.strictEqual(isInfinity(true), false);
    assert.strictEqual(isInfinity(Array.isArray), false);
    assert.strictEqual(isInfinity({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isInfinity(/x/), false);
    assert.strictEqual(isInfinity('a'), false);
    assert.strictEqual(isInfinity(Symbol('foo')), false);
  });
});

