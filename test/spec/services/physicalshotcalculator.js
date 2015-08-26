'use strict';

describe('Service: physicalShotCalculator', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var physicalShotCalculator;
  beforeEach(inject(function (_physicalShotCalculator_) {
    physicalShotCalculator = _physicalShotCalculator_;
  }));

  it('should do something', function () {
    expect(!!physicalShotCalculator).toBe(true);
  });

  it('simulate bull', function () {
    for (var i = 20; i >= 0; i--) {
      physicalShotCalculator.simulateShoot( {
        'points' : 19,
        'target' : 'triple'
      });
    };
  });

});
