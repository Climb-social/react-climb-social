module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
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
    ],
  },
};
