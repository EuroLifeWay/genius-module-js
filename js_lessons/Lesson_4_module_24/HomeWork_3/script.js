//#region ----------------------------- //
// ------------- Problem 1 ------------ //
// ------------------------------------ //
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// ------------- Method 1 ------------- //
// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(17));

// ------------- Method 2 ------------- //
// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// console.log(checkAge(19));

//#region ----------------------------- //
// ------------- Problem 2 ------------ //
// ------------------------------------ //
// Напишіть функцію min(a, b),
// яка повертає менше з двох чисел a та b.

// ------------- Method 1 ------------- //
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else return b;
// }

// console.log(min(5, 7));
// console.log(min(9, 7));

// ------------- Method 2 ------------ //
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(5, 7));
// console.log(min(9, 7));

// ------------- Method 3 ------------ //
// function min(a, b) {
//   return Math.min(a, b);
// }

// console.log(min(5, 7));
// console.log(min(9, 7));

// ----------- Method 4 - Arrow Func - //
// const min = (a, b) => (a < b ? a : b);

// console.log(min(5, 7));
// console.log(min(9, 7));

//#region ----------------------------- //
// ------------- Problem 3 ------------ //
// ------------------------------------ //
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   },
// );

// ------------- Arrow Function ------------ //
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   () => {
//     alert('Ви погодились.');
//   },
//   () => {
//     alert('Ви скасували виконання.');
//   },
// );

// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
