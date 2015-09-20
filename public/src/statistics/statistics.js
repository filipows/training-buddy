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
});