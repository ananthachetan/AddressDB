(function () {
    'use strict';

    angular.module('addressDB')

        .factory('AuthService', authService)

        .run(['$rootScope', 'AuthService','$log', function ($rootScope, AuthService, $log) {
            // track status of authentication
            AuthService.firebaseAuthObject.$onAuthStateChanged(function (user) {
                $rootScope.loggedUser = user;
                $log.info("Logged in user: " + JSON.stringify(user))
            });
        }]);

    //////

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {
        var firebaseAuthObject = $firebaseAuth();

        var authService = {
            firebaseAuthObject: firebaseAuthObject,
            getUserData: getUserData,
            register: register,
            login: login,
            logout: logout,
            requireLogin: requireLogin,
            waitForLogin: waitForLogin
        };

        return authService;


        ////////////

        function register(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.emailID, user.password);
        }

        function login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.emailID, user.password);
        }

        function logout() {
            firebaseAuthObject.$signOut();
        }

        function getUserData() {
            return firebaseAuthObject.$getAuth();
        }

        function requireLogin() {
            return firebaseAuthObject.$requireSignIn();
        }

        function waitForLogin() {
            return firebaseAuthObject.$waitForSignIn();
        }
    }

})();
