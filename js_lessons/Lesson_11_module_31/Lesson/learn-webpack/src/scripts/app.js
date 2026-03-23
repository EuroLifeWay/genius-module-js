import * as helperModule from './my-helper-module.js';
// const helperModule = require('./my-helper-module.js');
import * as _ from 'lodash';
import './sharedModule.js';
import '../styles/app.css';
import '../styles/appStyles.scss';
import myImage from '../assets/images/home.png';
import natureImg from '../assets/images/nature.jpg';

const img = document.getElementById('home');
img.src = myImage; // Webpack подставит правильный путь из dist

const frontImg = document.getElementById('frontImg');
frontImg.src = natureImg;

// const img = document.createElement('img');
// img.src = myImage; // Webpack подставит правильный путь из dist
// document.body.appendChild(img);

console.log('Welcome from app.ls');
console.log("Welcome! Greetings from app.js. Let's learn Webpack2");

console.log(helperModule.greetings);

// // Можно также вывести на страницу, чтобы сразу увидеть результат
// document.body.innerHTML = `<h1>${helperModule.greetings}</h1>`;

const arr = [1, 2, 3, 4];
_.each(arr, function (val) {
  console.log('Output from Lodash _.each for Element ' + val);
});
