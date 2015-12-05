'use strict';

var express = require('express');
var util = require('util');
var path = require('path');
var http = require('http');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var proc = require('proc-utils');

var config = require('./config');

var app = express();

app.set('port', process.env.PORT || config.port || 3000);
app.set('views', path.join(__dirname, 'views'));
require('./lib/view')(app);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

http.createServer(app)
  .on('error', function (err) {
    console.log(err);
    process.exit(1);
  })
  .listen(app.get('port'), function () {
    util.log("Web server listening on port " + app.get('port') + ' in ' +
      app.get('env'));
  });

// initialize process management
proc.init(app);
