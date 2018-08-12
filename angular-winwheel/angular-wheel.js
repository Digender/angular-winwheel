var ngWheel = angular.module('angularWinwheel', []);

ngWheel.directive('angularWinwheel', function() {
    return {
        templateUrl: './angular-wheel.html',
        restrict: 'E',
        scope: {
          config: '=',
          id: '@',
          height: '@',
          width: '@',
        },
    };
})