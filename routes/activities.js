var express = require('express');
var restify = require('express-restify-mongoose');
var ActivityDefinitionModel = require('../app/models/ActivityDefinition');

var activityDefinitionRouter = express.Router();
restify.serve(activityDefinitionRouter, ActivityDefinitionModel, {
  prefix: '', // default /api
  version: '', // default /v1,
  name: 'activity'
});

module.exports = activityDefinitionRouter;