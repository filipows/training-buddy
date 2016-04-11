'use strict';
import './workoutNew.component.scss';
import {trainingBuddyModule} from '../module';

class WorkoutNewComponent {
  constructor() {
    console.log('workout new controller')
  }
}

trainingBuddyModule.component('workoutNew', {
  template: `<span>New workout form here</span>`,
  controller: WorkoutNewComponent
});
