'use strict';

describe('Service: physicalShotCalculator', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var physicalShotCalculator, difficultyManager;
  beforeEach(inject(function (_physicalShotCalculator_, _difficultyManager_) {
    physicalShotCalculator = _physicalShotCalculator_;
    difficultyManager = _difficultyManager_;
  }));

  it('should do something', function () {
    expect(!!physicalShotCalculator).toBe(true);
  });

  it('simulate bull with difficulty 30', function () {
    testBullWithDifficulty( 30 );
    testBullWithDifficulty( 30 );
    testBullWithDifficulty( 30 );
  });

  it('simulate bull with difficulty 20', function () {
    testBullWithDifficulty( 20 );
    testBullWithDifficulty( 20 );
    testBullWithDifficulty( 20 );
  });

  it('simulate bull with difficulty 10', function () {
    testBullWithDifficulty( 15 );
    testBullWithDifficulty( 15 );
    testBullWithDifficulty( 15 );
  });

  it('simulate triple 20 with difficulty 30', function () {
    testNumberObjective( 20, 30 );
    testNumberObjective( 20, 30 );
    testNumberObjective( 20, 30 );
  });

  it('simulate triple 20 with difficulty 20', function () {
    testNumberObjective( 20, 20 );
    testNumberObjective( 20, 20 );
    testNumberObjective( 20, 20 );
  });

  it('simulate triple 20 with difficulty 10', function () {
    testNumberObjective( 20, 10 );
    testNumberObjective( 20, 10 );
    testNumberObjective( 20, 10 );
  });

  it('simulate triple 20 with difficulty 10', function () {
    testExactValueWithDifficulty( 20, 'triple', 10 );
    testExactValueWithDifficulty( 20, 'triple', 10 );
    testExactValueWithDifficulty( 20, 'triple', 10 );
  });

  it('simulate triple 20 with difficulty 20', function () {
    testExactValueWithDifficulty( 20, 'triple', 20 );
    testExactValueWithDifficulty( 20, 'triple', 20 );
    testExactValueWithDifficulty( 20, 'triple', 20 );
  });

  it('simulate triple 20 with difficulty 30', function () {
    testExactValueWithDifficulty( 20, 'triple', 30 );
    testExactValueWithDifficulty( 20, 'triple', 30 );
    testExactValueWithDifficulty( 20, 'triple', 30 );
  });

  it('simulate 20 with difficulty 30', function () {
    testNumberOk( 20, 30 );
    testNumberOk( 20, 30 );
    testNumberOk( 20, 30 );
    testNumberOk( 20, 20 );
    testNumberOk( 20, 20 );
    testNumberOk( 20, 20 );
  });

  function testExactValueWithDifficulty ( number, points, difficulty ) {
    var expectedValues =
      {
        'points' : points,
        'sum' : 1
      }, total = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 99; i >= 0; i--) {
      for (var j = 2; j >= 0; j--) {
        var result = physicalShotCalculator.simulateShoot( {
          'points' : number,
          'target' : points
        });
        if ( result.points == points ) {
          total += expectedValues.sum;
        }
      };
    };
    console.log( points + ', '+ number + ' with difficulty '+difficulty+': ' + total/100 );
  }

  function testBullWithDifficulty( difficulty ) {
    var expectedValue = {
        'points' : 'bull',
        'sum' : 2
      },
      secExpectedValue = {
        'points' : 'outer',
        'sum' : 1
      },
      total = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 99; i >= 0; i--) {
      for (var j = 2; j >= 0; j--) {
        var result = physicalShotCalculator.simulateShoot( {
          'points' : 20,
          'target' : 'bull'
        });
        if ( result.points === expectedValue.points ) {
          total += expectedValue.sum;
        } else if ( result.points === secExpectedValue.points ) {
          total += secExpectedValue.sum;
        }
      };
    };
    console.log( 'Bulls with difficulty '+difficulty+': ' + total/100 );
  }

  function testNumberObjective( number, difficulty ) {
    var expectedValues = [
      {
        'points' : 'bigSingle',
        'sum' : 1
      },
      {
        'points' : 'smallSingle',
        'sum' : 1
      },
      {
        'points' : 'double',
        'sum' : 2
      },
      {
        'points' : 'triple',
        'sum' : 3
      }
    ],
    total = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 99; i >= 0; i--) {
      for (var j = 2; j >= 0; j--) {
        var result = physicalShotCalculator.simulateShoot( {
          'points' : number,
          'target' : 'triple'
        });
        if ( result.target == number ) {
          for (var k = expectedValues.length - 1; k >= 0; k--) {
            if ( expectedValues[k].points == result.points  ) {
              total += expectedValues[k].sum;
            }
          };
        }
      };
    };
    console.log( number + ' with difficulty '+difficulty+': ' + total/100 );
  }

  function testNumberOk( number, difficulty ) {
    var total = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 99; i >= 0; i--) {
      for (var j = 2; j >= 0; j--) {
        var result = physicalShotCalculator.simulateShoot( {
          'points' : number,
          'target' : 'triple'
        });
        if ( result.target == number ) {
          total += 1;
        }
      };
    };
    console.log( number + ' zone with difficulty '+difficulty+': ' + total/100 );
  }

});
