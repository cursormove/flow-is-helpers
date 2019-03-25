const _ = require('lodash');
const {
  assert,
} = require('chai');
const {
  isFunction,
  isPromise,
  isAsync,
  isGenerator,
  isGeneratorFunction,
} = require(global.DIST_PATH);

/** Used to test async functions. */
const promiseFunc = _.attempt(function () {
  return Function('return new Promise(() => {})');
});

/** Used to test async functions. */
const asyncFunc = _.attempt(function () {
  return Function('return async () => {}');
});

/** Used to test generator functions. */
const generatorFunc = _.attempt(function () {
  return Function('return function*(){}');
});

/** Used to test generator functions. */
const generator = _.attempt(function () {
  return function*(i){
    yield i;
    yield i + 2;
  };
});


describe('Function Helpers', function () {
  it('isFunction() fn 🠲 should return `true` for functions', function () {
    assert.strictEqual(isFunction(_), true);
    assert.strictEqual(isFunction(Array.isArray), true);
    assert.strictEqual(isFunction({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isFunction(1), false);
    assert.strictEqual(isFunction(/x/), false);
    assert.strictEqual(isFunction('a'), false);
    assert.strictEqual(isFunction([1, 2, 'a']), false);
    assert.strictEqual(isFunction(Symbol('foo')), false);
  });

  it('isPromise() fn 🠲 should return `true` for promise functions', function () {
    assert.strictEqual(isPromise(promiseFunc()), true);
    assert.strictEqual(isPromise(Array.isArray), false);
    assert.strictEqual(isPromise({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isPromise(1), false);
    assert.strictEqual(isPromise(/x/), false);
    assert.strictEqual(isPromise('a'), false);
    assert.strictEqual(isPromise([1, 2, 'a']), false);
    assert.strictEqual(isPromise(Symbol('foo')), false);
  });

  it('isAsync() fn 🠲 should return `true` for async functions', function () {
    assert.strictEqual(isAsync(asyncFunc()), true);
    assert.strictEqual(isAsync(Array.isArray), false);
    assert.strictEqual(isAsync({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isAsync(1), false);
    assert.strictEqual(isAsync(/x/), false);
    assert.strictEqual(isAsync('a'), false);
    assert.strictEqual(isAsync([1, 2, 'a']), false);
    assert.strictEqual(isAsync(Symbol('foo')), false);
  });

  it('isGenerator() fn 🠲 should return `true` for generator', function () {
    const gen = generator(2);
    assert.strictEqual(isGenerator(gen), true);
    assert.strictEqual(isGenerator(Array.isArray), false);
    assert.strictEqual(isGenerator({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isGenerator(1), false);
    assert.strictEqual(isGenerator(/x/), false);
    assert.strictEqual(isGenerator('a'), false);
    assert.strictEqual(isGenerator([1, 2, 'a']), false);
    assert.strictEqual(isGenerator(Symbol('foo')), false);
  });


  it('isGeneratorFunction() fn 🠲 should return `true` for generator function', function () {
    assert.strictEqual(isGeneratorFunction(generatorFunc()), true);
    assert.strictEqual(isGeneratorFunction(Array.isArray), false);
    assert.strictEqual(isGeneratorFunction({
      0: 1,
      length: 1,
    }), false);
    assert.strictEqual(isGeneratorFunction(1), false);
    assert.strictEqual(isGeneratorFunction(/x/), false);
    assert.strictEqual(isGeneratorFunction('a'), false);
    assert.strictEqual(isGeneratorFunction([1, 2, 'a']), false);
    assert.strictEqual(isGeneratorFunction(Symbol('foo')), false);
  });
});

