// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for webpack
  entry: './src/index.js',

  // Where to put the bundle file and what to call it
  output: {
    path: path.resolve(__dirname, './dist'),
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
    //   { // CSS, SCSS configuration
    //     test: /\.scss$/i,
    //     exclude: /node_modules/,
    //     use: [
    //     'style-loader',
    //     'css-loader',
    //     'sass-loader',
    //     ],
    //   },
    ],
  },

  // Anchor the virtual index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],

  //   
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
  },
}