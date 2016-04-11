'use strict';
import './workouts.component.scss';
import {trainingBuddyModule} from '../module';
import './workoutList.component';
import './workoutDetail.component';
import './workoutNew.component';

class WorkoutsComponent {
  constructor() {
    console.log('workouts controller');
  }
}


trainingBuddyModule.component('workouts', {
  template: `<h1 class="page-header">Workouts</h1><ng-outlet></ng-outlet>`,
  $routeConfig: [
    {path: '/', name: 'WorkoutList', component: 'workoutList', useAsDefault: true},
    {path: '/:id', name: 'WorkoutDetail', component: 'workoutDetail'},
    {path: '/new', name: 'WorkoutNew', component: 'workoutNew'}
  ],
  controller: WorkoutsComponent
});







