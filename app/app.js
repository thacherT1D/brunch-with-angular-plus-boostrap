import angular from 'angular'
import bootstrap from 'bootstrap'
import uiRouter from 'angular-ui-router'

angular.module('my-app', [bootstrap, uiRouter])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/main.html',
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
      });

    }]);
