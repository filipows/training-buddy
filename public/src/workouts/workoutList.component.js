'use strict';
import './workoutList.component.scss';
import {trainingBuddyModule} from '../module';

class WorkoutListComponent {
  constructor() {
    console.log('workout list controller')
  }
}

trainingBuddyModule.component('workoutList', {
  template: `
  <span>ng repeat here</span>
  <ul>
    <li>workout 1</li>
    <li>workout 2</li>
    <li>workout 4</li>
  </ul>`,
  controller: WorkoutListComponent
});
