var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const superUserRouter = require('./routes/super-user');
const userLoginRouter = require('./login/userLogin');
const superUserLoginRouter = require('./login/superUserLogin');
const adminLoginRouter = require('./login/adminLogin');

var app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.mongourl, (err, db)=> {
  if (err) throw err
});
const adminInit = require('./admin/admin.service');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/superusers', superUserRouter);
app.use('/userlogin', userLoginRouter);
app.use('/superuserlogin', superUserLoginRouter);
app.use('/adminlogin', adminLoginRouter);

// catch 404 and forward to error handler
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
