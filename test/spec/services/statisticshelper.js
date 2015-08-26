'use strict';

describe('Service: statisticsHelper', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var statisticsHelper;
  beforeEach(inject(function (_statisticsHelper_) {
    statisticsHelper = _statisticsHelper_;
  }));

  it('should do something', function () {
    expect(!!statisticsHelper).toBe(true);
  });

});
