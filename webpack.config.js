var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    node: {
        fs: 'empty'
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc')
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'
            },
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    plugins: [

        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        })
    ]
};
