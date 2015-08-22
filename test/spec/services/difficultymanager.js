'use strict';

describe('Service: difficultyManager', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var difficultyManager;
  beforeEach(inject(function (_difficultyManager_) {
    difficultyManager = _difficultyManager_;
  }));

  it('should do something', function () {
    expect(!!difficultyManager).toBe(true);
  });

});
