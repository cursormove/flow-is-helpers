const {
  assert,
} = require('chai');
const {
  isObject,
  isPlainObject,
  isObjectLike,
  isEmptyObject,
  isNonEmptyObject,
  isFrozen,
} = require(global.DIST_PATH);


describe('Object Helpers', function () {
  it('isObject() fn 🠲 should return `true` for object', function () {
    assert.strictEqual(isObject({
      0: 1,
      length: 1,
    }), true);
    assert.strictEqual(isObject(Object), true);
    assert.strictEqual(isObject({}), true);
    assert.strictEqual(isObject(1), false);
    assert.strictEqual(isObject(0), false);
    assert.strictEqual(isObject(NaN), false);
    assert.strictEqual(isObject(), false);
    assert.strictEqual(isObject(undefined), false);
    assert.strictEqual(isObject(false), false);
    assert.strictEqual(isObject(true), false);
    assert.strictEqual(isObject(Array.isArray), true);
    assert.strictEqual(isObject(/x/), true);
    assert.strictEqual(isObject([1, 2, 'a']), true);
    assert.strictEqual(isObject('a'), false);
    assert.strictEqual(isObject(Symbol('foo')), false);
  });

  it('isObjectLike() fn 🠲 should return `true` for a value is object-like if its not null and has a `typeof` result of "object', function () {
    assert.strictEqual(isObjectLike({
      0: 1,
      length: 1,
    }), true);
    assert.strictEqual(isObjectLike(Object), false);
    assert.strictEqual(isObjectLike({}), true);
    assert.strictEqual(isObjectLike(1), false);
    assert.strictEqual(isObjectLike(0), false);
    assert.strictEqual(isObjectLike(NaN), false);
    assert.strictEqual(isObjectLike(), false);
    assert.strictEqual(isObjectLike(undefined), false);
    assert.strictEqual(isObjectLike(false), false);
    assert.strictEqual(isObjectLike(true), false);
    assert.strictEqual(isObjectLike(Array.isArray), false);
    assert.strictEqual(isObjectLike(/x/), true);
    assert.strictEqual(isObjectLike([1, 2, 'a']), true);
    assert.strictEqual(isObjectLike('a'), false);
    assert.strictEqual(isObjectLike(Symbol('foo')), false);
  });

  it('isPlainObject() fn 🠲 should return `true` for Object constructor or one with a [[Prototype]] of null.', function () {
    assert.strictEqual(isPlainObject({
      0: 1,
      length: 1,
    }), true);
    assert.strictEqual(isPlainObject(Object.create(null)), true);
    assert.strictEqual(isPlainObject({}), true);
    assert.strictEqual(isPlainObject(Object), false);
    assert.strictEqual(isPlainObject(1), false);
    assert.strictEqual(isPlainObject(0), false);
    assert.strictEqual(isPlainObject(NaN), false);
    assert.strictEqual(isPlainObject(), false);
    assert.strictEqual(isPlainObject(undefined), false);
    assert.strictEqual(isPlainObject(false), false);
    assert.strictEqual(isPlainObject(true), false);
    assert.strictEqual(isPlainObject(Array.isArray), false);
    assert.strictEqual(isPlainObject(/x/), false);
    assert.strictEqual(isPlainObject([1, 2, 'a']), false);
    assert.strictEqual(isPlainObject('a'), false);
    assert.strictEqual(isPlainObject(Symbol('foo')), false);
  });

  it('isNonEmptyObject() fn 🠲 should return `true` for Object that is not empty', function () {
    assert.strictEqual(isEmptyObject({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isEmptyObject(Object.create(null)), true);
    assert.strictEqual(isEmptyObject({}), true);
    assert.strictEqual(isEmptyObject(Object), false);
    assert.strictEqual(isEmptyObject(1), false);
    assert.strictEqual(isEmptyObject(0), false);
    assert.strictEqual(isEmptyObject(NaN), false);
    assert.strictEqual(isEmptyObject(), false);
    assert.strictEqual(isEmptyObject(undefined), false);
    assert.strictEqual(isEmptyObject(false), false);
    assert.strictEqual(isEmptyObject(true), false);
    assert.strictEqual(isEmptyObject(Array.isArray), false);
    assert.strictEqual(isEmptyObject(/x/), false);
    assert.strictEqual(isEmptyObject([1, 2, 'a']), false);
    assert.strictEqual(isEmptyObject('a'), false);
    assert.strictEqual(isEmptyObject(Symbol('foo')), false);
  });

  it('isEmptyObject() fn 🠲 should return `true` for Object that is empty', function () {
    assert.strictEqual(isEmptyObject({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isEmptyObject(Object.create(null)), true);
    assert.strictEqual(isEmptyObject({}), true);
    assert.strictEqual(isEmptyObject(Object), false);
    assert.strictEqual(isEmptyObject(1), false);
    assert.strictEqual(isEmptyObject(0), false);
    assert.strictEqual(isEmptyObject(NaN), false);
    assert.strictEqual(isEmptyObject(), false);
    assert.strictEqual(isEmptyObject(undefined), false);
    assert.strictEqual(isEmptyObject(false), false);
    assert.strictEqual(isEmptyObject(true), false);
    assert.strictEqual(isEmptyObject(Array.isArray), false);
    assert.strictEqual(isEmptyObject(/x/), false);
    assert.strictEqual(isEmptyObject([1, 2, 'a']), false);
    assert.strictEqual(isEmptyObject('a'), false);
    assert.strictEqual(isEmptyObject(Symbol('foo')), false);
  });

  it('isFrozen() fn 🠲 should return `true` for Object that is Frozen', function () {
    assert.strictEqual(isFrozen(Object.freeze({})), true);
    assert.strictEqual(isFrozen(Object.freeze({
      0: 1,
      length: 1,
    })), true);
    assert.strictEqual(isFrozen({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isFrozen(Object.create(null)), false);
    assert.strictEqual(isFrozen({}), false);
    assert.strictEqual(isFrozen(Object), false);
    assert.strictEqual(isFrozen(1), false);
    assert.strictEqual(isFrozen(0), false);
    assert.strictEqual(isFrozen(NaN), false);
    assert.strictEqual(isFrozen(), false);
    assert.strictEqual(isFrozen(undefined), false);
    assert.strictEqual(isFrozen(false), false);
    assert.strictEqual(isFrozen(true), false);
    assert.strictEqual(isFrozen(Array.isArray), false);
    assert.strictEqual(isFrozen(/x/), false);
    assert.strictEqual(isFrozen([1, 2, 'a']), false);
    assert.strictEqual(isFrozen('a'), false);
    assert.strictEqual(isFrozen(Symbol('foo')), false);
  });
});

