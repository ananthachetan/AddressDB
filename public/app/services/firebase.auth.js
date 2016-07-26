(function () {
    'use strict';

    angular.module('addressDB')

        .config(['$firebaseRefProvider', 'CONFIG', function ($firebaseRefProvider, CONFIG) {
            $firebaseRefProvider.registerUrl(CONFIG.FirebaseURL);
        }]);

})();
