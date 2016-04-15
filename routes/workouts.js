var express = require('express');
var restify = require('express-restify-mongoose');
var WorkoutModel = require('../app/models/Workout');

var workoutsRouter = express.Router();
restify.serve(workoutsRouter, WorkoutModel, {
  prefix: '', // default /api
  version: '', // default /v1
  preCreate: function(req, res, next) {
    if (req.user && req.user._id) {
      req.body.user = req.user._id;
    }
    next();
  },
  //preUpdate: function(req, res, next) {
  //  console .log('-----------PRE UPDATE==================')
  //  next();
  //}
});

module.exports = workoutsRouter;