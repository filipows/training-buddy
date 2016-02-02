'use strict';

let Application = require('./Application'),
    config = require('./config/appConfig');

let application = new Application(config);
application.start();




