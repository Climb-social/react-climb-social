var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    './src/index',
    './src/styles/main.css'
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader'), exclude: /node_modules/ }
    ],
    noParse: [
      path.join(__dirname, './node_modules/bricks.js/dist/bricks.min.js')
    ]
  },
  postcss: function (webpack) {
    return [
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('precss')
    ];
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  output: {
    filename: 'dist/react-climb-social.min.js',
    libraryTarget: 'umd',
    library: 'react-climb-social'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // saves ~100k from build
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('dist/react-climb-social.min.css', {
      allChunks: true
    })
  ]
};
