var mongoose = require('mongoose');
var activitySchema = require('./activitySchema');

var workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User',  required: false },
    date: {type: Date, default: Date.now},
    duration: { type: Number, required: false },
    activities: [activitySchema],

    stretching: {
        duration: Number, // min
        exercises: [String]
    },

    comment: String,

    createdAt: {  // needed? / mongoose plugin
        type: Date,
        default: Date.now,
        required: true
    }
});


module.exports = workoutSchema;