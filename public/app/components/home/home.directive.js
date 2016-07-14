(function () {
    'use strict';
    angular.module('addressDB')

        .directive('homeView', ['CONFIG', function (config) {
            return {
                templateUrl: 'app/components/home/home.view.html',
                restrict: 'AE',
                link:function ($scope, $elements, $attrs) {
                    $scope.imageLocation = config.ImagesLocation + "/home_image.jpg";
                    $scope.userDetails = {};
                }
            };
        }]);
})();


