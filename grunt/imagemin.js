module.exports = {
  dev: {
    options: {
      optimizationLevel: 0,
      progressive: false,
      interlaced: false
    },
    files: [{
      expand: true,
      cwd: 'src/images',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dist/images/'
    }]
  },
  dist: {
    options: {
      optimizationLevel: 6,
      progressive: true,
      interlaced: true
    },
    files: [{
      expand: true,
      cwd: 'src/images',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dist/images/'
    }]
  }
};