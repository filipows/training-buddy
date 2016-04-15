var mongoose = require('mongoose');

var ActivityDefinitionSchema = require('../schemas/activityDefinitionSchema');
var ActivityDefinition = mongoose.model('ActivityDefinition', ActivityDefinitionSchema);

module.exports = ActivityDefinition;