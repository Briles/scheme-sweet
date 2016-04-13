module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
    })
    .otherwise({
      redirectTo: '/',
    });
};
