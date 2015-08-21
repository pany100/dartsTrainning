'use strict';

describe('Service: dartboardDistances', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var dartboardDistances;
  beforeEach(inject(function (_dartboardDistances_) {
    dartboardDistances = _dartboardDistances_;
  }));

  it('should do something', function () {
    expect(!!dartboardDistances).toBe(true);
  });

});
