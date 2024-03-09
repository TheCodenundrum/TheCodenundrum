/*
app.js

TheCodenundrum app runner.
*/

// ----------------------------------------------------------------------------
// Requires
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ----------------------------------------------------------------------------
// Router Requires
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ----------------------------------------------------------------------------
// Instantiate App
var app = express();

// ----------------------------------------------------------------------------
// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ----------------------------------------------------------------------------
// Libraries
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

// ----------------------------------------------------------------------------
// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ----------------------------------------------------------------------------
// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
