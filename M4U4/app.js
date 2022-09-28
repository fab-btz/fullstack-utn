var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Traemos la dependencia de session
var session = require('express-session')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//requerimos inicio de session antes de iniciar el sitio

app.use(session({
  secret:'co15464831cho',
  resave: false,
  saveUninitialized: true
}))

app.get('/', function (req, res) {
  var conocido = Boolean(req.session.nombre);
  res.render('index', {
    title:'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre,
    pass: req.session.password
  })
})

app.get('/validateUser', function (req, res) {
    res.render('validateUser', {
      title:'Error al iniciar sesion',
      mensaje:'Debe ingresar un "Nombre de Usuario"'
    })  
})

app.get('/validatePass', function (req, res) {
  res.render('validatePass', {
    title:'Error al iniciar sesion',
    mensaje:'Debe ingresar una "Contraseña"'
  })  
})

app.post('/ingresar', function (req, res){
  //asi tal cuan anda vamos a probar una validacion 
  //if (req.body.nombre && req.body.password) {
  //   req.session.nombre = req.body.nombre
  //   req.session.password = req.body.password
  // }
  // res.redirect('/');
  if (req.body.nombre && req.body.password) {
    req.session.nombre = req.body.nombre
    req.session.password = req.body.password
  }
  if (req.body.nombre == ''){
    res.redirect('/validateUser');
  }
  if (req.body.password == ''){
    res.redirect('/validatePass');
  }
  res.redirect('/');
})

app.get('/salir', function (req, res){
  req.session.destroy();
  res.redirect('/');
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
