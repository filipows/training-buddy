'use strict';

var apiUrl = '/api/v1';

angular.module('trainingBuddy.newWorkoutView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: './src/newWorkout/newWorkout.html', // [TODO]: should be directive here
    controller: 'NewWorkoutCtrl'
  });
}])

.controller('NewWorkoutCtrl', function($scope, $http) {
    $scope.workout = {
        exercises: []
    };

    $scope.save = function(workout) {
      $http.post(apiUrl + '/workouts', workout).then(
        function(response) {
          console.log('successfully saved: ', workout);
        }, function(response){
          console.log('error: ', response);
          alert('Error occured ')
        });
    };

    $scope.addExercise = function(){
        $scope.workout.exercises.push({});
    }
});