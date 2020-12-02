/*
 *  `paths` module
 *  ==============
 *
 *  Describes the project working tree for its consumer modules.
 */

const {resolve} = require('path');

//  Exports the root directory path, hosting the project contents.
exports.root = process.cwd();

//  Where application resources are kept.
exports.src = resolve(exports.root, 'src/');

//  The destination diretory of production builds.
exports.dest = resolve(exports.root, 'dist/');
