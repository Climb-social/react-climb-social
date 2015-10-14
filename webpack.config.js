var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var IS_PRODUCTION = 'production' === process.env.NODE_ENV;

var webpackConfig = {
    devtool: 'inline-source-map',
    debug: true,
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'react-climb-social.js'
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
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!autoprefixer-loader?browsers=last 2 version!sass'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        })
    ]
};

if (IS_PRODUCTION) {
    webpackConfig.plugins.push(
        new webpack.optimize.DedupePlugin()
    );

    webpackConfig.output.filename = 'react-climb-social.min.js';
}

module.exports = webpackConfig;
