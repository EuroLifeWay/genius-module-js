import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// В ES-модулях JSON импортируется с указанием типа (в новых Node.js)
// import pkg from '../package.json' with { type: 'json' };
// or for older
import { createRequire } from 'module'; // Добавляем этот импорт
const require = createRequire(import.meta.url);
const pkg = require('../package.json'); // Теперь импорт JSON работает везде

// Emulating __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  // Указываем только ваш основной файл.
  // Вендоры (библиотеки) Webpack выделит сам.
  entry: {
    app: './src/scripts/app.js', //path relative to this file
    settings: './src/scripts/settings.js',
  },
  output: {
    // We explicitly indicate the project root (one level above the config folder)
    path: path.resolve(__dirname, '../dist'),
    // [name] подставит 'app', [contenthash] добавит кэширование
    // filename: '[name].bundle.js',
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    // Это современная замена ручному перечислению vendor
    splitChunks: {
      chunks: 'all', // Выносит все библиотеки из node_modules в отдельный файл автоматически
      cacheGroups: {
        // Настройка для общего кода вашего проекта (sharedModule.js)
        commons: {
          name: 'commons', // Имя файла: commons.[hash].js
          chunks: 'all', // Искать во всех точках входа
          minChunks: 2, // Выносить в отдельный файл, только если импортируется минимум в 2-х местах
          priority: 10, // Приоритет выше, чем у стандартных настроек
          reuseExistingChunk: true,
        },
        // Настройка для сторонних библиотек из node_modules
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  // devServer: {
  //   // static: {
  //   //   directory: path.join(__dirname, '../dist'), // Where does the server get static files from?
  //   // },
  //   static: path.resolve(__dirname, '../dist'),
  //   // static: '../dist',
  //   port: 5500,
  //   open: true,
  //   hot: true, // Enables hot reloading without refreshing the entire page.
  // },
  watch: true, // When using devServer this field is usually not needed, it keeps track of it itself
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html', //relative to root of the application
      chunks: ['app', 'commons', 'vendors'], // Includes only app.js and shared libraries
      myPageHeader: 'Hello World',
      // title: 'Webpack Title',
      title: pkg.name, // Берем имя проекта из package.json
      inject: 'body',
      scriptLoading: 'defer', // async
    }),
    new HtmlWebpackPlugin({
      // template: './src/index.html',
      template: './src/settings.html',
      hash: true,
      filename: 'settings.html', //relative to root of the application
      chunks: ['settings', 'commons', 'vendors'], // Includes only app.js and shared libraries
      myPageHeader: 'Settings page',
      title: 'For Settings Title',
      inject: 'body',
      scriptLoading: 'defer', // async
    }),
  ],
};
