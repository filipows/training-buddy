'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/app.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  plugins: [
    new ExtractPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0"]
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    },
    //{
    //  test: /\.css$/,
    //  loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    //},
    {
      test: /\.scss/,
      loader: ExtractPlugin.extract('style', 'css!sass')
    }, {
      test: /\.(png|gif|jpe?g|svg)$/i,
      loader: 'url?limit=10000'
    }]
  }
};
