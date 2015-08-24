describe('Service: strategyHandler', function () {

  // load the service's module
  beforeEach(module('dartTrainningApp'));

  // instantiate service
  var strategyHandler;
  beforeEach(inject(function (_strategyHandler_, _cricketScoreManager_) {
    strategyHandler = _strategyHandler_;
    cricketScoreManager = _cricketScoreManager_;
  }));

  it('should do something', function () {
    expect(!!strategyHandler).toBe(true);
  });

  it('aggresive strategy', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
  })

  it('aggresive but losing strategy', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 19);
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
  })

  it('defensive losing for more than 100', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('defensive');
  })

  it('defensive user more than 255', function () {
    cricketScoreManager.startMatch( 'user', 'pc' );
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(cricketScoreManager.getUserScore('user')).toBe(120);
    expect(strategyHandler.getCurrentStrategy()).toBe('defensive');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('defensive');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('pc', 'triple', 19);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(strategyHandler.getCurrentStrategy()).toBe('aggresive');
    cricketScoreManager.processPoint('user', 'triple', 20);
    strategyHandler.changeStrategyIfNeccesary();
    expect(cricketScoreManager.getUserScore('user')).toBe(240);
    expect(cricketScoreManager.getUserScore('pc')).toBe(228);
    expect(strategyHandler.getCurrentStrategy()).toBe('defensive');
  })


});
