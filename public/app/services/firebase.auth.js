(function () {
    'use strict';

    angular.module('addressDB')

        .run(['$rootScope', 'AuthService', function ($rootScope, AuthService) {
            // track status of authentication
            AuthService.authService.$onAuthStateChanged(function (user) {
                $rootScope.loggedUser = user;
            });
        }])

        .factory('AuthService', ['$firebaseAuthService', function ($firebaseAuthService) {

            return {
                authService: $firebaseAuthService,
                getUserData: getUserData,
                register: register,
                login: login,
                logout: logout,
                isLoggedIn: isLoggedIn
            };

            ////////////

            function register(user) {
                return $firebaseAuthService.$createUserWithEmailAndPassword(user.email, user.password);
            }

            function login(user) {
                return $firebaseAuthService.$signInWithEmailAndPassword(user.email, user.password);
            }

            function logout() {
                $firebaseAuthService.$signOut();
            }

            function isLoggedIn() {
                return $firebaseAuthService.onAuthStateChanged();
            }

            function getUserData() {
                return $firebaseAuthService.$getAuth();
            }
        }]);

})();
