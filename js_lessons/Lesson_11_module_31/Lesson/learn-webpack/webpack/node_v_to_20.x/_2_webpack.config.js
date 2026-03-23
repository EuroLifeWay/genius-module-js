import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Emulating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/scripts/app.js', //path relative to this file
  output: {
    // We explicitly indicate the project root (one level above the config folder)
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js',
    clean: true,
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, '../dist'), // Where does the server get static files from?
    // },
    port: 5500,
    open: true,
    hot: true, // Enables hot reloading without refreshing the entire page.
  },
  // watch: true, // When using devServer this field is usually not needed, it keeps track of it itself
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html', //relative to root of the application
      inject: 'body',
      scriptLoading: 'defer', // async
      myPageHeader: 'Hello World',
      title: 'Webpack Title',
    }),
  ],
};
