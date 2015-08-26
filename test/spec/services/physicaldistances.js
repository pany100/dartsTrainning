'use strict';

describe('Service: physicalDistances', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var physicalDistances;
  beforeEach(inject(function (_physicalDistances_) {
    physicalDistances = _physicalDistances_;
  }));

  it('should do something', function () {
    expect(!!physicalDistances).toBe(true);
  });

  it('test coordinates for triple 20', function () {
    var result = physicalDistances.getOptimalDistanceForTarget( 'triple', '20' );
    expect(result.x >= 0 && result.x <= 0.000000001).toBeTruthy();
    expect(result.y >= 102.4 && result.y <= 102.4000000001).toBeTruthy();
  });

  it('test coordinates for triple 19', function () {
    var result = physicalDistances.getOptimalDistanceForTarget( 'triple', '19' );
    expect(result.x <= -31.64 && result.x >= -31.65).toBeTruthy();
    expect(result.y <= -97.38 && result.y >= -97.39).toBeTruthy();
  });

  it('test coordinates for bull', function () {
    var result = physicalDistances.getOptimalDistanceForTarget( 'bull', '20' );
    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
  });

  it('test coordinates for double 20', function () {
    var result = physicalDistances.getOptimalDistanceForTarget( 'double', '20' );
    expect(result.x >= 0 && result.x <= 0.000000001).toBeTruthy();
    expect(result.y).toBe(165);
  });

  it('test coordinates for outer', function () {
    var result = physicalDistances.getOptimalDistanceForTarget( 'outer', '15' );
    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
  });

  it('test zone ok on triple 20', function () {
    var result = physicalDistances.getZoneOnDartboard( 0 , 100 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('20');
  });

  it('test zone ok on single 11', function () {
    var result = physicalDistances.getZoneOnDartboard( -120 , 0 );
    expect(result.points).toBe('bigSingle');
    expect(result.target).toBe('11');
  });

  it('test zone ok on triple 6', function () {
    var result = physicalDistances.getZoneOnDartboard( 100 , 0 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('6');
  });

  it('test zone ok on triple 3', function () {
    var result = physicalDistances.getZoneOnDartboard( 0 , -100 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('3');
  });

  it('test zone ok on triple 1', function () {
    var result = physicalDistances.getZoneOnDartboard( 31 , 97 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('1');
  });

  it('test zone ok on triple 4', function () {
    var result = physicalDistances.getZoneOnDartboard( 81 , 60 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('4');
  });

  it('test zone ok on triple 19', function () {
    var result = physicalDistances.getZoneOnDartboard( -31 , -97 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('19');
  });

  it('test zone ok on bigSingle 19', function () {
    var result = physicalDistances.getZoneOnDartboard( -41 , -107 );
    expect(result.points).toBe('bigSingle');
    expect(result.target).toBe('19');
  });

  it('test zone ok on doble 19', function () {
    var result = physicalDistances.getZoneOnDartboard( -65 , -147 );
    expect(result.points).toBe('double');
    expect(result.target).toBe('19');
  });

  it('test zone ok on triple 16', function () {
    var result = physicalDistances.getZoneOnDartboard( -81 , -60 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('16');
  });

  it('test zone ok on triple 9', function () {
    var result = physicalDistances.getZoneOnDartboard( -81 , 60 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('9');
  });

  it('test zone ok on triple 17', function () {
    var result = physicalDistances.getZoneOnDartboard( 30 , -100 );
    expect(result.points).toBe('triple');
    expect(result.target).toBe('17');
  });

  it('test zone out', function () {
    var result = physicalDistances.getZoneOnDartboard( 30 , -2100 );
    expect(result.points).toBe('out');
    expect(result.target).toBe('out');
  });





});
