var express = require('express');
var restify = require('express-restify-mongoose');
var ActivityTypeModel = require('../app/models/ActivityType');

var activityTypeRouter = express.Router();
restify.serve(activityTypeRouter, ActivityTypeModel, {
  prefix: '', // default /api
  version: '', // default /v1,
  name: 'activity'
});

module.exports = activityTypeRouter;