var passport = require('passport');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../app/models/User');


router.get('/', function (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    res.render('home');
  }
});

router.get('/register', function (req, res) {
  res.render('register', {});
});

router.post('/register', function (req, res, next) {
  console.log('registering user');
  User.register(new User({username: req.body.username}), req.body.password, function (err) {
    if (err) {
      console.log('Error while user register!', err);
      res.render('register', { message: err.message });
      return next(err);
    }

    console.log('User ' + req.body.username + ' registered');
    passport.authenticate('local', { successRedirect: '/'} )(req, res); // redirect to '/' after successful registration
  });
});

router.get('/login', function (req, res) {
  res.render('login', {user: req.user});
});




router.post('/login', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      return res.render('login', { message: info.message });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/')
    });
  })(req, res, next);
});


router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
