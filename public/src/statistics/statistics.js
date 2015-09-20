'use strict';

var apiUrl = '/api/v1'

angular.module('trainingBuddy.statisticsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/statistics', {
    templateUrl: './src/statistics/statistics.html',
    controller: 'StatisticsCtrl'
  });
}])

.controller('StatisticsCtrl', function($scope, $http) {
  $http.get(apiUrl + '/exercises').then(
    function(response) {
      $scope.exercises = response.data;
    },
    function(error){
      console.log(error);
    }
  );

  $scope.remove = function(exerciseId){
    var position;
    $scope.exercises.forEach(function(exercise, index){
      if (exercise._id === exerciseId) {
        position = index;
      }
    });
    $scope.exercises.splice(position,1);

    $http.delete(apiUrl + '/exercises/' + exerciseId).then(
      function(successResponse){
        console.log(successResponse);
    },
      function(errorResponse){
        console.log(errorResponse);
    });
  }
});