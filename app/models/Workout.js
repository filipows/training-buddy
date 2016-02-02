var mongoose = require('mongoose');

var WorkoutSchema = require('../schemas/workoutSchema');
var Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;