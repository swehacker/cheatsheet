module.exports = function(grunt) {
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    'compile-handlebars': {
      gottaGlobEmAll: {
        template: "./src/*.hbs",
        templateData: "./src/*.json",
        output: "dist/*.html"
      }
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-compile-handlebars');
};
