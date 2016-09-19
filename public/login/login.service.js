'use strict';

(function() {

    angular
        .module('elma')
        .factory('loginService', loginService);

    loginService.$inject = ['$resource'];

    function loginService($resource) {

        var url = "http://demo.elma-bpm.com/API/REST/Authorization/LoginWith";

        return $resource(url, {username: '@username'}, {
            'auth': {
                method: 'POST'
            }
        });
    }
})();