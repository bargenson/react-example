module.exports = {

  watch: {
    css: {
      files: ["src/css/*"],
      tasks: ["postcss:dev"],
      options: {
        spawn: false
      }
    },
    js: {
      files: ["src/js/*"],
      tasks: ["webpack:dev"],
      options: {
        spawn: false
      }
    }
  }

};