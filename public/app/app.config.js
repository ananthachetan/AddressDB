(function () {
    'use strict';

    angular.module('addressDB', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'firebase',
        'ui.grid'
    ])
        .constant('CONFIG', {
            'ImagesLocation' : 'assets/img'
        });

})();


