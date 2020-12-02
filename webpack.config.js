/*
 *  Webpack Configuration
 *  =====================
 *
 *  Defines the Webpack bundling configuration optimized for `development` or
 *  `production` modes.
 *
 *  For reference on configuration options, see the Webpack at
 *    <https://webpack.js.org/configuration/>
 */

const {src, dest} = require('./webpack/paths');
const rules = require('./webpack/rules');

module.exports = {
  //  Enables Webpack optimizations for `development` or `production` modes.
  mode: 'development',

  //  The base path where to resolve entry points.
  context: src,

  //  Entry points of the application. Vendor libraries (e.g.: Phaser) are
  //  declared first to become available globally.
  entry: {
    index: `${src}/index.js`,
  },

  //  Options instructing Webpack how and where to write compiled bundles.
  output: {
    filename: '[name].bundle.js',
    path: dest,
    publicPath: '/'
  },

  //  Controls how Webpack looks up for modules on the project.
  resolve: {
    //  The file extensions Webpack will be looking up when using `import`
    //  statements.
    extensions: ['.js', '.css'],

    alias: {
      //  For convenience, makes '@' an alias of the source directory.
      '@': src
    }
  },

  //  How source files are processed by Webpack. The rules configuration was
  //  split into its own `rules.js` module.
  module: {
    rules
  },

  //  Defines the type of source maps written in each compilation mode.
  devtool: 'eval-source-map',

  //  Turn performance hints off.
  performance: {
    hints: false
  }
};
