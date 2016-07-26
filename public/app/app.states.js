(function () {
    'use strict';

    angular.module('addressDB')

        .run(["$rootScope", "$state", function($rootScope, $state) {

            $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
                if (error === "AUTH_REQUIRED") {
                    $state.go('login');
                }
            });
        }])


        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            // any unknown URLS go to 404
            $urlRouterProvider.otherwise('/404');
            // no route goes to index
            $urlRouterProvider.when('', '/');

            // use a state provider for routing
            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<home-view></home-view>'
                })

                .state('login', {
                    url: '/login',
                    template: '<login-view></login-view>'
                })

                .state('addressList', {
                    url: '/address/list',
                    template: '<address-list></address-list>'
                })

                .state('404', {
                    url: '/404',
                    templateUrl: 'app/shared/404/404.html'
                });
        }]);
})();