'use strict';
import {trainingBuddyModule} from '../module';

import './activityList.component';
import './activityNew.component';

class ActivitiesComponent {
  constructor() {
    console.log('activities controller');
  }
}


trainingBuddyModule.component('activities', {
  template: `<h1 class="page-header">Activities</h1><ng-outlet></ng-outlet>`,
  $routeConfig: [
    {path: '/', name: 'ActivityList', component: 'activityList', useAsDefault: true},
    {path: '/new', name: 'ActivityNew', component: 'activityNew'}
  ],
  controller: ActivitiesComponent
});







