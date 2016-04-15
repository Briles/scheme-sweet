var schemeSweet = (function () {
  'use strict';

  var plist = require('plist');
  var tinycolor = require('tinycolor2');
  var uuid = require('uuid');
  var defaultTemplate = require('./template.js');

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

    this._palette = paletteToHex(options.palette);
    this._metadata = options.metadata || {
      name: '',
      author: 'Scheme Sweet (https://github.com/briles/scheme-sweet)',
      comment: 'Made by Scheme Sweet',
    };
    this._template = this.setTemplate(options.template || defaultTemplate);

    return this;
  };

  /**
   * Converts the tmTheme to plist XML
   * @return {string} the tmTheme as plist XML
   */
  SchemeSweet.prototype.build = function () {
    if (!this._tmTheme) {
      this._tmTheme = prepareTemplate(this);
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
   * sets the template
   * @param {function} templateFunc the template function to set
   */
  SchemeSweet.prototype.setTemplate = function (templateFunc) {
    return isFunction(templateFunc) ? templateFunc : defaultTemplate;
  };

  /**
   * Converts colors in the palette to Hex or Hex8 strings
   * @private
   * @param  {object} palette the palette to transform
   * @return {object}         the modified palette
   */
  function paletteToHex(palette) {
    for (var color in palette) {
      var colorObj = tinycolor(palette[color]);

      if (!colorObj.isValid()) {
        throw new Error('"' + palette[color] + '" is not a valid tinycolor color');
      }

      palette[color] = colorObj._a !== 1 ? colorObj.toSublimeHex8String() : colorObj.toHexString();
    }

    return palette;
  }

  /**
   * populates the instance template with colors & metadata
   * @private
   * @param  {SchemeSweet} instance the SchemeSweet instance to prepare
   * @return {object}      the populated tmTheme
   */
  function prepareTemplate(instance) {
    var tmTheme = instance._template(instance._palette);
    tmTheme.name = instance._metadata.name;
    tmTheme.author = instance._metadata.author;
    tmTheme.comment = instance._metadata.comment;
    tmTheme.uuid = uuid.v4();

    // Join the scope arrays so Sublime Text can parse them
    tmTheme.settings.slice(1).forEach(function (group, index) {
      index++;

      if (isArray(group.scope)) {
        tmTheme.settings[index].scope = group.scope.sort().join(',');
      }
    });

    return tmTheme;
  }

  /**
   * checks if scheme metadata is valid
   * @private
   * @param  {object} metadata the instance metadata to validate
   * @return {Boolean}
   */
  function metadataIsValid(metadata) {
    return metadata.name.length > 0 && isString(metadata.name);
  }

  /**
   * checks if scheme palette is valid
   * @private
   * @param  {object} palette the instance palette to validate
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

  return SchemeSweet;
}());

module.exports = schemeSweet;
