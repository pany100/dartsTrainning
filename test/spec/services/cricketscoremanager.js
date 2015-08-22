'use strict';

describe('Service: cricketScoreManager', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var cricketScoreManager;
  beforeEach(inject(function (_cricketScoreManager_) {
    cricketScoreManager = _cricketScoreManager_;
  }));

  it('should do something', function () {
    expect(!!cricketScoreManager).toBe(true);
  });

  it('close 20 test', function () {
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getValuesForPoint('user', 20)).toBe(3);
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(60);
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
    cricketScoreManager.processPoint('pc', 'double', 20);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 20)).toBe(2);
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
    cricketScoreManager.processPoint('pc', 'double', 20);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
  })

  it('close 19 test', function () {
    cricketScoreManager.processPoint('pc', 'double', 19);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'double', 19);
    expect(cricketScoreManager.getUserScore('pc')).toBe(19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    cricketScoreManager.processPoint('user', 'triple', 19);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
  })

  it('close 18 test', function () {
    cricketScoreManager.processPoint('pc', 'double', 18);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'double', 18);
    expect(cricketScoreManager.getUserScore('pc')).toBe(18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
  })

  it('close 17 test', function () {
    cricketScoreManager.processPoint('pc', 'double', 17);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'double', 17);
    expect(cricketScoreManager.getUserScore('pc')).toBe(17);
    cricketScoreManager.processPoint('pc', 'double', 17);
    expect(cricketScoreManager.getUserScore('pc')).toBe(51);
    cricketScoreManager.processPoint('user', 'triple', 17);
    cricketScoreManager.processPoint('user', 'triple', 17);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
  })

  it('close 16 test', function () {
    cricketScoreManager.processPoint('pc', 'double', 16);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'double', 16);
    expect(cricketScoreManager.getUserScore('pc')).toBe(16);
    cricketScoreManager.processPoint('user', 'triple', 16);
    cricketScoreManager.processPoint('user', 'triple', 16);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
  })

  it('close 15 test', function () {
    cricketScoreManager.processPoint('pc', 'double', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'double', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(15);
    cricketScoreManager.processPoint('user', 'triple', 15);
    cricketScoreManager.processPoint('user', 'triple', 15);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
  })

  it('close center test', function () {
    cricketScoreManager.processPoint('pc', 'bull', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'outer', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('pc', 'bull', 20);
    expect(cricketScoreManager.getUserScore('pc')).toBe(50);
    cricketScoreManager.processPoint('user', 'bull', 15);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
    cricketScoreManager.processPoint('pc', 'outer', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(75);
    cricketScoreManager.processPoint('user', 'bull', 15);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
    cricketScoreManager.processPoint('pc', 'outer', 15);
    expect(cricketScoreManager.getUserScore('pc')).toBe(75);
  })

  it('simulate cricket closed and restart', function () {
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getValuesForPoint('user', 20)).toBe(3);

    cricketScoreManager.processPoint('pc', 'triple', 20);
    expect(cricketScoreManager.getValuesForPoint('pc', 20)).toBe(3);

    cricketScoreManager.processPoint('user', 'triple', 18);
    expect(cricketScoreManager.getValuesForPoint('user', 18)).toBe(3);

    cricketScoreManager.processPoint('pc', 'triple', 18);
    expect(cricketScoreManager.getValuesForPoint('pc', 18)).toBe(3);

    cricketScoreManager.processPoint('user', 'triple', 19);
    expect(cricketScoreManager.getValuesForPoint('user', 19)).toBe(3);

    cricketScoreManager.processPoint('pc', 'triple', 19);
    expect(cricketScoreManager.getValuesForPoint('pc', 19)).toBe(3);

    cricketScoreManager.processPoint('user', 'triple', 17);
    expect(cricketScoreManager.getValuesForPoint('user', 17)).toBe(3);

    cricketScoreManager.processPoint('pc', 'triple', 17);
    expect(cricketScoreManager.getValuesForPoint('pc', 17)).toBe(3);

    cricketScoreManager.processPoint('user', 'triple', 16);
    expect(cricketScoreManager.getValuesForPoint('user', 16)).toBe(3);
    cricketScoreManager.processPoint('pc', 'triple', 16);
    expect(cricketScoreManager.getValuesForPoint('pc', 16)).toBe(3);

    cricketScoreManager.processPoint('user', 'triple', 15);
    expect(cricketScoreManager.getValuesForPoint('user', 15)).toBe(3);
    cricketScoreManager.processPoint('pc', 'triple', 15);
    expect(cricketScoreManager.getValuesForPoint('pc', 15)).toBe(3);

    expect(cricketScoreManager.getUserScore('user')).toBe(0);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);
    cricketScoreManager.processPoint('user', 'bull', 15);
    cricketScoreManager.processPoint('user', 'bull', 15);

    expect(cricketScoreManager.getUserScore('user')).toBe(50);
    expect(cricketScoreManager.getValuesForPoint('user', 20)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 20)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('user', 18)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 18)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('user', 19)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 19)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('user', 17)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 17)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('user', 16)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 16)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('user', 15)).toBe(0);
    expect(cricketScoreManager.getValuesForPoint('pc', 15)).toBe(0);
  })

  it('simulate complete game and user won', function () {
    //First shoot
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getValuesForPoint('user', 20)).toBe(3);
    expect(cricketScoreManager.getUserScore('user')).toBe(0);
    cricketScoreManager.processPoint('pc', 'triple', 19);
    expect(cricketScoreManager.getValuesForPoint('pc', 19)).toBe(3);
    expect(cricketScoreManager.getUserScore('pc')).toBe(0);

    //Second
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(60);
    cricketScoreManager.processPoint('pc', 'triple', 19);
    expect(cricketScoreManager.getUserScore('pc')).toBe(57);

    //third
    cricketScoreManager.processPoint('user', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
    cricketScoreManager.processPoint('pc', 'double', 19);
    expect(cricketScoreManager.getUserScore('pc')).toBe(95);

    //fourth
    cricketScoreManager.processPoint('pc', 'triple', 20);
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
    cricketScoreManager.processPoint('pc', 'bigSingle', 19);
    expect(cricketScoreManager.getUserScore('pc')).toBe(114);

    //fifth
    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    expect(cricketScoreManager.getUserScore('user')).toBe(228);

    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    cricketScoreManager.processPoint('user', 'triple', 18);
    expect(cricketScoreManager.hasUserWon('user')).toBe(true);

  })

});
