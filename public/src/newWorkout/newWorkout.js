'use strict';

var apiUrl = '/api/v1';

angular.module('trainingBuddy.newWorkoutView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: './src/newWorkout/newWorkout.html',
    controller: 'NewWorkoutCtrl'
  });
}])

.controller('NewWorkoutCtrl', function($scope, $http) {
    $scope.exercise = {};

    $scope.save = function(exercise) {
      $http.post(apiUrl + '/exercises', exercise).then(
        function(response) {
          console.log('successfully saved: ', exercise);
        }, function(response){
          console.log('error: ', response);
          alert('Error occured ' )
        });
    };
});