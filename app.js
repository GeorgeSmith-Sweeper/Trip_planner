var express = require('express');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var jquery = require('jquery');
var routes = require('./routes/routes.js')

var app = new express();

var AutoEscapeExtension = require('nunjucks-autoescape')(nunjucks);
var env = nunjucks.configure('views', {noCache: true});
app.engine('html', nunjucks.render);
env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));
app.set('view engine', 'html');

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))
//console.log('I AMMMM THE DIIIRRR NAME: ' + __dirname);
app.use(express.static(__dirname + '/public'))
app.use('/', routes)

app.get('/', function(req,res,next){
  res.redirect('/home');
})
app.listen(3000)




