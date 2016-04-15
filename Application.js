'use strict';

let express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    jadeStatic = require('connect-jade-static'),
    favicon = require('serve-favicon'),
    path = require('path'),
    http = require('http'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackConfig = require('./public/webpack.config.js');

let User = require('./app/models/User'),
    loginRouter = require('./routes/login'),
    workoutsRouter = require('./routes/workouts'),
    activitiesRouter = require('./routes/activities'),
    activityCategoriesRouter = require('./routes/categories');

class Application {
  constructor(config) {
    this.config = config;

    this._commonExpress();
    this._database();
    this._sessionStore();
    this._passportAuth();
    this._jadeStatic();       // will serve static .jade files as .html on the fly
    this._serveStaticFiles(); // will serve other static files
    this._routing();

    this._catchAndForwardToErrorHandler();
    this._errorHandlers();
  }

  start() {
    let port = this.config.application.port;
    this.server = http.createServer(this.app).listen(port, () => {
      console.log('Express server listening on port ' + port);
      console.log('http://localhost:' + port);
    });
  }

  stop(onClose) {
    this.server.close(onClose);
  }


  _commonExpress() {
    this.app = express();
    this.app.set('views', path.join(__dirname, 'public', 'views'));
    this.app.set('view engine', 'jade');

    this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(methodOverride());
    this.app.use(cookieParser());
  }

  _database() {
    mongoose.connect('mongodb://training-buddy:youwillneverguessit@localhost:27017/training-buddy');

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection.once('open', () => console.log('MongoDB connection successful.'));
    this.mongooseConnection.on('disconnected', () => console.error('Mongoose connection disconnected.'));
    this.mongooseConnection.on('error', console.error.bind(console, 'Mongoose connection error: '));
  }

  _sessionStore() {
    this.app.use(session({
      secret: 'SECRET',
      store: new MongoStore({mongooseConnection: this.mongooseConnection}),
      resave: false,
      saveUninitialized: true
    }));
  }

  _passportAuth() {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()) );
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  }

  _jadeStatic() {
    this.app.use(jadeStatic({
      baseDir: path.join(__dirname, '/public'),
      baseUrl: '/',
      maxAge: 86400,
      jade: { pretty: true }
    }));
  }

  _serveStaticFiles() {
    if (process.env.NODE_ENV !== 'production') {
      this._useWebpackMiddleware();
    } else {
      this.app.use(webpackConfig.output.publicPath, express.static(webpackConfig.output.path));
    }

    this.app.use(webpackConfig.output.publicPath + '/images', express.static(path.join(__dirname, 'public', 'images')));
    this.app.use(webpackConfig.output.publicPath + '/styles', express.static(path.join(__dirname, 'public', 'styles')));
    this.app.use(webpackConfig.output.publicPath + '/vendor', express.static(path.join(__dirname, 'public', 'node_modules')));
    //this.app.use(webpackConfig.output.publicPath, express.static(path.join(__dirname, 'public')));
  }

  _useWebpackMiddleware() {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    this.app.use(middleware);
    this.app.use(webpackHotMiddleware(compiler));
  }

  _routing() {
    this.app.use('/api/v1', workoutsRouter); //TODO: add authentication and limiting results to logged user workouts
    this.app.use('/api/v1', activitiesRouter);
    this.app.use('/api/v1', activityCategoriesRouter);
    this.app.get('/ping', function(req, res){
      res.status(200).send('pong');
    });
    this.app.use('/', loginRouter);
  }

  _catchAndForwardToErrorHandler() {
    // catch 404 and forward to error handler
    this.app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }

  _errorHandlers() {
    // error handlers
    // development error handler
    // will print stacktrace
    if (this.app.get('env') === 'development') {
      this.app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log('err');
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    this.app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }
}


module.exports = Application;