var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var routineSchema = require('./routineSchema');
var weightSchema = require('./weightSchema');

var userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    createdAt: Date,

    // [TODO] consider below fields if here in user or new collection
    routines: [routineSchema],
    weightLogs: [weightSchema]
});

userSchema.plugin(passportLocalMongoose);
module.exports = userSchema;  // [TODO] return mongoose model rather than schema, ex: module.exports = mongoose.model('User', UserSchema);