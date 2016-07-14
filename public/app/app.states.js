(function () {
    'use strict';

    angular.module('addressDB')
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

                .state('404', {
                    url: '/404',
                    templateUrl: 'app/shared/404/404.html'
                });
        }]);
})();