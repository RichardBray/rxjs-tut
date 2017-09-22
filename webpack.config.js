const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let htmlOptions = {
  template: 'src/index.html'
};

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin(htmlOptions)
  ],
  devServer: {
    contentBase: './src',
    hot: false
  }
};
