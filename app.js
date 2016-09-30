var Express = require('express');
var app = new Express();

app.listen(3000);

app.get('/', function(req, res, next) {
  console.log('Server is running on the home page');
})
