var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
  type: {type: String, required: true},
  series: {type: Number, required: false},
  repetitions: {type: Number, required: false}
});

module.exports = ExerciseSchema;