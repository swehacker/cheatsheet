(function () {
    'use strict';
    var fs = require("fs"),
        port = process.env.PORT || 9000,
        express = require("express"),
        app = express(),
        handlebars = require("express-handlebars");

    // Set up for proxing behind apache/nginx
    app.enable('trust proxy');
    app.engine('hbs', handlebars({
        extname: 'hbs',
        defaultLayout: 'main.hbs'
    }));
    app.set('view engine', 'hbs');
    app.use(express.static(__dirname + '/public'));

    app.get('/', function (req, res) {
        var sheets = fs.readdirSync("data/"),
            sheetsArray = [];
        sheets.forEach(function (name) {
            sheetsArray.push({
                "name": name.split(".")[0]
            });
        });

        res.render('index', {
            "items": sheetsArray
        });
    });

    app.get('/bash', function (req, res) {
        var source = require("./data/bash.json");
        res.render("commands", source);
    });

    app.get('/maven', function (req, res) {
        var source = require("./data/maven.json");
        res.render("commands", source);
    });

    app.get('/restful', function (req, res) {
        var source = require("./data/restful.json");
        res.render("commands", source);
    });

    app.get('/scrum', function (req, res) {
        var source = require("./data/scrum.json");
        res.render("definition", source);
    });

    app.get('/test', function (req, res) {
        var source = require("./data/test.json");
        res.render("definition", source);
    });

    app.listen(port);
    console.log("Server has started on port " + port);
}());