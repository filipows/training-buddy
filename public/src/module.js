import angular from 'angular';
import angularRouter from '../node_modules/@angular/router/angular1/angular_1_router.js'
//import 'angular-route';
import 'angular-animate';
import 'angular-touch';
import 'angular-ui-bootstrap';

let trainingBuddyModule = angular.module('trainingBuddy', [
  'ngComponentRouter',
  'ui.bootstrap'
]).config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }])
  .value('$routerRootComponent', 'app'); // is it needed? seems to work without

export {trainingBuddyModule};

angular.element(document).ready(function() {
  angular.bootstrap(document, ['trainingBuddy'])
});