'use strict';

import 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-touch';
import 'angular-ui-bootstrap';

import './test.scss';

// Declare app level module which depends on views, and components
var trainingBuddy = angular.module('trainingBuddy', [
  'ngRoute',
  'ui.bootstrap'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/new'});
  }]);


trainingBuddy.controller('MainCtrl', function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path().indexOf(route) === 0;
  };
});