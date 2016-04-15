'use strict';
import './workoutList.component.scss';
import {trainingBuddyModule} from '../module';

class WorkoutListComponent {
  constructor(workoutsService) {
    this.workouts = null;
    this.oneAtATime = true;
    workoutsService.getAll().then((workouts)=>{
      this.workouts = workouts;
      console.log(workouts);
    });
  }
}

WorkoutListComponent.$inject = ['workoutsService'];

trainingBuddyModule.component('workoutList', {
  template: `

  <button class="btn btn-primary btn-add-new" ng-link="['WorkoutNew']"><i class="fa fa-plus"></i>&nbsp; Add new workout</button>
  <uib-accordion close-others="$ctrl.oneAtATime">
    <uib-accordion-group heading="{{$index + 1}} | Date: {{ workout.date | date:fullDate }}"  ng-repeat="workout in $ctrl.workouts track by $index">
      <div>Duration: {{ workout.duration }}</div>
      <div>Activities:
        <ul>
          <li ng-repeat="activity in workout.activities track by $index">{{activity.name}} | {{activity.repetitions}}</li>
        </ul>
      </div>
    </uib-accordion-group>
  </uib-accordion>`,
  controller: WorkoutListComponent
});
