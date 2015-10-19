var express = require('express');
var restify = require('express-restify-mongoose');
var mongoose = require('mongoose');
var WorkoutSchema = require('../app/models/WorkoutSchema');

var WorkouteModel = mongoose.model('Workout', WorkoutSchema);
var workoutsRouter = express.Router();
restify.serve(workoutsRouter, WorkouteModel);

module.exports = workoutsRouter;