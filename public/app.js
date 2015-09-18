'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'ui.bootstrap'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);


var apiUrl = '/api/v1';

myApp.controller('TrainingLogCtrl', function($scope, $http) {
  $scope.exercise = {};

  $scope.save = function(exercise) {
    console.log('want to save: ');
    console.log(exercise);
    $http.post(apiUrl + '/exercises', exercise).then(
      function(response) {
        console.log('suceess: ', response);
      }, function(response){
        console.log('error: ', response);
        alert('Error occured ' )
      });
  };
});