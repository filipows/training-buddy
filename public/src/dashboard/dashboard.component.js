'use strict';
import './dashboard.component.scss';
import {trainingBuddyModule} from '../module';

class DashboardComponent {
  constructor() {
    console.log('dashboard controller');
  }
}

trainingBuddyModule.component('dashboard', {
  template: `<h1 class="page-header">Dashboard </h1>`,
  controller: DashboardComponent
});