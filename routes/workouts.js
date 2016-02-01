var express = require('express');
var restify = require('express-restify-mongoose');
var WorkoutModel = require('../app/models/workout');

var workoutsRouter = express.Router();
restify.serve(workoutsRouter, WorkoutModel);

module.exports = workoutsRouter;