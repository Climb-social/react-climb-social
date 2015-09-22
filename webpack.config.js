var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    cache: true,

    context: path.join(__dirname, 'src'),

    entry: './index.jsx',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    },

    externals: {
        'react': 'React'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        })
    ]
};