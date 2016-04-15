'use strict';
import {trainingBuddyModule} from '../module';

//TODO: make it generic

const apiUrl = 'api/v1/activity';
trainingBuddyModule.factory('activitiesService', ($http) => {
  let service = {
    getAll: function() {
      return $http.get(apiUrl).then( (response) => response.data);
    }
  };
  return service;
});
