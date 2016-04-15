'use strict';
import {trainingBuddyModule} from '../module';

const apiUrl = 'api/v1/workout';
trainingBuddyModule.factory('workoutsService', ($http) => {
  let service = {
    getAll: function() {
      return $http.get(apiUrl).then( (response) => response.data);
    }
  };
  return service;
});
