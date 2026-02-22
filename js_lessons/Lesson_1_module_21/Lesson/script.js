//------------------------------------------------//
// https://drive.google.com/open?id=1-KaEF3Mz-k5aq63MRr4rppE5lAe020Zq&usp=drive_fs
// https://drive.google.com/open?id=1qfx77c7_KfLb6NWTUla6_6BY_JZ49gJ1&usp=drive_fs

//------------------------------------------------//
// ------------- Variables // Змінні ------------ //
//------------------------------------------------//

// Create and get (create, get)
// Installation and addition (set, add)
// Removal and reset (remove, reset, delete)

//#region
// ---------------- Variables --------------- //

// console.log(a); // ReferenceError: a is not defined

// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// console.log(b); // ReferenceError: b is not defined

// const b = 15;
// console.log(b);

//#region
// ------------- Type of data // Типи данних ------------ //

// ------------- typeof ------------ //

// console.log(typeof 3);
// console.log(typeof 'adf');
// console.log(typeof true);

// Boolean;

// let nameFieldChecked = true; // так, ім’я було перевірене
// let ageFieldChecked = false; // ні, вік не був перевіреним

// Symbol - примітивний тип даних (новий тип даних який з‘явився в специфікації ES6)
// Спеціальний тип даних:
// undefined - зміна якій не присвоїли значення.
// null - нулєве значення, "пусте значення".

// ------------- number ------------ //

// приведення до числа

// const value = '3';
// console.log(typeof value);
// console.log(value);
// console.log(value + value);
// console.log(Number(value));
// console.log(typeof Number(value));
// let a = Number(value);
// let b = a + a;
// console.log(b);

// ------------- Number check // Перевірка на число ------------ //

// let a = 31;
// console.log(a);

// const number = Number('51'); // 51
// console.log(typeof number, number); // number 51
// console.log(Number.isNaN(number)); // false

// const string = Number('foo'); // Nan
// console.log(typeof string, string); // nimber NaN
// console.log(Number.isNaN(string)); // true

// ------------- Number.parseInt() и Number.parseFloat() ----------- //

// Number.parseInt() и Number.parseFloat()

// console.log(Number.parseInt('5aaaaa')); // 5
// console.log(Number.parseInt('12bbb666')); // 12
// console.log(Number.parseInt('11.6kkk666')); // 11
// console.log(Number.parseInt('ggggg')); // NaN

// console.log(Number.parseFloat('5aaaaa')); // 5
// console.log(Number.parseFloat('12bbb666')); // 12
// console.log(Number.parseFloat('11.6kkk666')); // 11
// console.log(Number.parseFloat('ggggg')); // NaN

// -------- Adding a decimal number // Додавання десятичного числа -------- //

// console.log(0.1 + 0.2 === 0.3); // false

// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

//#region
// --------------- Object Math // Объект Math --------------- //

// Math.trunc(num) - повертає лише цілу частину числа,
// відкидаючи (обрізаючи) всі дробові знаки
// Спеціальні значення: Для NaN, null, undefined або нечислових рядків повертає NaN
// console.log(Math.trunc(1.7)); // 1

// Math.floor(num) - метод повертає найбільше ціле число, що менше
// або дорівнює вказаному
// console.log(Math.floor(1.7)); // 1
// console.log(Math.floor(-4.1)); // 5

// Math.ceil(num) - метод повертає найменьше ціле число, яке більше,
// або дорівнює вказаному
// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(-2.3)); // -2

// Math.round(num) - повертає значення числа,
// округлене до найближчого цілого
// console.log(Math.round(1.7)); // 2
// console.log(Math.round(5.3)); // 5

// Math.max(num1, num2, ...) - повертає найбільше число із набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає наменше число із набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - повертає результат піднесення числа
// (основи base) до заданого степеня (exponent)
// console.log(Math.pow(4, 2)); // 16
// Також у сучасному JavaScript та Python часто використовують
// оператор піднесення до степеня ** (наприклад, 2 ** 3), що є аналогом Math.pow()
// console.log(4 ** 2);

