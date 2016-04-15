var mongoose = require('mongoose');
var activitySchema = require('./activitySchema');

var workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User',  required: false },
    date: {type: Date, default: Date.now},
    duration: { type: Number, required: false },  // miliseconds
    activities: [activitySchema],
    tags: [String],

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

//workoutSchema.pre('save', function (next, req) {
//  console.log('pre save schema');
//    console.log(req);
//  next();
//});

module.exports = workoutSchema;