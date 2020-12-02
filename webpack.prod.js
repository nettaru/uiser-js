const common = require('./webpack.config.js');
const { dest } = require('./webpack/paths');

module.exports = Object.assign(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash].bundle.js',
    path: dest,
    publicPath: '/'
  }
});