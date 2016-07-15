(function () {
    'use strict';

    angular.module('addressDB')

        .directive('mainMenu',[function () {
            return{
                templateUrl: 'app/shared/header/main/main.menu.html',
                restrict: 'AE',
                scope: {
                    userInfo: '='
                },
                link: function ($scope, $elements, $attr) {
                    $scope.isNavCollapsed = true;
                    $scope.isLoggedIn = Object.keys($scope.userInfo).length != 0;
                }
            };
        }]);
})();


