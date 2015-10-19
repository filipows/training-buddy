var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String
    }
});

module.exports = UserSchema;