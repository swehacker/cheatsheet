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
  var sheets = fs.readdirSync("data/");
  var sheetsArray = new Array();
  sheets.forEach(function(name) {
    sheetsArray.push({ "name": name.split(".")[0] });
  });

  res.render('index', { "items": sheetsArray});
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

app.listen(port);
console.log("Server has started on port " + port);
