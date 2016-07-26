(function(){
    'use strict';

    angular.module('addressDB')

        .directive('addressList', [function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/address/list/list.html',
                link: function ($scope, $attrs, $elements) {
                    console.log("Im here");
                }
            }
        }]);

})();
