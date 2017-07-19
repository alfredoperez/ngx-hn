/**
 * Created by alfre on 7/8/2017.
 */
module.exports = function() {
  var root = './';
  var dist = root + 'dist/';
  var config = {
    dist: dist,
    index: dist + 'index.html',
    jsFiles: [
      dist + 'inline*.js',
      dist + 'vendor*.js',
      dist + 'main*.js',
      dist + 'polyfills*.js'
    ]
  };
  return config;
}
