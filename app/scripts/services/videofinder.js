'use strict';

/**
 * @ngdoc service
 * @name artisanalTelevisionApp.videoFinder
 * @description
 * # videoFinder
 * Service in the artisanalTelevisionApp.
 */
angular.module('artisanalTelevisionApp')
  .service('videoFinder', function () {
    this.getVideos = function() {
      return $.get('videos/videos.json')
    };
  });
