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

  it('result for bull', function () {
    var result = dartboardDistances.getResult(1500, 80000);
    expect(result.points).toBe('bull');
  })

  it('result for outer', function () {
    var result = dartboardDistances.getResult(8500, 80000);
    expect(result.points).toBe('outer');
  })

  it('result for t20', function () {
    var result = dartboardDistances.getResult(100000, 80000);
    expect(result.points).toBe('triple');
    expect(result.target).toBe('20');
  })

  it('result for d20', function () {
    var result = dartboardDistances.getResult(165000, 80000);
    expect(result.points).toBe('double');
    expect(result.target).toBe('20');
  })

  it('result for single 20', function () {
    var result = dartboardDistances.getResult(155000, 80000);
    expect(result.points).toBe('bigSingle');
    expect(result.target).toBe('20');
  })

  it('single match with negative radians', function () {
    var result = dartboardDistances.getResult(21736, -32585);
    expect(result.points).toBe('smallSingle');
    expect(result.target).toBe('8');
  })

  it('result for single 20', function () {
    var result = dartboardDistances.getResult(20000, 80000);
    expect(result.points).toBe('smallSingle');
    expect(result.target).toBe('20');
  })

  it('result for single 5', function () {
    var result = dartboardDistances.getResult(155000, 60000);
    expect(result.points).toBe('bigSingle');
    expect(result.target).toBe('5');
  })

  it('testDistance for bull', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bull', undefined);
    expect(result.distance).toBe(0);
  })

  it('testDistance for outer', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('outer', undefined);
    expect(result.distance).toBe(0);
  })

  it('testDistance for smallSingle 1', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 1);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(98999.5);
  })

  it('testDistance for triple 1', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 1);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(98999.5);
  })

  it('testDistance for bigSingle 1', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 1);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(98999.5);
  })

  it('testDistance for double 1', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 1);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(98999.5);
  })

   it('testDistance for smallSingle 2', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 2);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(224999.5);
  })

  it('testDistance for triple 2', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 2);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(224999.5);
  })

  it('testDistance for bigSingle 2', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 2);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(224999.5);
  })

  it('testDistance for double 2', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 2);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(224999.5);
  })

   it('testDistance for smallSingle 3', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 3);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(260999.5);
  })

  it('testDistance for triple 3', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 3);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(260999.5);
  })

  it('testDistance for bigSingle 3', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 3);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(260999.5);
  })

  it('testDistance for double 3', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 3);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(260999.5);
  })

   it('testDistance for smallSingle 4', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 4);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(134999.5);
  })

  it('testDistance for triple 4', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 4);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(134999.5);
  })

  it('testDistance for bigSingle 4', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 4);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(134999.5);
  })

  it('testDistance for double 4', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 4);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(134999.5);
  })

   it('testDistance for smallSingle 5', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 5);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(62999.5);
  })

  it('testDistance for triple 5', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 5);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(62999.5);
  })

  it('testDistance for bigSingle 5', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 5);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(62999.5);
  })

  it('testDistance for double 5', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 5);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(62999.5);
  })

   it('testDistance for smallSingle 6', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 6);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(170999.5);
  })

  it('testDistance for triple 6', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 6);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(170999.5);
  })

  it('testDistance for bigSingle 6', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 6);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(170999.5);
  })

  it('testDistance for double 6', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 6);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(170999.5);
  })

   it('testDistance for smallSingle 7', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 7);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(296999.5);
  })

  it('testDistance for triple 7', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 7);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(296999.5);
  })

  it('testDistance for bigSingle 7', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 7);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(296999.5);
  })

  it('testDistance for double 7', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 7);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(296999.5);
  })

   it('testDistance for smallSingle 8', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 8);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(332999.5);
  })

  it('testDistance for triple 8', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 8);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(332999.5);
  })

  it('testDistance for bigSingle 8', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 8);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(332999.5);
  })

  it('testDistance for double 8', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 8);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(332999.5);
  })

   it('testDistance for smallSingle 9', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 9);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(26999.5);
  })

  it('testDistance for triple 9', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 9);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(26999.5);
  })

  it('testDistance for bigSingle 9', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 9);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(26999.5);
  })

  it('testDistance for double 9', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 9);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(26999.5);
  })

   it('testDistance for smallSingle 10', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 10);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(188999.5);
  })

  it('testDistance for triple 10', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 10);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(188999.5);
  })

  it('testDistance for bigSingle 10', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 10);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(188999.5);
  })

  it('testDistance for double 10', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 10);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(188999.5);
  })

   it('testDistance for smallSingle 11', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 11);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(351000);
  })

  it('testDistance for triple 11', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 11);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(351000);
  })

  it('testDistance for bigSingle 11', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 11);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(351000);
  })

  it('testDistance for double 11', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 11);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(351000);
  })


   it('testDistance for smallSingle 12', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 12);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(44999.5);
  })

  it('testDistance for triple 12', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 12);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(44999.5);
  })

  it('testDistance for bigSingle 12', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 12);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(44999.5);
  })

  it('testDistance for double 12', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 12);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(44999.5);
  })

   it('testDistance for smallSingle 13', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 13);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(152999.5);
  })

  it('testDistance for triple 13', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 13);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(152999.5);
  })

  it('testDistance for bigSingle 13', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 13);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(152999.5);
  })

  it('testDistance for double 13', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 13);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(152999.5);
  })

   it('testDistance for smallSingle 14', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 14);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(8999.5);
  })

  it('testDistance for triple 14', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 14);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(8999.5);
  })

  it('testDistance for bigSingle 14', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 14);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(8999.5);
  })

  it('testDistance for double 14', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 14);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(8999.5);
  })

   it('testDistance for smallSingle 15', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 15);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(206999.5);
  })

  it('testDistance for triple 15', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 15);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(206999.5);
  })

  it('testDistance for bigSingle 15', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 15);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(206999.5);
  })

  it('testDistance for double 15', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 15);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(206999.5);
  })

   it('testDistance for smallSingle 16', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 16);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(314999.5);
  })

  it('testDistance for triple 16', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 16);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(314999.5);
  })

  it('testDistance for bigSingle 16', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 16);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(314999.5);
  })

  it('testDistance for double 16', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 16);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(314999.5);
  })

   it('testDistance for smallSingle 17', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 17);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(242999.5);
  })

  it('testDistance for triple 17', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 17);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(242999.5);
  })

  it('testDistance for bigSingle 17', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 17);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(242999.5);
  })

  it('testDistance for double 17', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 17);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(242999.5);
  })

   it('testDistance for smallSingle 18', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 18);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(116999.5);
  })

  it('testDistance for triple 18', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 18);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(116999.5);
  })

  it('testDistance for bigSingle 18', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 18);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(116999.5);
  })

  it('testDistance for double 18', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 18);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(116999.5);
  })

   it('testDistance for smallSingle 19', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 19);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(278999.5);
  })

  it('testDistance for triple 19', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 19);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(278999.5);
  })

  it('testDistance for bigSingle 19', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 19);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(278999.5);
  })

  it('testDistance for double 19', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 19);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(278999.5);
  })


   it('testDistance for smallSingle 20', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('smallSingle', 20);
    expect(result.distance).toBe(56638);
    expect(result.radians).toBe(80999.5);
  })

  it('testDistance for triple 20', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('triple', 20);
    expect(result.distance).toBe(102400.5);
    expect(result.radians).toBe(80999.5);
  })

  it('testDistance for bigSingle 20', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('bigSingle', 20);
    expect(result.distance).toBe(133700.5);
    expect(result.radians).toBe(80999.5);
  })

  it('testDistance for double 20', function () {
    var result = dartboardDistances.getOptimalDistanceForTarget('double', 20);
    expect(result.distance).toBe(165000.5);
    expect(result.radians).toBe(80999.5);
  })


});
