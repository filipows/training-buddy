var configuration = require('./config/appConfig');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jadeStatic = require('connect-jade-static');
var methodOverride = require('method-override');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var routes = require('./routes/index');
var workoutsRouter = require('./routes/workouts');

var app = express();


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());


var mongooseConnection = initializeDb();

app.use(session({
  secret: 'SECRET',
  store: new MongoStore({mongooseConnection: mongooseConnection}),
  resave: false,
  saveUninitialized: true
}));

//--auth
var mongoose = require('mongoose');

var User = require('./app/models/user');


var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()) );
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//--


app.use(jadeStatic({
  baseDir: path.join(__dirname, '/public'),
  baseUrl: '/',
  maxAge: 86400,
  jade: { pretty: true }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use(workoutsRouter);
app.get('/ping', function(req, res){
  res.status(200).send('pong');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var port = configuration.application.port;

var server = app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});


function initializeDb() {
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://training-buddy:youwillneverguessit@localhost:27017/training-buddy');

  var db = mongoose.connection;
  db.once('open', function() {
    console.log('MongoDB connection successful.');
  });
  return db;
};
