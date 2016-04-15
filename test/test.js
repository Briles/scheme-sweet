(function () {
  'use strict';

  const SchemeSweet = require('../index.js');
  const assert = require('chai').assert;
  const _ = require('lodash');
  const defaultTemplate = require('../template.js');

  const hexColorRe = new RegExp('#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})');

  const mockValidConfig = {
    palette: {
      background: '#88f0f0f6',
      bg1: 'rgb(255, 0, 0)',
      bg2: 'rgba(255, 0, 0, .5)',
      bg3: 'hsl(0, 100%, 50%)',
      bg4: 'hsla(0, 100%, 50%, .5)',
      gray: 'hsv(0, 100%, 100%)',
      foreground: 'hsva(0, 100%, 100%, .5)',
      fg1: 'blanchedalmond',
      fg2: {
        r: 255,
        g: 0,
        b: 0,
      },
      fg3: {
        r: 255,
        g: 0,
        b: 0,
        a: 0.5,
      },
      fg4: {
        h: 0,
        s: 100,
        l: 50,
      },
      red: {
        h: 0,
        s: 100,
        v: 100,
      },
      green: '#00d96d',
      blue: '#006dd9',
      cyan: '#04756F',
      pink: '#ff0073',
      yellow: '#FF8C00',
      orange: '#FF2D00',
      purple: '#8c00ff',
    },
    metadata: {
      name: 'metadata.name',
      author: 'metadata.author',
      comment: 'metadata.comment',
    },
    template: defaultTemplate,
  };

  const mockValidInstance = new SchemeSweet(mockValidConfig);

  const mockInvalidConfig = _.cloneDeep(mockValidConfig);
  const mockInvalidColor = 'invalid color';
  mockInvalidConfig.palette.red = mockInvalidColor;

  describe('SchemeSweet', function () {
    describe('constructor', function () {
      it('should always return a SchemeSweet instance', function () {
        assert.instanceOf(SchemeSweet(mockValidConfig), SchemeSweet);
        assert.instanceOf(new SchemeSweet(mockValidConfig), SchemeSweet);
      });

      it('should throw error when encountering an invalid color', function () {
        var invalidInstance = function () {
          new SchemeSweet(mockInvalidConfig);
        };

        var errorMessage = `"${mockInvalidColor}" is not a valid tinycolor color`;
        assert.throws(invalidInstance, errorMessage);
      });

      for (var confProp in mockValidConfig) {
        confProp = '_' + confProp;
        it('should create instance property: ' + confProp, function () {
          assert.property(mockValidInstance, confProp);
        });
      }

      for (var colorProp in mockValidConfig.palette) {
        var color = mockValidInstance._palette[colorProp];

        it('should have instance palette property: ' + colorProp, function () {
          assert.property(mockValidInstance._palette, colorProp);
        });

        it('should be a valid Hex color string: ' + color, function () {
          assert.match(color, hexColorRe);
        });
      }
    });

    describe('_palette', function () {
      it('should be an object', function () {
        assert.isObject(mockValidInstance._palette);
      });
    });

    describe('_metadata', function () {
      it('should be an object', function () {
        assert.isObject(mockValidInstance._metadata);
      });
    });

    describe('_template', function () {
      it('should be a function', function () {
        assert.isFunction(mockValidInstance._template);
      });
    });

    describe('build()', function () {
      it('should create _tmTheme instance property', function () {
        mockValidInstance.build();
        assert.property(mockValidInstance, '_tmTheme');
      });
    });

    describe('setTemplate()', function () {
      it('should set _template to a function', function () {
        mockValidInstance.setTemplate(function () {});

        assert.isFunction(mockValidInstance._template);

        mockValidInstance.setTemplate();
        assert.isFunction(mockValidInstance._template);
      });
    });

    describe('isValid()', function () {
      it('should return true', function () {
        assert.equal(mockValidInstance.isValid(), true);
      });

      it('should return false', function () {
        assert.equal(new SchemeSweet({}).isValid(), false);
      });
    });
  });

}());
