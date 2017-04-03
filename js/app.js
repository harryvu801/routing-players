angular.module('hello-world',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/')

    $stateProvider
      .state('home', {
        url:'/',
        template: '<h1>{{hi}}</h1>',
        controller:'mainCtrl'
      })

    $stateProvider
      .state('about', {
        url:'/about',
        template: '{{about}}',
        controller: 'aboutCtrl'
      })

    $stateProvider
      .state('roster', {
        url:'/roster',
        templateUrl: 'roster.html',
        controller: 'rosterCtrl'
      })

    $stateProvider
      .state('player',{
        url:'/player/:id',
        templateUrl:'player.html',
        controller: 'playerCtrl'
      })
  })
