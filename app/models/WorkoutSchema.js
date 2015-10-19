var mongoose = require('mongoose');
var ExerciseSchema = require('./ExerciseSchema');

var WorkoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    exercises: [ExerciseSchema],
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }

});


module.exports = WorkoutSchema;