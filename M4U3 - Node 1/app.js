var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
////// MANEJADORES DE TUTAS //////
var aboutRouter = require('./routes/about.js');
var contactRouter = require('./routes/contact.js');
///// FIN MANEJADORES DE TUTAS /////



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////// MANEJADORES DE TUTAS //////

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

/////// PROBANDO RUTAS CON GET ///////////
app.get('/prueba', function(req,res){
  res.send('HOLA SOY LA PAGINA DE PRUEBA')
})
app.get('/skill', function(req,res){
  res.send('En esta pagina se cargaran mis Habilidades al portfolio')
})

app.get('/resume', function(req,res){
  res.send('En esta pagina se cargaran mis antecedentes laborales y de proyectos al portfolio')
})
/////// FIN PRUEBAS POR URL CON GET ////////




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
