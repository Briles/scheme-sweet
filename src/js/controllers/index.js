var app = angular.module('schemeSweet', ['ngRoute', 'ngclipboard']);

app.config([
  '$routeProvider',
  '$locationProvider',
  require('../routes'),
]);

app.controller('schemeSweetCtrl', require('./designer.js'));
