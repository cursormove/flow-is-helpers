# Predicate `truthy` Function via `%check`
[![wercker status](https://app.wercker.com/status/bafa2a9b73363a572c84f8056c84c915/s/master "wercker status")](https://app.wercker.com/project/byKey/bafa2a9b73363a572c84f8056c84c915)

## Description

This is a [Flow](https://flow.org) helper library for Lodash [`is`](https://lodash.com/docs/4.17.11#isArguments) and additional Flow predicate type [`%checks`](https://flow.org/en/docs/types/functions/#toc-predicate-functions) functions. Simply put, this library contains converted `truthy` predicate functions through the use of Flow `%check` annotations. By doing so it aids and increases the ability for [The Flow Parser](https://github.com/facebook/flow/tree/master/src/parser) to properly check the defined predicate functions.

## Why?

Flow and Lodash's predicate functions (`is***`) don't work well together (if at all in some cases) resulting in duplicate logic. Ideally a fix will be implemented into the main `flow-type` [Lodash library](https://github.com/flow-typed/flow-typed/tree/master/definitions/npm/lodash_v4.x.x) but until that time comes (if ever) this library acts as a stopgap solution. In addition, this library includes some helpful custom predicate check functions.

## Install

```bash
# npm
npm i --save @cursormove/flow-is-helpers

# yarn
yarn add @cursormove/flow-is-helpers
```

## Usage

This Library is a drop-in replacement for Lodash's predicate functions. You should be able to just swap out Lodash predicate functions like `isString` with this library. I recommend you take a quick look at the code base just so you have a better understanding of what is going on but the gist of it is pretty simple.

```js
import {
  isString,
} from '@cursormove/flow-is-helpers';

// Flow Type Check & truthy predicate function check
const hello = (val: string) => isString(val) ? `Hello ${val}` : 'Hello Nobody';

hello('World'); // 'Hello World' 
hello(null); // 'Hello Nobody'
```

## API 🠲 Custom Checks

__Array Checks__
+ `isEmptyArray` 🠲 Checks if Array is empty.
+ `isNonEmptyArray` 🠲 Checks if Array is empty.


__Function Checks__
+ `isPromise` 🠲 Checks if Function type is a Promise.
+ `isAsync` 🠲 Checks if Function type is Async.
+ `isGenerator` 🠲 Checks if Function type is a Generator Iterator.
+ `isGeneratorFunction` 🠲 Checks if Function type is a Generator.


__Plain Object Checks (Not ObjectLike)__
+ `isEmptyObject` 🠲 Checks if Object is empty.
+ `isNonEmptyObject` 🠲 Checks if Object is not empty.
+ `isFrozen` 🠲 Checks if Object is [Frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen).
+ `isFrozen` 🠲 Checks if Object is [Sealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed).
+ `isFrozen` 🠲 Checks if Object is [Extensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible).


__String Checks__
+ `isEmptyString` 🠲 Checks if String is empty.
+ `isNonEmptyString` 🠲 Checks if String is not empty.


__Number Checks__
+ `isNan` 🠲 Checks if value is not a Number.
+ `isInfinity` 🠲 Checks if value is either `Number.NEGATIVE_INFINITY` or `Number.POSITIVE_INFINITY`.


__Nil Checks__
+ `isNotNil` 🠲 Opposite of Lodash's `isNil` in that it's not `null` or `undefined`.


__Miscellaneous Checks__
+ `isIterable` 🠲 Checks if value is an [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators)
+ `isAction` 🠲 Checks if value is a Redux [`Action`](https://redux.js.org/basics/actions)



## API 🠲 Lodash Checks

__Includes all Lodash `is` Predicate Functions__

+ [`isArguments`](https://lodash.com/docs/4.17.10#isArguments)
+ [`isArray`](https://lodash.com/docs/4.17.10#isArray)
+ [`isArrayBuffer`](https://lodash.com/docs/4.17.10#isArrayBuffer)
+ [`isArrayLike`](https://lodash.com/docs/4.17.10#isArrayLike)
+ [`isArrayLikeObject`](https://lodash.com/docs/4.17.10#isArrayLikeObject)
+ [`isBoolean`](https://lodash.com/docs/4.17.10#isBoolean)
+ [`isBuffer`](https://lodash.com/docs/4.17.10#isBuffer)
+ [`isDate`](https://lodash.com/docs/4.17.10#isDate)
+ [`isElement`](https://lodash.com/docs/4.17.10#isElement)
+ [`isEmpty`](https://lodash.com/docs/4.17.10#isEmpty)
+ [`isEqual`](https://lodash.com/docs/4.17.10#isEqual)
+ [`isEqualWith`](https://lodash.com/docs/4.17.10#isEqualWith)
+ [`isError`](https://lodash.com/docs/4.17.10#isError)
+ [`isFinite`](https://lodash.com/docs/4.17.10#isFinite)
+ [`isFunction`](https://lodash.com/docs/4.17.10#isFunction)
+ [`isInteger`](https://lodash.com/docs/4.17.10#isInteger)
+ [`isLength`](https://lodash.com/docs/4.17.10#isLength)
+ [`isMap`](https://lodash.com/docs/4.17.10#isMap)
+ [`isMatch`](https://lodash.com/docs/4.17.10#isMatch)
+ [`isMatchWith`](https://lodash.com/docs/4.17.10#isMatchWith)
+ [`isNaN`](https://lodash.com/docs/4.17.10#isNaN)
+ [`isNative`](https://lodash.com/docs/4.17.10#isNative)
+ [`isNil`](https://lodash.com/docs/4.17.10#isNil)
+ [`isNull`](https://lodash.com/docs/4.17.10#isNull)
+ [`isNumber`](https://lodash.com/docs/4.17.10#isNumber)
+ [`isObject`](https://lodash.com/docs/4.17.10#isObject)
+ [`isObjectLike`](https://lodash.com/docs/4.17.10#isObjectLike)
+ [`isPlainObject`](https://lodash.com/docs/4.17.10#isPlainObject)
+ [`isRegExp`](https://lodash.com/docs/4.17.10#isRegExp)
+ [`isSafeInteger`](https://lodash.com/docs/4.17.10#isSafeInteger)
+ [`isSet`](https://lodash.com/docs/4.17.10#isSet)
+ [`isString`](https://lodash.com/docs/4.17.10#isString)
+ [`isSymbol`](https://lodash.com/docs/4.17.10#isSymbol)
+ [`isTypedArray`](https://lodash.com/docs/4.17.10#isTypedArray)
+ [`isUndefined`](https://lodash.com/docs/4.17.10#isUndefined)
+ [`isWeakMap`](https://lodash.com/docs/4.17.10#isWeakMap)
+ [`isWeakSet`](https://lodash.com/docs/4.17.10#isWeakSet)


---

Best, [te](http://www.teschultz.com/)
