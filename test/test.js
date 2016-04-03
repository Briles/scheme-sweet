(function () {
  'use strict';

  const SchemeSweet = require('../index.js');
  const assert = require('chai').assert;

  const mockValidPalette = {
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
    template: 'template.js',
  };
  const mockValidInstance = new SchemeSweet(mockValidPalette);

  describe('SchemeSweet', function () {
    describe('constructor', function () {
      it('should always return a SchemeSweet instance', function () {
        assert.instanceOf(SchemeSweet(mockValidPalette), SchemeSweet);
        assert.instanceOf(new SchemeSweet(mockValidPalette), SchemeSweet);
      });

      for (var prop in mockValidPalette) {
        prop = '_' + prop;
        it('should have instance property: ' + prop, function () {
          assert.property(mockValidInstance, prop);
        });
      }
    });
  });

}());
