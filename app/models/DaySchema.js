var mongoose = require('mongoose');
var activitySchema = require('./activitySchema');

var daySchema = new mongoose.Schema({
  name: {type: String, required: true},

  activities: [activitySchema]
});

module.exports = daySchema;