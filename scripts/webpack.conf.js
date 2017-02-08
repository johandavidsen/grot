const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/containers/contributions'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'grot'
  },
  module: {
    loaders: [
        { test: /\.css?$/, loaders: [ 'style-loader', 'raw' ], include: path.resolve(__dirname, '../') },
        { test: /\.scss$/, include: /src/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        {
          test: /\.js$/,
          loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
          exclude: /(node_modules|bower_components)/,
          include: path.join(__dirname, '../src'),
        }
    ]
  },
  externals: {
    'react': 'React'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
