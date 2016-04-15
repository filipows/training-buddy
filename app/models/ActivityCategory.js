var mongoose = require('mongoose');

var ActivityCategorySchema = require('../schemas/activityCategorySchema');
var ActivityCategory = mongoose.model('ActivityCategory', ActivityCategorySchema);

module.exports = ActivityCategory;