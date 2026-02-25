// ------------------------------------ //
// ------------- Functions ------------ //
// ------------------------------------ //

// https://edu.genius.space/uk/courses/fullstack20/module/modul-24/lesson/modul-24
// https://drive.google.com/open?id=1NEbcpj_4qfLMI7B9oYUD0WS1Tfoe6Thd&usp=drive_fs
// https://uk.javascript.info/function-expressions

// <editor-fold decs="rest"></editor-fold>

// #region
// ------------- Functions declaration ------------ //

// function showMessage(a, b, c) {
//   console.log('Hello', a, b, c);
// }

// showMessage((a = 1), (b = 2), (c = 3)); // 1
// showMessage((a = 1), (b = 2)); // 2
// showMessage((x = 1), (y = 2), (z = 3), (h = 4)); // 3
// showMessage(1, 2, 3); // 4
// showMessage(1, 2); // 5
// showMessage(1, 2, 3, 4); // 6

// function showMessage(name, city) {
//   console.log('Hello I’m ' + name + '. I’m from ' + city);
// }

// showMessage('Serhii', 'Kyiv');
// showMessage('Sergo', 'Tbilisi');

//#endregion

//#region
// ------------ Functions expression ------------ //

// const userName = 'Ivan';

// const sayHello = function () {
//   let message = 'Hello, my name is ';
//   console.log(message + userName);
// };

// sayHello();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);

// console.log(result);

// const testFunc = function (a, b) {
//   console.log('a:', a);
//   console.log('b:', b);
//   c = a + b;

//   //   return c;
//   return 100;
// };

// console.log('Return', testFunc(7, 8));

// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };

// const b = function () {
//   console.log('function b');
// };

// const c = function () {
//   console.log('function c');
// };

// a();
// // b();
// // c();

//#endregion

//#region
// ------------- Arguments and rest arguments ------------ //

// const addName = function () {
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);
// };

// // addName();
// addName(1, 2, 3);

//#endregion

//#region
// ------------- Arguments and rest rest ------------ //

// const addName = function (...args) {
//   console.log(args);
// };

// // addName();
// addName(1, 2, 3);

//#endregion

//#region
// ------------- callback ------------ //

// function askQuestion(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else no();
// }

// function showOk() {
//   console.log('You say Ok');
// }

// function showCancel() {
//   console.log('You say No');
// }

// askQuestion('Yes or No', showOk, showCancel);

//#endregion

//#region
// ------------- High Order Function ------------ //

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const getName = function (callback) {
//   const name = 'Ivan';
//   callback(name);
// };

// getName(hello);

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const getName = function (hello) {
//   const name = 'Ivan';
//   hello(name);
// };

// getName(hello);

// // console.log(hello(getName)); // вернет код функции

// ------------- Anonim Function ------------ //
// const getName = function (callback) {
//   const name = 'Ivan';
//   callback(name);
// };
// // 1.
// getName(function (name) {
//   console.log(`Привет, ${name}! Это анонимный вызов.`);
// });
// // 2.
// getName(name => console.log(`Yo, ${name}!`));

// ------------------------ //
// function checkAge(age) {
//   if (age >= 18) {
//     return console.log('Hello');
//   }
//   return console.log('Good Buy');
// }

// checkAge(18);

// ------------------------ //
// function showMovie(age) {
//   if (age < 21) return;
//   return console.log('Go to movie');
// }

// showMovie(20);

//#endregion

//#region
// ------------- Arrow Function ------------ //

// const test = args => {
//   console.log(args);
// };

// test('Hello World');

// Arrow functions do not have an arguments pseudo-array.

// const showMovie = age => {
//   if (age < 21) return console.log('Bye');
//   return console.log('Go to movie');
// };

// showMovie(18);

//#endregion

//#region
// ------------- LexicalEnvironment ------------ //

/* LIFO – Last In, First Out
execution context
global execution context
functional execution context
Execution Context stack, call stack
Stack frame */

// function a() {
//   console.log('a');
// }

// const b = () => {
//   console.log('b');
// };

// const c = () => {
//   console.log('c');
//   a();
//   b();
// };

// c();

//#endregion

//#region
// ------------- Site Form Examole ------------ //

// console.log(document);

const addSum = number => {
  sum = Number(number) + 10;
  return console.log(sum);
};

const numberRef = document.querySelector("input[name='number']");
// console.log(numberRef.value);

const buttonRef = document.querySelector('button');
// console.log(buttonRef);

// buttonRef.addEventListener('click', () => {
//   console.log(numberRef.value);
// });

buttonRef.addEventListener('click', () => addSum(numberRef.value));
