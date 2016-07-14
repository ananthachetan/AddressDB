(function () {
    'use strict';

    angular.module('addressDB')

        .directive('mainMenu',[function () {
            return{
                templateUrl: 'app/shared/header/main/main.menu.html',
                restrict: 'AE'
            };
        }]);
})();


