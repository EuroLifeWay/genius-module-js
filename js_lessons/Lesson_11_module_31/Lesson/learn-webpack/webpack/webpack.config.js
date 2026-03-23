import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// В ES-модулях JSON импортируется с указанием типа (в новых Node.js)
// import pkg from '../package.json' with { type: 'json' };
// or for older
import { createRequire } from 'module'; // Добавляем этот импорт
const require = createRequire(import.meta.url);
const pkg = require('../package.json'); // Теперь импорт JSON работает везде

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const isProduction = process.env.NODE_ENV === 'production';

import CopyPlugin from 'copy-webpack-plugin';

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
    // filename: '[name].[contenthash].js',
    filename: '[name].bundle.js', // В dev-режиме кэш не нужен, так проще для HMR
    publicPath: '/', // 'auto'
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
  devServer: {
    devMiddleware: {
      writeToDisk: true, // Заставляет сервер писать файлы на диск
    },
    // 1. Где сервер ищет статику (картинки, файлы), которые НЕ импортированы в JS
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    // 2. Порт (по умолчанию 8080, вы выбрали 5500)
    port: 5500,
    // 3. Автоматически открывать браузер при старте
    open: true,
    // 4. Hot Module Replacement (HMR) — обновляет стили/модули без перезагрузки всей страницы
    hot: true,
    // 5. Позволяет обновлять страницу на роутах (полезно, если добавите React/Vue Router)
    historyApiFallback: true,
    // 6. Сжимать файлы Gzip для ускорения передачи (в режиме разработки)
    compress: true,
    // 7. Настройка отображения ошибок прямо поверх страницы в браузере
    client: {
      overlay: true, // Покажет красное окно с ошибкой компиляции, если вы ошиблись в коде
    },
  },
  // For without veb-server
  // watch: true, // When using devServer this field is usually not needed, it keeps track of it itself
  module: {
    rules: [
      {
        // test: /\.(s*)css$/i, // Ищем все файлы .css / i: Флаг регистронезависимости (case-insensitive)
        test: /\.(sa|sc|c)ss$/i, // / /\.s[ac]ss$/i // (для .sass и .scss)
        use: [
          // // В режиме разработки (devServer) лучше оставить style-loader для быстрой перезагрузки,
          // // а для сборки (production) — выносить в файл.
          // process.env.NODE_ENV === 'production'
          //   ? MiniCssExtractPlugin.loader
          //   : 'style-loader',
          // 'style-loader', // in header <script>
          MiniCssExtractPlugin.loader, // for dev if need app.bundle.css in header link
          'css-loader',
          'sass-loader',
        ], // Порядок важен: справа налево!
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Это замена file-loader
        generator: {
          // Куда складывать картинки в папке dist
          filename: 'assets/images/[name].[contenthash][ext]', // [query]', // параметры из URL (например, logo.png?v=1)
        },
      },
    ],
  },
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
    // Создаем экземпляр плагина
    new MiniCssExtractPlugin({
      // filename: '[name].[contenthash].css', // Имя выходного CSS-файла
      filename: '[name].bundle.css', // for-dev
    }),
    new CopyPlugin({
      patterns: [
        {
          // Откуда берем файлы (относительно корня проекта)
          from: path.resolve(__dirname, '../src/static'),
          // Куда кладем в папку dist (например, в подпапку assets)
          to: path.resolve(__dirname, '../dist/assets/static'),
          // Чтобы не было ошибки, если папка пуста:
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
