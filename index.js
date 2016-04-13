var schemeSweet = (function () {
  'use strict';

  var fs = require('fs');
  var plist = require('plist');
  var tinycolor = require('tinycolor2');
  var uuid = require('uuid');
  var template = require('./template.js');

  var AUTHOR = 'Scheme Sweet (https://github.com/briles/scheme-sweet)';

  /**
   * The `SchemeSweet` class builds a tmTheme by populating a
   * template with colors specified in a palette and optional metadata
   *
   * @class SchemeSweet
   * @constructor
   * @param {object} options configuration object
   */
  var SchemeSweet = function (options) {
    if (!(this instanceof SchemeSweet)) {
      return new SchemeSweet(arguments);
    }

    this._palette = this._paletteToHex(options.palette);
    this._metadata = options.metadata || {
      name: '',
      author: AUTHOR,
      comment: 'Made by Scheme Sweet',
    };

    return this;
  };

  /**
   * Converts the tmTheme to plist XML
   * @return {string} the tmTheme as plist XML
   */
  SchemeSweet.prototype.buildTmTheme = function () {
    if (!this._tmTheme) {
      this._prepareTemplate();
    }

    return plist.build(this._tmTheme);
  };

  /**
   * checks the validity of the palette & metadata
   * @return {Boolean}
   */
  SchemeSweet.prototype.isValid = function () {
    return paletteIsValid(this._palette) && metadataIsValid(this._metadata);
  };

  /**
   * Writes the tmTheme to a file
   * @param  {string} filepath the path where the file will be written
   */
  SchemeSweet.prototype.writeTmTheme = function (filepath) {
    if (typeof filepath !== 'string') {
      throw new Error(
        'Expected "filepath" to be string, was "' + typeof filepath + '"'
      );
    }

    var tmTheme = this.buildTmTheme();
    fs.writeFileSync(filepath, tmTheme, 'utf-8');
  };

  /**
   * Converts colors in the palette to Hex or Hex8 strings
   * @private
   * @param  {object} palette the palette to transform
   * @return {obj}         the modified palette
   */
  SchemeSweet.prototype._paletteToHex = function (palette) {
    for (var color in palette) {
      var colorObj = tinycolor(palette[color]);

      if (!colorObj.isValid()) {
        console.log('"' + palette[color] + '" is not a valid tinycolor color');
        return;
      }

      palette[color] = colorObj._a !== 1 ? colorObj.toSublimeHex8String() : colorObj.toHexString();
    }

    return palette;
  };

  /**
   * populates the instance template with colors & metadata
   * @private
   */
  SchemeSweet.prototype._prepareTemplate = function () {
    var _tmTheme = this._tmTheme;
    _tmTheme = template(this._palette);
    _tmTheme.name = this._metadata.name;
    _tmTheme.author = this._metadata.author;
    _tmTheme.comment = this._metadata.comment;
    _tmTheme.uuid = uuid.v4();

    // Join the scope arrays so Sublime Text can parse them
    _tmTheme.settings.slice(1).forEach(function (group, index) {
      index += 1;

      if (isArray(group.scope)) {
        _tmTheme.settings[index].scope = group.scope.sort().join(',');
      }
    });

    this._tmTheme = _tmTheme;
  };

  /**
   * checks if scheme metadata if valid
   * @private
   * @return {Boolean}
   */
  function metadataIsValid(metadata) {
    return metadata.name.length > 0 && isString(metadata.name);
  }

  /**
   * checks if scheme palette colors are valid
   * @private
   * @return {Boolean}
   */
  function paletteIsValid(palette) {
    if (!palette) {
      return false;
    }

    var numValid = 0;

    for (var colorKey in palette) {
      if (!tinycolor(palette[colorKey]).isValid()) {
        return;
      }

      numValid++;
    }

    return numValid === Object.keys(palette).length;
  }

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

  /**
   * tests if is an Array
   * @private
   * @param  {any} arr
   * @return {boolean}
   */
  var isArray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  };

  /**
   * tests if is a String
   * @private
   * @param  {any} string
   * @return {boolean}
   */
  var isString = function (str) {
    return typeof str === 'string' || str instanceof String;
  };

  return SchemeSweet;
}());

module.exports = schemeSweet;
