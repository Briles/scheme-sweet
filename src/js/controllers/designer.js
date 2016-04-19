module.exports = function ($scope, $routeParams, $location, $timeout) {
  'use strict';

  var SchemeSweet = require('scheme-sweet');

  $scope.workspace = {
    activeModal: '',
    copied: false,
    schemeHasChanged: false,
    selectedColors: {},
  };

  $scope.scheme = {
    palette: {
      background: '#282828',
      bg1: '#3c3836',
      bg2: '#504945',
      bg3: '#665c54',
      bg4: '#7c6f64',
      gray: '#928374',
      fg4: '#a89984',
      fg3: '#bdae93',
      fg2: '#d5c4a1',
      fg1: '#ebdbb2',
      foreground: '#fbf1c7',
      red: '#fb4934',
      neutralRed: '#cc241d',
      green: '#b8bb26',
      neutralGreen: '#98971a',
      blue: '#83a598',
      neutralBlue: '#458588',
      cyan: '#8ec07c',
      neutralCyan: '#689d6a',
      yellow: '#fabd2f',
      neutralYellow: '#d79921',
      orange: '#fe8019',
      neutralOrange: '#d65d0e',
      purple: '#d3869b',
      neutralPurple: '#b16286',
    },
    metadata: {
      name: '',
      author: '',
      comment: '',
    },
  };

  $scope.$watch('scheme', function () {
    $scope.workspace.schemeHasChanged = true;
  }, true);

  $scope.setActiveModal = function (modalName) {
    $scope.workspace.activeModal = modalName;
  };

  $scope.toggleActiveModal = function (modalName) {
    $scope.workspace.activeModal = $scope.isActiveModal(modalName) ? '' : modalName;
  };

  $scope.isActiveModal = function (modalName) {
    return $scope.workspace.activeModal === modalName;
  };

  $scope.closeModal = function () {
    $scope.workspace.activeModal = '';
  };

  $scope.schemeIsValid = function () {
    return new SchemeSweet(angular.copy($scope.scheme)).isValid();
  };

  $scope.schemeIsValid = function () {
    return paletteIsValid($scope.scheme.palette) && metadataIsValid($scope.scheme.metadata);
  };

  $scope.prepareScheme = function () {
    if (!$scope.schemeIsValid()) {
      return;
    }

    if ($scope.workspace.schemeHasChanged) {
      $scope.builtScheme = new SchemeSweet($scope.scheme).build();
      $scope.workspace.schemeHasChanged = false;
    }

    $scope.toggleActiveModal('download');
  };

  $scope.selectNone = function () {
    $scope.workspace.selectedColors = {};
  };

  $scope.selectAll = function () {
    var palette = $scope.scheme.palette;

    for (var colorKey in palette) {
      $scope.workspace.selectedColors[colorKey] = true;
    }
  };

  function countTrueValues(obj, stop) {
    var count = 0;
    stop = stop || 0;

    for (var key in obj) {
      if (stop !== 0 && count > stop) {
        break;
      } else if (obj[key] === true) {
        count++;
      }
    }

    return count;
  }

  $scope.hasSelections = function () {
    return !!countTrueValues($scope.workspace.selectedColors, 1);
  };

  $scope.hasExactSelections = function (n) {
    return countTrueValues($scope.workspace.selectedColors) === n;
  };

  function transformColors(callback) {
    for (var colorKey in $scope.workspace.selectedColors) {
      if ($scope.workspace.selectedColors[colorKey]) {
        $scope.scheme.palette[colorKey] = callback($scope.scheme.palette[colorKey]);
      }
    }
  }

  $scope.randomize = function () {
    transformColors(function () {
      return tinycolor.random().toHexString();
    });
  };

  $scope.complement = function () {
    transformColors(function (color) {
      return tinycolor(color).complement().toHexString();
    });
  };

  $scope.swap = function () {
    var colors = [];

    for (var colorKey in $scope.workspace.selectedColors) {
      if ($scope.workspace.selectedColors[colorKey]) {
        colors.push(colorKey);
      }
    }

    var color1 = $scope.scheme.palette[colors[0]];
    var color2 = $scope.scheme.palette[colors[1]];

    $scope.scheme.palette[colors[0]] = color2;
    $scope.scheme.palette[colors[1]] = color1;
  };

  $scope.getContrastColor = function () {
    if (tinycolor(this.color).isValid()) {
      return tinycolor.mostReadable(this.color, ['#fff', '#000']).toHexString();
    }
  };

  $scope.isCopied = function () {
    return !!$scope.workspace.copied;
  };

  $scope.copySuccess = function (e) {
    var originalMessage = e.trigger.innerHTML;
    $scope.workspace.copied = true;
    e.trigger.innerText = 'Copied!';

    $timeout(function () {
      $scope.workspace.copied = false;
      e.trigger.innerHTML = originalMessage;
    }, 2000);

    e.clearSelection();
  };

  $scope.getLocation = function () {
    return $location.$$path;
  };

  function metadataIsValid(metadata) {
    return metadata.name.length > 0 && isString(metadata.name);
  }

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

  function isString(thing) {
    return typeof thing === 'string' || thing instanceof String;
  }

};
