var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//llamamos al arvhico .env
require('dotenv').config();
var pool = require('./models/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// GENERAMOS VARIABLE CON RUTA PARA LOGIN
var loginRouter = require('./routes/admin/login');
const { createPool } = require('mysql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//-----------------------------------------------------
//mod
app.use('/admin/login', loginRouter);

// Consulta select
/*pool.query('SELECT * FROM empleados').then(function (resultados){
  console.log(resultados);
});*/

//insert

// var obj = {
//   nombre: 'Fabian',
//   apellido: 'Benitez',
//   trabajo: 'Programador',
//   edad: 35,
//   salario: 120000,
//   mail: 'fabianbenitez25@gmail.com'
// }
// pool.query('INSERT INTO empleados SET ?', 
// [obj]).then(function(resultados) {
//   console.log(resultados)
// });

//update
/*var id = 23;
var obj = {
  nombre: 'Victor Fabian',
  apellido: 'Benitez Ocampo'
}
pool.query('UPDATE empleados SET ? WHERE id_emp=?', [obj, id]).then
(function (resultados){
  console.log(resultados);
});*/

//delete

// var id = 25;
// pool.query('DELETE FROM empleados WHERE id_emp=?', [id]).then
// (function (resultados) {
//   console.log(`Fue eliminado el usuario ${resultados, id}`);
// });

//-----------------------------------------------------
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
