// Imports
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for webpack
  entry: './src/index.js',

  // Where to put the bundle file and what to call it
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Loaders
  module: {
    rules: [
      { // JS, JSX configuration
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // enable babel coverage for es2015 -> latest
              '@babel/preset-react', // enable babel coverage for React: JSX
            ],
          },
        },
      },
      { // CSS, SCSS configuration
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
        'style-loader',
        'css-loader',
        // 'sass-loader',
        ],
      },
    ],
  },

  // Anchor the virtual index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],

  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },

  //   
  devServer: {
    static: path.resolve(__dirname, './dist'), // tells Webpack Dev Server where to serve static files from.  In this case, it's serving files from the ./dist directory, which is where your bundled files will be located after running Webpack.
    compress: true, // enables gzip compression for everything served
    port: 8080,
    hot: true,  // enable HMR on the devServer
    historyApiFallback: true,
  },
}