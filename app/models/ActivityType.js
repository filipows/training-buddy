var mongoose = require('mongoose');

var ActivityTypeSchema = require('../schemas/activityTypeSchema');
var ActivityType = mongoose.model('ActivityType', ActivityTypeSchema);

module.exports = ActivityType;