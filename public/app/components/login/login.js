(function () {
    'use strict';

    angular.module('addressDB')

        .directive('loginView', ['$firebaseAuthService','$state', function (authService, $state) {
            return {
                templateUrl: 'app/components/login/login.html',
                restrict: 'AE',
                link: function ($scope, $attrs, $elements) {


                    $scope.submitLoginForm = function () {
                        console.log("Im clicked");
                        console.log(JSON.stringify($scope.user));

                        authService.$signInWithEmailAndPassword($scope.user.emailID, $scope.user.password)
                            .then(function (firebaseUser) {
                                console.log("Signed in as:", JSON.stringify(firebaseUser));
                                $state.go("addressList");
                            }).catch(function (error) {
                            console.error("Authentication failed:", error);
                            $scope.user.validationMsg = error.message;
                        });
                    }
                }
            };
        }]);
})();
