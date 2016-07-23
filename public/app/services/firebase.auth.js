(function () {
    'use strict';

    angular.module('addressDB')

        .factory('Auth', ['$firebaseAuth','CONFIG', function ($firebaseAuth, CONFIG) {
            var ref = new Firebase(CONFIG.FirebaseURL);
            var auth = $firebaseAuth(ref);
            return auth;
        }])

})();
