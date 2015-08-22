'use strict';

describe('Service: strategyHandler', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var strategyHandler;
  beforeEach(inject(function (_strategyHandler_) {
    strategyHandler = _strategyHandler_;
  }));

  it('should do something', function () {
    expect(!!strategyHandler).toBe(true);
  });

});
