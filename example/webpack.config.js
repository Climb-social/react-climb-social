require('dotenv').config();

var path = require('path');
var webpack = require('webpack');

var config = {
  env: process.env.NODE_ENV || 'development',
}


module.exports = {

  entry: [
    path.join(__dirname, 'index.js'),
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: 'example/build/',
    filename: '[name].js',
    publicPath: 'build'
  },

  target: 'web',

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.sass$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'postcss',
          'sass?sourceMap'
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json']
      }
    ]
  },

  postcss: function (webpack) {
    return [
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('precss')
    ];
  },

  resolve: {
    alias: {
      'react-climb-social': path.join(__dirname, '../src')
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(config.env),
        'COLLECTION_ID': JSON.stringify(process.env.COLLECTION_ID),
        'API_DOMAIN': JSON.stringify(process.env.API_DOMAIN),
      },
      'NODE_ENV': config.env,
      '__DEV__': config.env === 'development',
      '__PROD__': config.env === 'production',
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}
