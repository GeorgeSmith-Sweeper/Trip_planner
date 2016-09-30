var Express = require('express');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var routes = require('./routes/routes.js')

var app = new Express();

var AutoEscapeExtension = require('nunjucks-autoescape')(nunjucks);
var env = nunjucks.configure('views', {noCache: true});
app.engine('html', nunjucks.render);
env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));
app.set('view engine', 'html');

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(Express.static(__dirname + '/node_modules'))
app.use(Express.static(__dirname + '/public'))

app.get('/', function(req,res,next){
  res.redirect('/home');
})
app.use('/home', routes.home)
app.listen(3000)




