const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let htmlOptions = {
  template: 'src/index.html'
};

module.exports = {
  entry: './src/app/app.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].map',
    filename: 'bundle.js'
  },
  plugins: [
    // new UglifyJSPlugin({ sourceMap: true }),
    new HtmlWebpackPlugin(htmlOptions)
  ],
  devServer: {
    contentBase: './src',
    hot: false
  }
};
