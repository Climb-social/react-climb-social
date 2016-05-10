require('dotenv').config();

var path = require('path');
var webpack = require('webpack');

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

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
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
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'COLLECTION_ID': JSON.stringify(process.env.COLLECTION_ID),
        'API_DOMAIN': JSON.stringify(process.env.API_DOMAIN),
      }
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
