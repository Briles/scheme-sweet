var schemeSweet = (function () {
  'use strict';

  var defaultTemplate = require('./lib/template.js');
  var plist = require('plist');
  var tinycolor = require('./lib/tinycolor.js');
  var util = require('./lib/util.js');

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
      return new SchemeSweet(options);
    }

    this._palette = paletteToHex(options.palette);
    this._metadata = options.metadata || {
      name: '',
      author: 'Scheme Sweet (https://github.com/Briles/scheme-sweet)',
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
    this._tmTheme = prepareTemplate(this);
    return plist.build(this._tmTheme);
  };

  /**
   * sets the template
   * @param {function} templateFunc the template function to set
   */
  SchemeSweet.prototype.setTemplate = function (templateFunc) {
    return util.isFunction(templateFunc) ? templateFunc : defaultTemplate;
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

      palette[color] = colorObj.toSuitableHexString();
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

    // Join the scope arrays so Sublime Text can parse them
    tmTheme.settings.slice(1).forEach(function (group, index) {
      index++;

      if (util.isArray(group.scope)) {
        tmTheme.settings[index].scope = group.scope.sort().join(',');
      }
    });

    return tmTheme;
  }

  return SchemeSweet;
}());

module.exports = schemeSweet;
