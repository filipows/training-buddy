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
  $http.get(apiUrl + '/workouts').then(
    function(response) {
      $scope.workouts = response.data;
    },
    function(error){
      console.log(error);
    }
  );
});