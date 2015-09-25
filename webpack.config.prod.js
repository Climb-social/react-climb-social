var webpackConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig.debug = false;
webpackConfig.devtool = 'source-map';

