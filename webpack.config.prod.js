var webpackConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig.debug = false;
webpackConfig.devtool = 'source-map';
webpackConfig.plugins = [
    new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html'
    })
];
