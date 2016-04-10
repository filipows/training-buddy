'use strict';
import './dashboard.component.scss';
import {trainingBuddyModule} from '../module';

trainingBuddyModule.component('dashboard', {
  template: `<h1 class="page-header">Dashboard </h1>`,  //<p>Hello, {{ $ctrl.user.name }} !</p>
  controller: function(){
    console.log('dashboard');
  }
});