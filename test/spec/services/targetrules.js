'use strict';

describe('Service: targetRules', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var targetRules;
  beforeEach(inject(function (_targetRules_, _cricketScoreManager_) {
    targetRules = _targetRules_;
    cricketScoreManager = _cricketScoreManager_;
  }));

  it('should do something', function () {
    expect(!!targetRules).toBe(true);
  });

  it('aggresive strategy', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    var target = targetRules.pickTarget();
    expect(target.points).toBe(20);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('user', 'triple', 20);
    target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('user', 'triple', 20);
    cricketScoreManager.processPoint('user', 'triple', 20);
    cricketScoreManager.processPoint('user', 'triple', 20);
    target = targetRules.pickTarget();
    expect(target.points).toBe(20);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('user', 'triple', 20);
    target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('user', 'triple', 19);
    target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 17);
    cricketScoreManager.processPoint('user', 'triple', 16);
    cricketScoreManager.processPoint('user', 'bull', 18);
    cricketScoreManager.processPoint('user', 'outer', 18);

    target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    target = targetRules.pickTarget();
    expect(target.points).toBe(18);
    expect(target.target).toBe('triple');

    cricketScoreManager.processPoint('pc', 'triple', 18);
    target = targetRules.pickTarget();
    expect(target.points).toBe(17);
    expect(target.target).toBe('triple');

    cricketScoreManager.processPoint('pc', 'triple', 17);
    target = targetRules.pickTarget();
    expect(target.points).toBe(16);
    expect(target.target).toBe('triple');

    cricketScoreManager.processPoint('pc', 'triple', 16);
    target = targetRules.pickTarget();
    expect(target.target).toBe('bull');

    cricketScoreManager.processPoint('pc', 'bull', 16);
    cricketScoreManager.processPoint('pc', 'bull', 16);
    target = targetRules.pickTarget();
    expect(target.points).toBe(15);
    expect(target.target).toBe('triple');
    cricketScoreManager.processPoint('pc', 'triple', 15);
    target = targetRules.pickTarget();
    expect(target.points).toBe(20);
    expect(target.target).toBe('triple');

  })

 it('aggresive strategy', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    cricketScoreManager.processPoint('pc', 'triple', 20);
    cricketScoreManager.processPoint('pc', 'triple', 20);
    cricketScoreManager.processPoint('pc', 'triple', 20);
    cricketScoreManager.processPoint('pc', 'triple', 20);
    cricketScoreManager.processPoint('pc', 'triple', 20);
    var target = targetRules.pickTarget();
    expect(target.points).toBe(20);
    expect(target.target).toBe('triple');

    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    var target = targetRules.pickTarget();
    expect(target.points).toBe(19);
    expect(target.target).toBe('triple');

  })



});
