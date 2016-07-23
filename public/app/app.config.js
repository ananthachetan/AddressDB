(function () {
    'use strict';

    angular.module('addressDB', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'firebase'
    ])
        .constant('CONFIG', {
            'ImagesLocation' : 'assets/img',
            'FirebaseURL' : 'https://addressdb-37891.firebaseio.com/'
        });

})();


