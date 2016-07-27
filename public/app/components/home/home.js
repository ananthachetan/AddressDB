(function () {
    'use strict';
    angular.module('addressDB')

        .directive('homeView', [function () {
            return {
                templateUrl: 'app/components/home/homepage.html',
                restrict: 'AE',
                scope: {},
                controller: HomeController,
                controllerAs: 'vm',
                bindToController: true
            };
        }]);

    function HomeController() {
        var vm = this;
        vm.userDetails = {};
    }
})();


