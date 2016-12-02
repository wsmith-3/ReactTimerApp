'use strict';

var webpack = require('webpack');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      applicationStyles: 'app/styles/app.scss',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx',
      Timer: 'app/components/Timer.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$|\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        compact: false,
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true
  }
};
