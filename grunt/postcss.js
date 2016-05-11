var processors = [
  require('autoprefixer')({ 
    browsers: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ]
  }),
  require('css-mqpacker'),
  require('postcss-color-function'),
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-nested'),
  require('postcss-pxtorem')({
    root_value: 16,
    unit_precision: 5,
    prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing'],
    replace: true,
    media_query: false
  }),
  require('postcss-simple-vars'),
  require('postcss-hexrgba')
];

var src = 'src/css/style.css';
var dest = 'dist/css/style.css';

module.exports = {

  options: {
    map: true,
    processors: processors
  },

  dev: {
    src: src,
    dest: dest
  },

  dist: {
    src: src,
    dest: dest,
    processors : processors.concat([ require('cssnano') ])
  }

};