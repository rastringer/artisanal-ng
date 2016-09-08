'use strict';

/**
 * @ngdoc function
 * @name artisanalTelevisionApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the artisanalTelevisionApp
 */
angular.module('artisanalTelevisionApp')
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])
  .controller('HeaderCtrl', ['$anchorScroll', "$location", "$scope",
    function ($anchorScroll, $location, $scope) {
      $scope.gotoReels = function(category) {
        $location.hash('reels');
        $anchorScroll();
      };
      $scope.gotoFilm = function(category) {
        $location.hash('film');
        $anchorScroll();
      };
      $scope.gotoMusic = function(category) {
        $location.hash('music');
        $anchorScroll();
      };
      $scope.gotoCommercial = function(category) {
        $location.hash('commercial');
        $anchorScroll();
      };
      $scope.gotoHire = function(category) {
        $location.hash('hire');
        $anchorScroll();
      };
      $scope.gotoFilm = function(category) {
        $location.hash('film');
        $anchorScroll();
      };
  }]);
