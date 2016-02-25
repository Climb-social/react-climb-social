var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'cheap-eval-source-map',

  entry: [
    path.join(__dirname, 'index.js'),
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: 'build/',
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
    ],
    noParse: [
      path.join(__dirname, '../node_modules/bricks.js/dist/bricks.min.js')
    ]
  },

  resolve: {
    alias: {
      'react-climb-social': path.join(__dirname, '../src')
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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