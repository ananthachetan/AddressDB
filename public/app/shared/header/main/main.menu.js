(function () {
    'use strict';

    angular.module('addressDB')

        .directive('mainMenu', MainMenuDirective);

    function MainMenuDirective() {
            var directive = {
                templateUrl: 'app/shared/header/main/main.menu.html',
                restrict: 'AE',
                scope:{},
                controller: MainMenuController,
                controllerAs: 'vm',
                bindToController: {
                    page: '@'
                }
            };

            return directive;
        }

    MainMenuController.$inject = ['AuthService','$state'];
    
    function MainMenuController(authService, $state) {
        var vm = this;

        vm.isNavCollapsed = true;

        vm.logOut = function(){
            authService.logout();
            $state.go('home');
        }
    }
})();


