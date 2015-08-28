'use strict';

describe('Directive: dartAnimation', function () {

  // load the directive's module
  beforeEach(module('dartTrainningApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dart-animation></dart-animation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dartAnimation directive');
  }));
});
