'use strict';
import './workoutNew.component.scss';
import {trainingBuddyModule} from '../module';
import template from './workoutNew.component.jade';

class WorkoutNewComponent {
  constructor(activitiesService) {
    this.possibleActivities = null;
    activitiesService.getAll().then((activities) => {
      this.possibleActivities = activities;
    });
    this.initDatePicker();
    this.form = {
      date: new Date(),
      tags: ['morning'],
      duration: {
        h: 0,
        m: 0,
        s: 0
      },
      activities: [],
      stretching: {
        duration: 0,
        exercises: []
      },
      comment: ''
    };
    console.log('workout new controller')
  }

  save() {
    console.log(this.form);
  }

  addActivity() {
    this.form.activities.push({
      name: '',
      repetitions: []
    });
  }

  addRepetition(repetitions) {
    console.log('reps:', repetitions);
    repetitions.push(3);
  }

  openDatePicker() {
    console.log(this.dt);
    this.datePopup.opened = true;
  }

  initDatePicker() {
    this.dateFormat = 'dd/MMMM/yyyy';
    this.datePopup = {
      opened: false
    };
    this.dateOptions = {
      dateDisabled: this.disabled,
      formatYear: 'yyyy',
      maxDate: new Date(),
      minDate: new Date(2010, 9, 13),
      startingDay: 1
    };
  }
}

WorkoutNewComponent.$inject = ['activitiesService'];

trainingBuddyModule.component('workoutNew', {
  template: template(),
  controller: WorkoutNewComponent
});