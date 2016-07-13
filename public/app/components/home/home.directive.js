(function () {
   'use strict';

    angular.module(addressDB)

        .directive('homeView', [function () {
            return{
                templateUrl: 'home.view.html',
                restrict: 'AE'
            }
        }]);

});
