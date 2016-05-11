module.exports = (function () {
  'use strict';

  var tinycolor = require('tinycolor2');

  /**
   * Converts tinycolor color to Hex8 string suitable for Sublime Text.
   * Sublime Text expects the alpha channel at the end of the string:
   * IE: #000000FF instead of #FF000000
   * @return {string} the color string as Hex8
   */
  tinycolor.prototype.toSublimeHex8String = function () {
    var hex = this.toHex8();
    return '#' + hex.slice(2) + hex.slice(0, 2);
  };

  /**
   * Converts tinycolor color to Sublime suitable Hex8 string if color has
   * an alpha channel not equal to 1, otherwise converts the color to Hex string.
   * @return {string} the color string as Hex8 or Hex
   */
  tinycolor.prototype.toSuitableHexString = function () {
    return this._a !== 1 ? this.toSublimeHex8String() : this.toHexString();
  };

  return tinycolor;
}());
