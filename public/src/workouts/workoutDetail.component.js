'use strict';
import './workoutDetail.component.scss';
import {trainingBuddyModule} from '../module';

class WorkoutDetailComponent {
  constructor() {
    console.log('workout detail component')
  }
}

trainingBuddyModule.component('workoutDetail', {
  template: `<span>Workout Detail</span>`,
  controller: WorkoutDetailComponent
});
