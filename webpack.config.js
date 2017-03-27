'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlTemplate      = require('html-webpack-template');

const BUILD_DIR         = path.resolve(__dirname, 'app');
const APP_DIR           = path.resolve(__dirname, 'src');

const config = {
  entry:  `${APP_DIR}/index.js`,
  output: {
    path:     BUILD_DIR,
    filename: 'assets/js/[name].js',
  },
  cache:   true,
  debug:   true,
  devtool: 'eval-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title:      'soulmate',
      xhtml:      true,
      inject:     false,
      template:   htmlTemplate,
      appMountId: 'root-container',
      filename:   'views/index.html',
    }),
    new ExtractTextPlugin('assets/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    include: path.join(__dirname, 'src'),
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=assets/images/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=assets/[name].[ext]' },
      { test: /\.jsx?$/, loader: 'babel' },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test:   /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/font-woff&name=assets/fonts/[name].[ext]',
      },
      {
        test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]',
      },
      {
        test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test:   /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]',
      },
    ],
  },
};

if (process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
  ];

  config.plugins = config.plugins.concat(prodPlugins);

  config.cache = false;
  config.debug = false;
  config.devtool = undefined;
}

module.exports = config;
