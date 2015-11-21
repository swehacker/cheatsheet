var fs = require("fs");
var port = process.env.PORT || 9000;
var express = require("express");
var app = express();

// Set up for proxing behind apache/nginx
app.enable('trust proxy');

var handlebars = require("express-handlebars");
app.engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/bash', function(req, res) {
  var source = require("./views/bash.json");
  res.render("bash", source);
});

app.get('/maven', function(req, res) {
  var source = require("./views/maven.json");
  res.render("maven", source);
});

app.get('/restful', function(req, res) {
  var source = require("./views/RESTful.json");
  res.render("RESTful", source);
});

app.get('/scrum', function(req, res) {
  var source = require("./views/scrum.json");
  res.render("scrum", source);
});

app.get('/test', function(req, res) {
  var source = require("./views/test.json");
  res.render("test", source);
});

app.listen(port);
console.log("Server has started on port " + port);
