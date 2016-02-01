var mongoose = require('mongoose');

var daySchema = new mongoose.Schema({
  name: {type: String, required: true},
  user: { type: mongoose.Schema.ObjectId, ref: 'User',  required: false },

  activities: [{ type: mongoose.Schema.ObjectId, ref: 'Activity',  required: false }]
});

module.exports = daySchema;