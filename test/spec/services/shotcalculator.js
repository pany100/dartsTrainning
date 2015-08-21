'use strict';

describe('Service: shotCalculator', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var shotCalculator;
  beforeEach(inject(function (_shotCalculator_) {
    shotCalculator = _shotCalculator_;
  }));

  it('should do something', function () {
    expect(!!shotCalculator).toBe(true);
  });

});
