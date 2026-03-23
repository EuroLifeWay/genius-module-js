const path = require('path'); // Add this to work with paths
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/scripts/app.js', //path relative to this file
    vendor: Object.keys(package.dependencies),
  },
  output: {
    // path: Absolute path to the output folder (project root + dist)
    path: path.resolve(__dirname, '../dist'),
    // filename: 'app.bundle.js', //path relative to this file
    filename: '[name].bundle.js', //path relative to this file
    clean: true, // Useful: Cleans the dist folder before each build
  },
  devServer: {
    // contentBase: path.join(__dirname, '../dist'),
    port: 5500,
    open: true,
    hot: true, // Enables hot reloading without refreshing the entire page.
  },
  watch: true, // When using devServer this field is usually not needed, it keeps track of it itself
  resolve: {
    // List of extensions that Webpack will try to install itself
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Title',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: 'index.html', //relative to root of the application
      inject: 'body',
      scriptLoading: 'defer', // async
    }),
  ],
};
