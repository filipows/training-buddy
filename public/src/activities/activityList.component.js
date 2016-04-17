'use strict';
import {trainingBuddyModule} from '../module';

class ActivityListComponent {
  constructor() {
  }
}

trainingBuddyModule.component('activityList', {
  template: `
  <button class="btn btn-primary btn-add-new" ng-link="['ActivityNew']"><i class="fa fa-plus"></i>&nbsp; Add new activity</button>
  `,
  controller: ActivityListComponent
});
