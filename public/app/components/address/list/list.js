(function(){
    'use strict';

    angular.module('addressDB')

        .directive('addressList', [function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/address/list/list.html',
                scope:{},
                controller: AddressListController,
                controllerAs: 'vm',
                bindToController: {
                    userDetails: '='
                }
            }
        }]);

    ////

    AddressListController.inject = ['$log'];
    function AddressListController($log) {
        var vm = this;
        $log.info("User Details: " + JSON.stringify(vm.userDetails));
    }

})();
