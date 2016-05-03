module.exports = function(grunt) {

  var webpackConfig = require("./webpack.config.js");

  require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig(
    Object.assign(
      { 
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
          options: {
            logConcurrentOutput: true
          },
          dev: {
            tasks: ["watch:css", "watch:js"]
          }
        }
      },
      require("./grunt/imagemin.config.js"),
      require("./grunt/postcss.config.js"),
      require("./grunt/watcher.config.js"),
      require("./grunt/webpack.config.js")(webpackConfig)
    )
  );

  grunt.registerTask('dev', ["postcss:dev", "webpack:dev", "concurrent:dev"]);
  grunt.registerTask("dist", ["postcss:dist", "webpack:dist", "imagemin:dist"]);

};