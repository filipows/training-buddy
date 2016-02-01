var passport = require('passport');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../app/models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    res.render('home');
  }
});

router.get('/register', function(req, res){
  res.render('register', {});
});

router.post('/register', function(req, res, next){
  console.log('registering user');
  User.register(new User({username: req.body.username}), req.body.password, function(err){
    if (err) {
      console.log('Error while user register!', err);
      return next(err);
    }

    console.log('User ' + req.body.username + ' registered');

    res.redirect('/');
  });
});

router.get('/login', function(req, res){
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res){
  console.log('req.user: ', req.user);
  res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
