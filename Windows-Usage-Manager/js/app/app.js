'use strict';

var myApp = angular.module('WindowsUsageManager', [
  'ngRoute'
])
.config(function($routeProvider){
$routeProvider
	.when('/configSites', {
        templateUrl: 'views/configSites.html',
        controller: 'ConfigSitesCtrl',
        controllerAs: 'conf'
      })
	.when('/sites', {
        templateUrl: '/views/sites.html',
        controller: 'ConfigSitesCtrl',
        controllerAs: 'conf'
      })
  .otherwise({
        templateUrl: 'views/configSites.html',
        controller: 'ConfigSitesCtrl',
        controllerAs: 'conf'
      });
});
