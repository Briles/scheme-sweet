module.exports = (function () {
  'use strict';

  /**
   * tests if argument is an Array
   * @private
   * @param  {any} thing
   * @return {boolean}
   */
  var isArray = Array.isArray || function (thing) {
    return Object.prototype.toString.call(thing) === '[object Array]';
  };

  /**
   * tests if argument is a Function
   * @private
   * @param  {any} thing
   * @return {boolean}
   */
  var isFunction = function (thing) {
    return Object.prototype.toString.call(thing) === '[object Function]';
  };

  /**
   * tests if argument is a String
   * @private
   * @param  {any} thing
   * @return {boolean}
   */
  var isString = function (thing) {
    return typeof thing === 'string' || thing instanceof String;
  };

  return {
    isArray: isArray,
    isFunction: isFunction,
    isString: isString,
  };
}());
