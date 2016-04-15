(function () {
  'use strict';

  const SchemeSweet = require('../index.js');
  const assert = require('chai').assert;

  const hexColorRe = new RegExp('#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})');

  const mockValidConfig = {
    palette: {
      background: '#430d39',
      bg1: '#430d39',
      bg2: '#59114b',
      bg3: '#6e165d',
      bg4: '#831a6f',
      gray: '#926a8a',
      foreground: '#f5cbed',
      fg1: '#f2bae7',
      fg2: '#eeaae1',
      fg3: '#eb99dc',
      fg4: '#e889d6',
      red: '#D90000',
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
    template: function () {},
  };

  const mockValidInstance = new SchemeSweet(mockValidConfig);

  describe('SchemeSweet', function () {
    describe('constructor', function () {
      it('should always return a SchemeSweet instance', function () {
        assert.instanceOf(SchemeSweet(mockValidConfig), SchemeSweet);
        assert.instanceOf(new SchemeSweet(mockValidConfig), SchemeSweet);
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
