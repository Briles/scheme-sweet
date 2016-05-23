var app = angular.module('schemeSweet', ['ngclipboard', 'cfp.hotkeys']);

app.config(function (hotkeysProvider) {
  hotkeysProvider.useNgRoute = false;
  hotkeysProvider.includeCheatSheet = false;
});

app.controller('schemeSweetCtrl', require('./designer.js'));
