'use strict';

import angular from 'angular';
import angularRouter from '../node_modules/@angular/router/angular1/angular_1_router.js'
//import 'angular-route';
import 'angular-animate';
import 'angular-touch';
import 'angular-ui-bootstrap';

import './app.scss';

// Declare app level module which depends on views, and components
var trainingBuddy = angular.module('trainingBuddy', [
  'ngComponentRouter',
  'ui.bootstrap'
]).config(['$locationProvider', function ($locationProvider) {
    //$routeProvider.otherwise({redirectTo: '/dashboard'});
    $locationProvider.html5Mode(true);
  }])
  .value('$routerRootComponent', 'app') // is it needed? seems to work without
  .component('app', {
    template: `
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="navbar-brand">Training Buddy</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a ng-link="['Dashboard']" >Dashboard</a></li>
              <li><a href="#">New workout</a></li>
              <li><a href="#">UserName</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 main">
            <ng-outlet></ng-outlet>
          </div>
        </div>
      </div>
    `,
    $routeConfig: [
      {path: '/dashboard', name: 'Dashboard', component: 'dashboard'},
      //{path: '/*', redirectTo: ['Dashboard']}
    ],
    controller: function() {
      console.log('main');
    }
  });


export {trainingBuddy as module};
import './dashboard/dashboard.component';
