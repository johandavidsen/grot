let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    Hello: './src/components/Hello'
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, 'src') },
      { test: /\.css?$/, loaders: [ 'style', 'raw' ], include: path.resolve(__dirname, './src') },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
}
