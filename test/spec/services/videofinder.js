'use strict';

describe('Service: videoFinder', function () {

  // load the service's module
  beforeEach(module('artisanalTelevisionApp'));

  // instantiate service
  var videoFinder;
  beforeEach(inject(function (_videoFinder_) {
    videoFinder = _videoFinder_;
  }));

  it('should do something', function () {
    expect(!!videoFinder).toBe(true);
  });

});
