'use strict';
import './activityNew.component.scss';
import {trainingBuddyModule} from '../module';
import template from './activityNew.component.jade';


// TODO: dorobic static fields -> np. max distance under water
class Field {
  constructor() {
    this.name = '';  //        'repetitions'?                                        zawsze zapisywac w m, a w UI pozwalac na wybor km/m
    this.type = '';  // enum: ['number?',      'weight',   'time',    'pace' ,    'distance'
  }                  //         bez jednostek    [kg]      [h m s]   [N min/km]       [m]
}

/*
 //np.
 name: repetitions
 type: repetitions
 //np.
 name: waga dodatkowa
 type: weight
 //np.
 name: ile w serii
 type: number
 //np.
 name: dystans
 type: distance
 //np.
 name: czas
 type: time
 */


class Activity {
  constructor() {
    this.name = '';
    this.icon = '??';
    this.category = '';
    this.description = '';
    this.fields = [];
  }
}


class ActivityNewComponent {
  constructor() {
    this.activity = {
      name: '',
      icon: 'href?',
      category: '',
      description: '',
      fields: []
    }
  }

  addField() {
    this.activity.fields.push(new Field());
  }

  save() {
    console.log(this.activity);
  }
}

trainingBuddyModule.component('activityNew', {
  template: template(),
  controller: ActivityNewComponent
});