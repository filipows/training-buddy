var express = require('express');
var restify = require('express-restify-mongoose');
var ActivityCategoryModel = require('../app/models/ActivityCategory');

var activityCategoryRouter = express.Router();
restify.serve(activityCategoryRouter, ActivityCategoryModel, {
  prefix: '', // default /api
  version: '', // default /v1,
  name: 'category'
});

module.exports = activityCategoryRouter;