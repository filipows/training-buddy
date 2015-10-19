var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var UserSchema = require('../app/models/UserSchema'); // TODO: move it
mongoose.model('User', UserSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
