'use strict';

(function() {

    angular
        .module('elma')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService'];

    function LoginController(loginService) {
        
        var vm = this;

        vm.formData = {};
        vm.formData.username = '',
        vm.formData.passw = '',
        vm.sendAuth = sendAuth;

        function sendAuth() {

            var user = loginService.auth({username: vm.formData.username});
            user.$promise.then(function(r) {
                console.log(r);
            }, function(r) {
                console.log(r);
            });
        }
    }
})();