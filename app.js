var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./app_api/models/db");

var indexRouter = require('./app_server/routes/index');
// var prodiRouter = require("./app_server/routes/prodi");
var usersRouter = require('./app_server/routes/users');
const fakultasRouterApi = require("./app_api/routes/fakultas")

// const prodiPageRouter = require('./app_server/routes/prodi');
const fakultasRouter = require("./app_server/routes/fakultas");
const prodiRouter = require("./app_server/routes/prodi");
const prodiRouterApi = require("./app_api/routes/prodi");
const authRouterApi = require("./app_api/routes/auth");
const mahasiswaRouterApi = require("./app_api/routes/mahasiswa");

require("dotenv").config();//load environment variables

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');
app.set('layout','main');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.use('/', indexRouter);
app.use("/fakultas", fakultasRouter);
app.use('/users', usersRouter);
app.use('/prodi', prodiRouter);
//API
app.use("/api/fakultas", fakultasRouterApi);
app.use("/api/prodi", prodiRouterApi);
app.use("/api/auth", authRouterApi);
app.use("/api/mahasiswa", mahasiswaRouterApi);
connectDB();
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