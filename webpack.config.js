/**
 * Created by michele on 11/09/15.
 */

var getConfig = require('hjs-webpack');


module.exports = getConfig({
    in: 'src/app.js',
    out: 'dist',
    clearBeforeBuild: true
});