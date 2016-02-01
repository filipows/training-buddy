var mongoose = require('mongoose');
var daySchema = require('./daySchema');


var RoutineSchema = new mongoose.Schema({
  name: {type: String, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: 'User', required: false},

  days: [daySchema]
});

module.exports = RoutineSchema;