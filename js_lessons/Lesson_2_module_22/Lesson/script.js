// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = 'JavaScript is awesome!';

// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm
// const isConfirm = confirm('Please confirm reservation');
// console.log(isConfirm);

// const test = confirm('Yes or No?');
// console.log(test);

// prompt
// const userName = prompt('Please enter your name:');
// console.log(userName);

// const number = prompt('Enter the number?');
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(value, typeof value);
// const newValue = String(value);
// console.log(newValue, typeof newValue);

// ---Number--- //

// value = '123';
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty");
// console.log(test);
// console.log(typeof value);

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN));
// console.log(Boolean(null));

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// == приведення до типу

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6);

//   -----not (!) ------ //

// console.log(!false);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні
// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (5 + 5 === 25) {
//   console.log('1');
// } else {
//   console.log('0');
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// }

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// 5 * 5 === 25 ? console.log('1') : console.log('0');
// 5 * 5 === 25 ? console.log(true) : console.log(false);

// if (5 + 5 === 10) {
//   console.log('5+5 === 10');
// } else if (2 + 2 === 4) {
//   console.log('2+2 === 4');
// } else {
//   console.log('no');
// }

// let leng = 'ua';

// if (leng === 'ua') {
//   console.log('Понеділок');
// } else if (leng === 'en') {
//   console.log('Monday');
// } else {
//   console.log('Reset');
// }

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
// }

// console.log(cost);

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt('Input minute');

// if (0 <= min && min < 15) {
//   console.log('1st quater');
// } else if (min < 30) {
//   console.log('2d quater');
// } else if (min < 45) {
//   console.log('3rd quater');
// } else if (min < 60) {
//   console.log('4th quater');
// } else {
//   console.log('Wrong input! Enter 0-60');
// }

// -----------

// const product = prompt('Input product').toLowerCase();
// let cost;

// switch (product) {
//   case 'apple':
//     cost = 10;
//     alert(`${product} cost, ${cost}`);
//     // console.log(product, 'cost', cost);
//     break;
//   case 'cherry':
//     cost = 15;
//     alert(`${product} cost, ${cost}`);
//     // console.log(product, 'cost', cost);
//     break;
//   case 'pear':
//     cost = 35;
//     alert(`${product} cost, ${cost}`);
//     // console.log(product, 'cost', cost);
//     break;
//   case 'srawberry':
//     cost = 50;
//     alert(`${product} cost, ${cost}`);
//     // console.log(product, 'cost', cost);
//     break;

//   default:
//     alert(`The product ${product} is out of stock`);
//     // console.log('The product', product, 'is out of stock');
//     break;
// }

// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);
