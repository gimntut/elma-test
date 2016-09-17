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
            
            console.log(this);

            var user = loginService.auth(JSON.stringify(vm.formData));
            user.$promise.then(function(r) {
                console.log(r);
            }, function(r) {
                console.log(r);
            });
        }
    }
})();