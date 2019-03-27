// @flow
import {
  isArguments as loIsArguments,
  isArray as loIsArray,
  isArrayBuffer as loIsArrayBuffer,
  isArrayLike as loIsArrayLike,
  isArrayLikeObject as loIsArrayLikeObject,
  isBoolean as loIsBoolean,
  isBuffer as loIsBuffer,
  isDate as loIsDate,
  isElement as loIsElement,
  isEmpty as loIsEmpty,
  isEqual as loIsEqual,
  isEqualWith as loIsEqualWith,
  isError as loIsError,
  isFinite as loIsFinite,
  isFunction as loIsFunction,
  isInteger as loIsInteger,
  isLength as loIsLength,
  isMap as loIsMap,
  isMatch as loIsMatch,
  isMatchWith as loIsMatchWith,
  isNaN as loIsNaN,
  isNative as loIsNative,
  isNil as loIsNil,
  isNull as loIsNull,
  isNumber as loIsNumber,
  isObject as loIsObject,
  isObjectLike as loIsObjectLike,
  isPlainObject as loIsPlainObject,
  isRegExp as loIsRegExp,
  isSafeInteger as loIsSafeInteger,
  isSet as loIsSet,
  isString as loIsString,
  isSymbol as loIsSymbol,
  isTypedArray as loIsTypedArray,
  isUndefined as loIsUndefined,
  isWeakMap as loIsWeakMap,
  isWeakSet as loIsWeakSet,
} from 'lodash';


/**
 * flow-is-helpers 🠲 Type of helpers
 * @note 🠲 Pure functions only (no deps)
 * @note 🠲 Used in-place of lodash for flow %checks till flow-type is fixed
 * @order
 *   + Array Helpers
 *   + Function Helpers
 *   + Nill Helpers
 *   + Number Helpers
 *   + Object helpers
 *   + String helpers
 *   + No-Category Helpers
 */

export const isArguments = (val: any): boolean %checks => loIsArguments(val);
export const isArray = (val: any): boolean %checks => loIsArray(val);
export const isArrayBuffer = (val: any): boolean %checks => loIsArrayBuffer(val);
export const isArrayLike = (val: any): boolean %checks => loIsArrayLike(val);
export const isArrayLikeObject = (val: any): boolean %checks => loIsArrayLikeObject(val);
export const isBoolean = (val: any): boolean %checks => loIsBoolean(val);
export const isBuffer = (val: any): boolean %checks => loIsBuffer(val);
export const isDate = (val: any): boolean %checks => loIsDate(val);
export const isElement = (val: any): boolean %checks => loIsElement(val);
export const isEmpty = (val: any): boolean %checks => loIsEmpty(val);
export const isEqual = (val: any): boolean %checks => loIsEqual(val);
export const isEqualWith = (val: any): boolean %checks => loIsEqualWith(val);
export const isError = (val: any): boolean %checks => loIsError(val);
export const isFinite = (val: any): boolean %checks => loIsFinite(val);
export const isFunction = (val: any): boolean %checks => loIsFunction(val);
export const isInteger = (val: any): boolean %checks => loIsInteger(val);
export const isLength = (val: any): boolean %checks => loIsLength(val);
export const isMap = (val: any): boolean %checks => loIsMap(val);
export const isMatch = (val: any): boolean %checks => loIsMatch(val);
export const isMatchWith = (val: any): boolean %checks => loIsMatchWith(val);
export const isNaN = (val: any): boolean %checks => loIsNaN(val);
export const isNative = (val: any): boolean %checks => loIsNative(val);
export const isNil = (val: any): boolean %checks => loIsNil(val);
export const isNull = (val: any): boolean %checks => loIsNull(val);
export const isNumber = (val: any): boolean %checks => loIsNumber(val);
export const isObject = (val: any): boolean %checks => loIsObject(val);
export const isObjectLike = (val: any): boolean %checks => loIsObjectLike(val);
export const isPlainObject = (val: any): boolean %checks => loIsPlainObject(val);
export const isRegExp = (val: any): boolean %checks => loIsRegExp(val);
export const isSafeInteger = (val: any): boolean %checks => loIsSafeInteger(val);
export const isSet = (val: any): boolean %checks => loIsSet(val);
export const isString = (val: any): boolean %checks => loIsString(val);
export const isSymbol = (val: any): boolean %checks => loIsSymbol(val);
export const isTypedArray = (val: any): boolean %checks => loIsTypedArray(val);
export const isUndefined = (val: any): boolean %checks => loIsUndefined(val);
export const isWeakMap = (val: any): boolean %checks => loIsWeakMap(val);
export const isWeakSet = (val: any): boolean %checks => loIsWeakSet(val);


/**
 * Private Helpers
 */
// $FlowFix
const _getPrototypeName = (val: any): boolean %checks => {
  const proto = Object.getPrototypeOf(val);
  return proto && proto.constructor && proto.constructor.name;
};


/**
 * Array Helpers
 */
export const isEmptyArray = (val: any): boolean %checks =>
  !!val && val.constructor === Array && val.length === 0;
export const isNonEmptyArray = (val: any): boolean %checks =>
  !!val && val.constructor === Array && val.length !== 0;


/**
 * Function Helpers
 */
export const isPromise = (val: any): boolean %checks =>
  !!val && (typeof val === 'object' || typeof val === 'function') && typeof val.then === 'function';
// async fn
export const isAsync = (val: any): boolean %checks =>
  _getPrototypeName(val) === 'AsyncFunction';
// generator iter
export const isGenerator = (val: any): boolean %checks =>
  typeof val.next === 'function' && typeof val.throw === 'function';
// generator fn
// $FlowFix -> not "supposed" to be as complicated
export const isGeneratorFunction = (val: any): boolean %checks => {
  const constructor = val && val.constructor;
  if (!constructor) {
    return false;
  }else if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }
  return isGenerator(constructor.prototype);
};


/**
 * Nill Helpers
 */
export const isNotNil = (val: any): boolean %checks =>
  val !== undefined && val !== null;


/**
 * Number Helpers
 */
export const neginf = Number.NEGATIVE_INFINITY;
export const posinf = Number.POSITIVE_INFINITY;
// is not a number
export const isNan = (val: any): boolean %checks =>
  typeof val === 'number' && Number.isNaN(val);
// is infinity
export const isInfinity = (val: any): boolean %checks =>
  val === neginf || val === posinf;


/**
 * Object helpers
 */
export const isEmptyObject = (val: any): boolean %checks =>
  isPlainObject(val) &&  Object.keys(val).length === 0;
export const isNonEmptyObject = (val: any): boolean %checks =>
  isPlainObject(val) &&  Object.keys(val).length > 0;
export const isFrozen = (val: any): boolean %checks =>
  isPlainObject(val) && Object.isFrozen(val);
export const isSealed = (val: any): boolean %checks =>
  isPlainObject(val) && Object.isSealed(val);
export const isExtensible = (val: any): boolean %checks =>
  isPlainObject(val) && Object.isExtensible(val);


/**
 * String helpers
 */
export const isEmptyString = (val: any): boolean %checks =>
  typeof val === 'string' && val === '';
export const isNonEmptyString = (val: any): boolean %checks =>
  typeof val === 'string' && val !== '';



/**
 * No-Category Helpers
 */
export const isIterable = (val: any): boolean %checks =>
  isNotNil(val) && typeof val[Symbol.iterator] === 'function';
// redux
export const isAction = (val: any): boolean %checks =>
  val && (typeof val) === 'object' && (typeof val.type) === 'string';
