/*
 *  Webpack Rules
 *  =============
 *
 *  How sources are processed by Webpack.
 */

const {src} = require('./paths');

module.exports = [
  //  JavaScript Application Modules
  //  ------------------------------
  //
  //  Compile application modules with Babel 7. Uses `@babel/preset-env` to
  //  compatibility with current browsers and devices.
  //
  //  Reference:
  //  - <https://github.com/babel/babel-loader#readme>
  {
    test: /\.js$/,
    include: src,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'last 2 versions'
            },
            useBuiltIns: 'usage'
          }
        ]
      ]
    }
  }
];
