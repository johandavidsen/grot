const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    Contributions: './src/containers/Contributions.js',
    ContributionsChart: './src/containers/ContributionsChart.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib')
  },
  module: {
    rules: [
      { test: /\.scss$/, include: /src/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.js$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, '../src'),
      }
    ]
  }
}

