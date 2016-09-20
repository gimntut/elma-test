'use strict';

(function() {

    angular
        .module('elma')
        .factory('loginService', loginService);

    loginService.$inject = ['$resource'];

    function loginService($resource) {

        var url = "http://demo.elma-bpm.com/API/REST/Authorization/LoginWith",
            appToken = "FAAD73FBF88B3D3126EC2A19A101C0F50E11906D93AF8B21CE679325FAA6E1BD033BC31F373FF298C589CABF7C33B683800B00619C9597C8D91E961D9080BF8E";

        return $resource(url, {username: '@username'}, {
            'auth': {
                method: 'POST',
                headers: { 
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                    'ApplicationToken': appToken
                }
            }
        });
    }
})();