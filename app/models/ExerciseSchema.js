var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  series: {   // [TODO]: later should be series: [Number]  (for ex: series: [25, 20, 15, 10]
    type: Number,
    required: false
  },
  repetitions: {
    type: Number,
    required: false
  }
});

module.exports = ExerciseSchema;