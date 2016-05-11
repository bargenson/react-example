module.exports = function(grunt) {

  var webpackConfig = require("./webpack.config.js");

  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  var options = { 
    pkg: grunt.file.readJSON('package.json'),
    config: {
      src: './grunt/*.js'
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ["watch:css", "watch:js", "watch:images"]
      }
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  grunt.registerTask('dev', [ "postcss:dev", "webpack:dev", "imagemin:dev", "concurrent:dev"]);
  grunt.registerTask("dist", ["postcss:dist", "webpack:dist", "imagemin:dist"]);

};