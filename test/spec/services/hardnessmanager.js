'use strict';

describe('Service: hardnessManager', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var hardnessManager;
  beforeEach(inject(function (_hardnessManager_) {
    hardnessManager = _hardnessManager_;
  }));

  it('should do something', function () {
    expect(!!hardnessManager).toBe(true);
  });

});
