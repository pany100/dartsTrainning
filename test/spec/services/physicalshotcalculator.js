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

  function testExactValueWithDifficulty ( number, points, difficulty ) {
    var expectedValues =
      {
        'points' : points,
        'sum' : 1
      },
      sum = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 210; i >= 0; i--) {
      var result = physicalShotCalculator.simulateShoot( {
        'points' : number,
        'target' : points
      });
      if ( result.points == points ) {
        sum += expectedValues.sum;
      }
    };
    console.log( points + ', '+ number + ' with difficulty '+difficulty+': ' + sum );
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
      sum = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 210; i >= 0; i--) {
      var result = physicalShotCalculator.simulateShoot( {
        'points' : 20,
        'target' : 'bull'
      });
      if ( result.points === expectedValue.points ) {
        sum += expectedValue.sum;
      } else if ( result.points === secExpectedValue.points ) {
        sum += secExpectedValue.sum;
      }
    };
    console.log( 'Bulls with difficulty '+difficulty+': ' + sum );
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
    sum = 0;
    difficultyManager.setDifficulty( difficulty );
    for (var i = 210; i >= 0; i--) {
      var result = physicalShotCalculator.simulateShoot( {
        'points' : number,
        'target' : 'triple'
      });
      if ( result.target == number ) {
        for (var j = expectedValues.length - 1; j >= 0; j--) {
          sum += expectedValues[j].sum;
        };
      }
    };
    console.log( number + ' with difficulty '+difficulty+': ' + sum );
  }

});
