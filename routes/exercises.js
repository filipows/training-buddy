var express = require('express');
var restify = require('express-restify-mongoose');
var mongoose = require('mongoose');
var ExerciseSchema = require('../app/models/ExerciseSchema');

var ExerciseModel = mongoose.model('Exercise', ExerciseSchema);
var exercises = express.Router();
restify.serve(exercises, ExerciseModel);

module.exports = exercises;