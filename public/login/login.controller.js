'use strict';

(function() {

    angular
        .module('elma')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService'];

    function LoginController(loginService) {
        
        var vm = this;

        vm.username = '',
        vm.passw = '',
        vm.sendAuth = sendAuth;

        function sendAuth() {
            
            var user = loginService.auth({username: vm.username});
            user.$promise.then(function(r) {
                console.log(r);
            }, function(r) {
                console.log(r);
            });
        }
    }
})();