module.exports = {

  imagemin: {
    options: {
      optimizationLevel: 6,
      progressive: true,
      interlaced: true
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src/images',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'dist/images/'
      }]
    }
  }

};