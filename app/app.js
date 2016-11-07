import angular from 'angular'
import bootstrap from 'bootstrap'
import uiRouter from 'angular-ui-router'
// import ngRoute from 'angular-route'

angular.module('my-app', [bootstrap, uiRouter])
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    template: 'app/views/main.html'
  });
}
