(function () {
    'use strict';

    angular.module('addressDB')

        .directive('loginView', loginDirective);

    function loginDirective() {
        var directive = {
            templateUrl: 'app/components/login/login.html',
            restrict: 'AE',
            scope: {},
            controller: LoginController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    LoginController.$inject = ['AuthService','$state','$stateParams'];

    function LoginController(authService, $state, $stateParams) {
        var vm = this;

        vm.formTitle = 'Login';
        vm.user = {
            validationMsg: '',
            emailID: '',
            password: ''
        };

        vm.submitLoginForm = function () {
            authService.login(vm.user)
                .then(function (firebaseUser) {
                    if ($stateParams.toWhere != null) {
                        $state.go($stateParams.toWhere.name);
                    } else {
                        console.log("Signed in as:", JSON.stringify(firebaseUser));
                        $state.go('addressList');
                    }
                }).catch(function (error) {
                console.error("Authentication failed:", error);
                vm.user.validationMsg = error.message;
            });
        }
    }

})();
