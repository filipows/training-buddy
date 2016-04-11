'use strict';
import './app.component.scss';
import {trainingBuddyModule} from './module.js';
import './dashboard/dashboard.component';
import './workouts/workouts.component';


trainingBuddyModule.component('app', {
  template: `
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">
              <span class="brand-text">Training Buddy
                <sup>beta</sup>
              </span>
            </a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a ng-link="['Dashboard']" >Dashboard</a></li>
              <li><a ng-link="['Workouts']">Workouts</a></li>
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Profile &nbsp;<i class="fa fa-user"></i><span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu" style="min-width: 210px;">
                    <li><a href="#"><i class="fa fa-question-circle-o fa-fw"></i>&nbsp; Help</a> </li>
                    <li><a href="mailto:support@trainingbuddy.com"><i class="fa fa-envelope fa-fw"></i>&nbsp; Contact support</a> </li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Account</li>
                    <li><a href="#"><i class="fa fa-gear fa-fw"></i>&nbsp; Settings</a></li>
                    <li><a href="logout"><i class="fa fa-sign-out fa-fw"></i>&nbsp; Logout</a></li>
                  </ul>
              </li>
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
    {path: '/dashboard', name: 'Dashboard', component: 'dashboard', useAsDefault: true},
    {path: '/workouts/...',  name: 'Workouts',  component: 'workouts'},
    {path: '/**', redirectTo: ['Dashboard']}
  ]
});