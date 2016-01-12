var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;  // [TODO] return mongoose model rather than schema, ex: module.exports = mongoose.model('User', UserSchema);