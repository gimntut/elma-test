'use strict';

(function() {

    angular
        .module('elma')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService'];

    function LoginController(loginService) {
        
        var vm = this;

        console.log(this);
    }
})();