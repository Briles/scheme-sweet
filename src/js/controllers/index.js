var app = angular.module('schemeSweet', ['ngRoute', 'ngclipboard', 'cfp.hotkeys']);

app.config([
  '$routeProvider',
  '$locationProvider',
  require('../routes'),
]).config(function (hotkeysProvider) {
  hotkeysProvider.useNgRoute = false;
  hotkeysProvider.includeCheatSheet = false;
});

app.controller('schemeSweetCtrl', require('./designer.js'));
