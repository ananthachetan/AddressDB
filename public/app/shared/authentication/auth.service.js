(function() {
  'use strict';

  angular.module('addressDB')
    .factory('AuthService', ['$firebaseAuthService', function($firebaseAuthService) {

      return {
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail
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

      // any time auth state changes, add the user data to scope
      $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
      });

    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }

  }]);

})();