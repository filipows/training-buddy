var mongoose = require('mongoose');

var activityTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['timeAndDistance', 'repetitions'], required: true }
});

module.exports = activityTypeSchema;
