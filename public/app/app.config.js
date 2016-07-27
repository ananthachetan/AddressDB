(function () {
    'use strict';

    angular.module('addressDB', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'firebase'
    ])
        .constant('CONFIG', {
            'ImagesLocation' : 'assets/img'
        });

})();


