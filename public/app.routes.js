'use strict';

(function() {

    angular
        .module('elma')
        .config(configure);

    function configure($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

        $httpProvider.defaults.headers.common = { 
            'ApplicationToken': 'FAAD73FBF88B3D3126EC2A19A101C0F50E11906D93AF8B21CE679325FAA6E1BD033BC31F373FF298C589CABF7C33B683800B00619C9597C8D91E961D9080BF8E',
            'Accept': 'application/json;charset=utf-8'
        };
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/json;charset=utf-8'
        };


        $urlRouterProvider.otherwise('login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController as login'
            });
            // .state('result', {
            //     url: '/result?query&result',
            //     templateUrl: 'app/result/result.html',
            //     controller: 'ResultController as result'
            // })
            // .state('answers', {
            //     url: '/answers/:questionId',
            //     templateUrl: 'app/answers/answers.html',
            //     controller: 'AnswersController as answers'
            // });
    }
})();