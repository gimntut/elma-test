'use strict';

(function() {

    angular
        .module('elma')
        .component('login', {
            templateUrl: 'login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        });
})();