var fs = require("fs");
var express = require("express");
var app = express();

var handlebars = require("express-handlebars");
app.engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/bash', function(req, res) {
  var source = require("./data/bash.json");
  res.render("commands", source);
});

app.get('/maven', function(req, res) {
  var source = require("./data/maven.json");
  res.render("commands", source);
});

app.get('/restful', function(req, res) {
  var source = require("./data/restful.json");
  res.render("commands", source);
});

app.get('/scrum', function(req, res) {
  var source = require("./data/scrum.json");
  res.render("definition", source);
});

app.get('/test', function(req, res) {
  var source = require("./data/test.json");
  res.render("definition", source);
});

app.listen(process.env.PORT || 9000);
console.log("Server has started on port " + process.env.PORT || 9000);
