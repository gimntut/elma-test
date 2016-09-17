'use strict';

(function() {

    angular
        .module('elma')
        .config(configure);

    function configure($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';


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