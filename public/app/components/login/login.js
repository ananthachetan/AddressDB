(function () {
    'use strict';

    angular.module('addressDB')

        .directive('loginView', [function () {
            return {
                templateUrl: 'app/components/login/login.html',
                restrict: 'AE'
            };
        }]);
})();
