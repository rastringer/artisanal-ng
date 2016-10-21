
'use strict';

/**
 * @ngdoc overview
 * @name artisanalTelevisionApp
 * @description
 * # artisanalTelevisionApp
 *
 * Main module of the application.
 */
angular
  .module('artisanalTelevisionApp', ["ui.router"])
  	.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  		$urlRouterProvider.otherwise('/');
  		$sceDelegateProvider.resourceUrlWhitelist(['**']);

  		$stateProvider
  			.state('home', {
  				url: '/',
  				templateUrl: 'views/video.html',
  				controller: 'VideoCtrl as video'
  			})
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl as about'
        });
  	}]);

