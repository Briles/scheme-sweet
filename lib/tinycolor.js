module.exports = (function () {
  'use strict';

  var tinycolor = require('tinycolor2');

  /**
   * Converts tinycolor color to Hex8 string suitable for Sublime Text.
   * Sublime Text expects the alpha channel at the end of the string:
   * IE: #000000FF instead of #FF000000
   * @private
   * @return {string} the color string as Hex8
   */
  tinycolor.prototype.toSublimeHex8String = function () {
    var hex = this.toHex8();
    return '#' + hex.slice(2) + hex.slice(0, 2);
  };

  return tinycolor;
}());
