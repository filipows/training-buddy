var express = require('express');
var restify = require('express-restify-mongoose');
var WorkoutModel = require('../app/models/Workout');

var workoutsRouter = express.Router();
restify.serve(workoutsRouter, WorkoutModel, {
  prefix: '', // default /api
  version: '' // default /v1
});

module.exports = workoutsRouter;