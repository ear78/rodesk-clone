angular.module('noServer', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: 'views/home.html'
        })
        .state('culture', {
            url: '/culture',
            controller: 'cultureCtrl',
            templateUrl: 'views/culture.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'contactCtrl',
            templateUrl: 'views/contact.html'
        })
    })
