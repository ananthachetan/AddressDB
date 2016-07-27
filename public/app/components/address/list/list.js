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
                bindToController: true
            }
        }]);

    ////

    function AddressListController() {
        var vm = this;
        console.log("Im here");
    }

})();