// Math.random() - повертає випадкове число в діапазоні [0, 1) — від 0.0 до 0.999...
// Цей метод не є криптографічно безпечним і не підходить для цілей безпеки.
// Генерація числа від 0 до n: Math.random() * n.
// Генерація цілого числа від 0 до 10: Math.floor(Math.random() * 10).
// console.log(Math.random() * (max - min) + min); // min <= ... > max
// console.log(Math.random()); // 0 <= ... > 1
// console.log(Math.random() * 5); // 0 <= ... > 5
// console.log(Math.random() * (10 - 1) + 1); // 0 <= ... > 10

//#region
// -------------- String // Строки ------------- //

// String // Строки //

// let str = 'Привіт';
// let str2 = 'Одинарні лапки також дозволяються';
// let phrase = `так можна вставляти ${str}`;
// console.log(phrase);
// let name = 'Оля';
// let hello = `Привіт ${name}`;
// console.log(hello);

// const message = 'JavaScript ' + 'is' + ' awesome';
// console.log(message); // JavaScript is awesome

// --------------- Concatination // Конкатенація --------------- //

// let result;

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// result = 5 + 5 + '5';
// console.log(result); // '105'
// console.log(typeof result); // string

// --------------- String Metons // методи строк --------------- //

// String Metons // методи строк

// const js = "JavaScript";

// length - довжина
// toLowerCase() и toUpperCase()
// indexOf()
// includes()

// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// console.log(message); // Welcome to Bahamas!

// console.log(message.indexOf('t')); // 8
// console.log(message.indexOf('hello')); // -1

// // Всі методи строк чутливі до регістру
// console.log(message.includes("welcome")); // false
// console.log(message.includes("Welcome")); // true

// --------------- BigInt --------------- //

// BigInt

// const num = 9007199499994254740991n;
// console.log(typeof num);

//#region ----------------------------------------//
//---------------- Objects // Об'єкти ------------//
//------------------------------------------------//

// let obj = {
//   city: 'Kyiv',
//   birsday: '482',
//   age: '1544',
// };

// console.log(obj);

// let user = {
//   // об’єкт
//   name: 'Іван', // за ключем "name" зберігаємо значення "Іван"
//   age: 30, // за ключем "age" зберігати значення "30"
//   work: true,
// };

// console.log(user);

// отримаємо значення властивостей об’єкта:
// console.log(user.name); // Іван
// console.log(user.age); // 30

// ---------------- Methods // методи ---------------- //

// Methods // методи

// let user = {
//   name: 'Іван',
//   age: 30,
//   'likes birds': true, // Ім’я властивості з декількох слів повинно бути в лапках
// };

// delete user.age;
// console.log(user.age);

// user.likes birds = true// це викличе синтаксичну помилку
// user['likes birds'] = true; // правильний синтаксис
// console.log(user['likes birds']); // треба

// присвоювання значення властивості
// let user = {};
// user.name = 'Niko';
// console.log(user);
// user.age = 45;
// console.log(user);
// user['likes birds'] = true;
// console.log(user);

//#region
// ----------------- Цикл “for…in” Loop ----------------- //

// Цикл “for…in”
// Для перебору всіх властивостей

// Синтаксис:

// for (key in object) {
//   // тіло циклу виконується для кожної властивості об’єкта
// }
// Наприклад, виведемо всі властивості user:

// let user = {
//   name: 'Іван',
//   age: 30,
//   isAdmin: true,
// };

// let keyName = user.name;
// console.log(keyName); // Іван
// console.log(user[key][0]); // Іван

// for (let key in user) {
//   // ключі
//   console.log(key); // name, age, isAdmin
//   // значення ключів
//   console.log(user[key]); // Іван, 30, true
// }

// for (let i of 'Ivan') { // I v a n
//   console.log(i);
// }

//#region ----------------------------------------------------//
//------------ Впорядкування властивостей об’єкта ------------//
//------------------------------------------------------------//

// let codes = {
//   49: 'Німеччина',
//   41: 'Швейцарія',
//   44: 'Великобританія',
//   1: 'США',
// };

// чисельні властивості
// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
//   console.log(codes[code]); //
// }

// let user = {
//   name: 'Іван',
//   surname: 'Smith',
// };
// user.age = 25; // добавимо ще одну властивість

// // не цілочисельні властивості перераховані в порядку створення
// for (let prop in user) {
//   console.log(prop);
// } // name, surname, age

// В JavaScript є багато інших типів об’єктів:

// Array для зберігання впорядкованих колекцій даних,
// Date для зберігання інформації про дату і час,
// Error для зберігання інформації про помилку.
// … і так далі.

//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
