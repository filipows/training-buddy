import angular from 'angular';
import angularRouter from '@angular/router/angular1/angular_1_router.js';

import 'angular-animate';
import 'angular-touch';
import 'angular-ui-bootstrap';
import 'ng-tags-input';
import 'angular-ui-select/select.min';
import 'angular-sanitize';

let trainingBuddyModule = angular.module('trainingBuddy', [
  'ngComponentRouter',
  'ui.bootstrap',
  'ngTagsInput',
  'ui.select',
  'ngSanitize'
]).config(['$locationProvider', function ($locationProvider) {
    //$locationProvider.html5Mode(true);  // TODO: couldn't logout on main page if it's on
  }])
  .value('$routerRootComponent', 'app'); // is it needed? seems to work without

angular.element(document).ready(function() {
  angular.bootstrap(document, ['trainingBuddy'])
});

export {trainingBuddyModule};
