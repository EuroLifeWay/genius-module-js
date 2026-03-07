// ------------------------------------------------------ //
// ---------------- ES6 (ES2015) Features --------------- //
// ------------------------------------------------------ //
// • ES2015 - це офіційна назва, що відповідає офф. угоді про найменування.
// • ES6 це старіша, послідовна назва, яка залишається широко вживаною через те, що до неї звикли +
// коротша + означає перехід до сучасного JavaScript.

//#region
// 1. VARIABLES: let and const ⭐️⭐️⭐️⭐️⭐️
// let x = 10;
// x = 20;
// const y = 30; // Cannot reassign

// • Оголошення змінних із блочною областю, що замінює var.
// • let: Змінні, які можна перепризначити.
// • const: змінні, які не можна перепризначити (але об'єкт, на який вони посилаються, можна змінити).
// -> Error: 'const declarations must be initialized.
// • Тимчасова мертва зона (TDZ): змінні let i const недоступні до їх оголошення в коді. www

//#region
// 2. Arrow Functions ⭐️⭐️⭐️⭐️⭐️
// const sum = (a, b) => a + b;

// const diff = (a, b) => {
//   return a - b;
// };

// const add = (a, b) => a * b;

// console.log('Arrow Function Add Result', add(5, 3));

// 2.1 LEXICAL ENVIRONMENT
// const ob1 = {
//   p1: 'test',
//   p2: function () {
//     console.log(this.p1);
//   },
// };

// const ob2 = {
//   p1: 'test',
//   p2: () => {
//     console.log(this.p1);
//   },
// };

// ob1.p2(); // test
// ob2.p2(); // undefined

// Лексичне прив'язування this (успадковує this
// від найближчої області видимості - block scope).

//#region
// 3. КЛАСИ!!! ⭐️⭐️⭐️⭐️
// Classes (Приклади в кінці)
// Синтаксичний цукор над наслідування на основі прототипу JavaScript.
// • class MyClass { ... } constructor(), extends, super(),
// • статичні методи, getters/setter.

//#region
//4. Template Literals ⭐️⭐️⭐️⭐️⭐️
// const username = 'Alice';
// const greeting = `Hello, ${username}!`;
// const longMsg = `Lorem ipsum dolor sit amet et.
// Lorem ipsum dolor sit amet et`;

// console.log('Template Literal', greeting);

// • Рядкові літерали, які дозволяють вбудовані вирази.
// • Підтримка багаторядкових рядків без конкатенації.

//#region
// 5. Enhanced Object Literals
// const a = 1,
//   b = 2,
//   username = 'Ivan';

// const obj = {
//   a,
//   b,
//   myMethod() {
//     return this.a + this.b;
//   },
//   ['1' + 2]: a,
//   [username]: b,
// };
// console.log('Enhanced Object Literal', obj.myMethod());
// console.log(obj);

// • Скорочені назви властивостей: const obj = {x, y); (еквівалент const obj = {x: x, y: y :).
// • Скорочені назви методів: const obj = { myMethod() { ... } };
// • Імена властивостей з виразів: сonst key 'myKey'; const obj = { [ключ]: значення;

//#region
// 6. Destructuring ⭐️⭐️⭐️⭐️⭐️
// const person = {
//   a: ' John',
//   b: 'Wick',
//   c: '35',
// };

// const { a: name, b: lastName, c: age } = person;
// console.log('Destructuring', name, lastName, age);

// const func11 = param => {
//   const { a: name, b: lastName, c: age } = person;
//   console.log('Destructuring', name, lastName, age);
// };

// -------
// const func11 = ({ a: name, b: lastName, c: age }) => {
//   console.log('Destructuring', name, lastName, age);
// };

// func11(person);

// -------
// const func11 = (...args) => {
//   console.log('Destructuring', name, lastName, age);
// };

// func11(person, { a: name, b: lastName, c: age });

// -----------------
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log('Array Destructuring', one, two, three);

// • Витягування значення з об'єктів і масивів та перепризначати їх змінним.
// • const { propi, prop2 = obj; (деструктуризація об'єкта) www
// • const [itemi, item2) aггау; (деструктуризація масиву)
// • Можна використовувати з параметрами функції.

//#region
// 7. Default Parameters ⭐️⭐️⭐️⭐️⭐️
// const person = {
//   a: ' John',
//   b: 'Wick',
// };

// const func11 = ({ a: name, b: lastName, age = 35 }) => {
//   console.log('Destructuring', name, lastName, age);
// };

// func11(person);

// -------
// function greet(name = 'Guest') {
//   console.log(`Hello ${name}`);
// }

// greet();
// greet('Bob');

//#region
// 8. Rest Parameters ⭐️⭐️⭐️⭐️⭐️
// function sum(...numbers) {
//   const args = Array.from(numbers);
//   console.log(args);
//   console.log(numbers);
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log('Rest Parameter Sum', sum(1, 2, 3, 4));

// Дозволяє функції приймати невизначену кількість аргументів
// у вигляді масиву.

//#region
// 9. Spread Operator ⭐️⭐️⭐️⭐️⭐️
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];
// console.log('Spread Operator Array', arr2);
// console.log('Spread Operator Array', ...arr2);

// -------
// const obj = { a: 1, b: 2 };
// const obj2 = { ...obj, c: 3 };
// console.log('Spread Operator Object', obj2);
// console.log('Spread Operator Object', ...obj2);

// -------
// const person = {
//   a: ' John',
//   b: 'Wick',
// };

// const newObj = {
//   ...person,
// };

// console.log('Spread Operator Object', newObj);

// newObj.a = 'Dan';

// console.log('Spread Operator Object', newObj);

// • Розширює ітерацію (наприклад, масив або рядок) на окремі елементи.
// • Використовується для:
//      - Створення поверхневих копій масивів і об'єктів.
//      - Об'єднання масивів.
//      - Передача кількох аргументів функції.

//#region
// 10. for...of Loop ⭐️⭐️⭐️⭐️
// arr = [1, 2, 3, 4];
// for (const num of arr) {
//   console.log('for...of loop element:', num);
// }

// -------
// const person = {
//   a: ' John',
//   b: 'Wick',
// };

// for (const param of Object.entries(person)) {
//   console.log('for...of loop element:', param);
// }

// Перебирає об'єкти, які ітеруються (масиви, рядки, Maps, Sets, тощо).

//#region
// 11. Symbols ⭐️⭐️⭐️
// const sym = Symbol('mySymbol');
// const obj3 = { [sym]: 'Symbol Value' };
// console.log('Symbol Example', obj3[sym]);

// • Новий примітивний тип даних. Унікальний і незмінний.
// • Часто використовуються як ключі в об'єктах, щоб уникнути колізій імен
//   (особливо для авторів бібліотек).

//#region
// 12. Iterators and Generators ⭐️⭐️
// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = myGenerator();
// console.log('Generator:', gen.next().value);

// • Ітератори: об'єкти, які визначають чергу і спосіб доступу до неї.
//      - Реалізує метод пеxt(), який повертає об'єкт зі значенням і властивостями done.
// • Генератори: функції, які можна призупинити та відновити.
//      - Використовується через синтаксис function* та ключове слово yield.
//      - Легко створюйте ітератори.
//      - Корисно для роботи з асинхронним кодом.

// 13. Map and Set ⭐️⭐️⭐️⭐️
// const myMap = new Map();
// myMap.set('key', 'value');
// console.log('Map:', myMap.get('key'));

// const mySet = new Set([1, 2, 2, 3]);
// console.log('Set:', mySet, mySet.size);

// • Мар: набір пар ключ-значення, де ключі можуть мати будь-який тип даних.
// • Set: колекція унікальних значень.

// 14. Promises (Example with async/await later) ⭐️⭐️⭐️⭐️⭐️
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise Resolved!'), 500);
// });

// myPromise.then(result => console.log('Promise then:', result));

// -------
// const myPromise = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => resolve('Promise Resolved!'), 500);
//   } catch (e) {
//     reject();
//   }
// });

// myPromise.then(result => console.log('Promise then:', result));

// • Об'єкти, що представляють остаточне завершення (або невдачу) асинхронної операції.
// • Читабельніша альтернатива callback-ам.

// 15. Modules ⭐️⭐️⭐️⭐️⭐️
// (Приклад Вимагає модульної системи е.д., Node.js 3 type="module" або зборщик)
// Створити modulel.js: export const message = "Hello from module!";
// Створити module2.js: import { message) from './modulel.js'; console.log(message);
// Спосіб організації ходу JavaScript у перевикористовувані блоки.

// 16. Proxies ⭐️⭐️
// const target = {};
// const handler = {

// get: function(obj, prop) {
// return prop in obj ? obj [prop]: "Property does not exist";
// }
// };
// const proxy = new Proxy(target, handler);
// console.log("Proxy Example:", proxy.nonExistentProperty);

// • Об'єкти, які дозволяють перехоплювати та налаштовувати операції з іншими об'єктами
//   (наприклад, отримання/перевизначення властивостей, виклик функцій).
// • Корисно для перевірки, логування та інших завдань метапрограмування.
// • new Proxy(target, handler);

// 18. Typed Arrays ⭐️⭐️⭐️⭐️
// const typedArray = new Int32Array([1, 2, 3]);
// console.log("Typed Array", typedArray[0]);

// • Масиви, які містять значення певного числового типу (наприклад, Int32Array, Float64Array).
// • Забезпечує кращий перфоманс при роботі з бінарними даними.

// --------------------- НОВА ВЕРСІЯ E57 (E52016) Features --------------------- //
// 19. Array.prototype.includes() ⭐️⭐️⭐️⭐️⭐️
// console.log("Includes", arr.includes(2));

// ! Перевіряє тільки прості значення!

// 20. Exponentiation Operator ⭐️⭐️⭐️⭐️
// console.log("Exponentiation Operator", 2 ** 3);

// --------------------- НОВА ВЕРСІЯ E58 (ES2017) Features --------------------- //

// 21. async and await ⭐️⭐️⭐️⭐️⭐️⭐️⭐️

// async function myAsyncFunction() {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Server response'), 1000);
//   });
//   const result = await myPromise;
//   console.log('Async/Await:', result);
// }
// myAsyncFunction();
// //
// function myAsyncFunction2() {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Server response'), 1000);
//   });
//   const result = myPromise;
//   console.log('Without Async/Await:', result);
// }
// myAsyncFunction2();

// • Синтаксичний цукор для роботи з Promises, що полегшує читання та написання асинхронного коду.
// • async function myFunction() { ... await Promise; ...)
// • асинхронні функції завжди повертають Promise.
// • await призупиняє виконання функції, доки не буде виконано Promise.

// 22. Object.entries(), Object.values(), Object.keys() ⭐️⭐️⭐️⭐️⭐️
// const obj = {
//   a: ' John',
//   b: 'Wick',
// };

// console.log('Object Entries', Object.entries(obj));
// console.log('Object Values', Object.values(obj));
// console.log('Object Keys', Object.keys(obj));

// Object.keys(obj).forEach(key => {
//   obj[key] = 'person';
// });

// console.log(obj);

// 23. String.prototype.padStart(), String.prototype.padEnd() ⭐️⭐️⭐️
// console.log('padStart', '5'.padStart(3, '0'));
// console.log('padEnd', '5'.padEnd(3, '0'));

// Доповнює рядок іншим рядком (за потреби повторює), доки він не досягне певної довжини.

// --------------------- НОВА ВЕРСІЯ ES9 (ES2018) Features --------------------- //
// 24. Rest/Spread Properties for Objects ⭐️⭐️⭐️⭐️⭐️
// const obj2 = {
//   a: '123',
//   b: '1',
//   c: '2',
//   d: '3',
// };

// const { a: first2, ...rest2 } = obj2;
// console.log('Rest Properties', rest2);

// const obj4 = { ...obj2, d: 4 };
// const obj42 = { d: 4, ...obj2 };
// console.log('Spread Properties Object 2', obj4);
// console.log('Spread Properties Object 2', obj42);

// 25. Promise.prototype.finally() ⭐️⭐️⭐️⭐️⭐️
// myPromise
//   .then(() => console.log('Promise finished'))
//   .finally(() => console.log('Promise cleanup'));

// • Метод, який завжди виконується, незалежно від того, вирішується чи відхиляється Promise.
// • Корисно для завдань з очищення змінних та стеку.

// 26. Asynchronous Iteration ⭐️⭐️⭐️
// async function asyncIteration() {
//     async function asyncGenerator() {
//         yield Promise.resolve(1);
//         yield Promise.resolve(2);
//     }

//     for await (const num of asyncGenerator()) {
//         console.log("Async Iteration", num);
//     }
// }
// asyncIteration();

// • Дозволяє використовувати await у циклах for...await...of для повторення асинхронних ітерованих об'єктів (об'єк
// • for avait (const item of asyncIterable) (...)

// --------------------- НОВА ВЕРСІЯ ES10 (ES2019) Features --------------------- //

// 28. Array.prototype.flat(), Array.prototype.flatMap() ⭐️⭐️⭐️+
// const nestedArray = [1, [2, [3, 4]]];
// console.log('Flat Array', nestedArray.flat(2));

// const numbers = [1, 2, 3];
// const flatMapResult = numbers.flatMap(x => [x * 2]);
// console.log('Flat Map Array', flatMapResult);

// • flat(): Створює новий масив з усіма елементами підмасиву, об'єднаними в нього рекурсивно до заданої глибини.
// • flatMap(): зіставляє кожен елемент за допомогою функції відображення, а потім об'єднує результат у новий масив
// • Еквівалент аггау.map(callback).flat(1).

// 29. String.prototype.trimStart(), String.prototype.trimEnd() ⭐️⭐️⭐️
// const stringWithWhitespace = ' Hello ';
// console.log('Trim Start', stringWithWhitespace.trimStart());
// console.log('Trim End', stringWithWhitespace.trimEnd());
// console.log('Trim All', stringWithWhitespace.trim());

// 30. Object.fromEntries() ⭐️⭐️⭐️+
// const entries = [
//   ['name', 'Charlie'],
//   ['age', 30],
// ];
// const newObject = Object.fromEntries(entries);
// console.log('Object.fromEntries', newObject);

//31. Optional catch binding ⭐️⭐️⭐️
// try {
//   throw new Error('Test Error');
// } catch {
//   console.log('Error caught without binding');
// }

// Використовується, коли змінна catch не потрібна.
// Спрощує код у випадках, коли потрібно лише виконати основну дію,
// без деталей (наприклад, зареєструвати помилку).

// --------------------- НОВА ВЕРСІЯ ES11 (ES2020) Features --------------------- //

//33. BigInt ⭐️⭐️⭐️⭐️⭐️
// const bigInt = 123456789012345678901234567890n;
// console.log('BigInt', bigInt);

// Представляє великі цілі числа, не завжди сумісний (див. caniuse.com)

// 34. Nullish Coalescing Operator (77) ⭐️⭐️⭐️⭐️⭐️
// const nullValue = null;
// const defaultValue = nullValue ?? 'Default';
// console.log('Nullish Coalescing', defaultValue);

// Повертає правий операнд, якщо ліва частина дорівнює null або undefined

// 35. Optional Chaining Operator (7.) ⭐️⭐️⭐️⭐️⭐️
// const user = { address: {street: "Main St" } };
// const street = user?.address?.street;
// console.log("Optional Chaining", street);

// Безпечний доступ до властивості

//36. Promise.allSettled() ⭐️⭐️⭐️⭐️⭐️
// const promisel = Promise.resolve(1);
// const promise2 = Promise.reject(2);

// Promise.allSettled([promisel, promise2]).then(results => {
//   console.log('Promise.allSettled', results);
// });

// Виконується, коли всі Promise виконано

// 37. import() Function (Dynamic Import) потрібна підтримка модулів ⭐️⭐️⭐️⭐️⭐️
// import("./module.js').then(module => { console.log('Dynamic Import', module); });

// 38. globalThis ⭐️⭐️
// console.log('globalThis', globalThis);

// Стандартизований спосіб доступу до глобального об'єкта.

// 39. String.prototype.replaceAll() ⭐️⭐️⭐️⭐️
// const text = 'This is a test test';
// console.log('String ReplaceAll', text.replaceAll('test', 'success'));

// --------------------- НОВА ВЕРСІЯ E512 (ES2021) Features --------------------- //

// 40. Numeric Separators ⭐️⭐️
// const largeNumber = 1_000_000;
// console.log('Numeric Separators', largeNumber);

// 41. Promise.any() ⭐️⭐️⭐️⭐️
// const promise3 = Promise.reject('Error Promise 3');
// const promise4 = Promise.resolve('Success Promise 4');

// Promise.any([promise3, promise4])
//   .then(value => console.log('Promise.any', value))
//   .catch(err => console.error('Promise.any Rejected', err));

// Виконується, коли будь-який з Рromis-ів повертає результат.

// 42. Logical Assignment Operators ⭐️⭐️⭐️⭐️
// let a1 = null;
// a1 ??= 'Default Value';
// console.log('Nullish Assignment', a1);

// let b1 = true;
// b1 &&= 'Truthy Value';
// console.log('Truthy Assignment', b1);

// let c1 = false;
// c1 ||= 'Falsy Value';
// console.log('Falsy Assignment', c1);

// ??= перевіряє лише значення null або undefined.

// --------------------- НОВА ВЕРСІЯ ES13 (ES2022) Features --------------------- //

// 43. Top-Level Await (Requires module context) ⭐️⭐️⭐️⭐️⭐️
// const response await fetch('https://example.com/data'); //Only valid inside a module

// 44. Class Static Blocks (See Class Example) ⭐️⭐️⭐️⭐️⭐️

// 45. .at() Method ⭐️⭐️⭐️
// const myArray3 = [10, 20, 30];
// console.log('Array.at()', myArray3.at(-1));

// const myString3 = 'Hello';
// console.log('String .at()', myString3.at(-1));

// 46. Error Cause ⭐️⭐️⭐️⭐️
// const originalError = new Error('Original Error');
// try {
//   throw new Error('Secondary Error', { cause: originalError });
// } catch (error) {
//   console.log('Error Cause', error.cause.message);
// }

// 47. Object.hasOwn() ⭐️⭐️⭐️⭐️⭐️
// const obj5 = { name: 'David' };
// console.log('Object.hasOwn', Object.hasOwn(obj5, 'name'));

// ------------------------------------------------------------------- //

// ------------------------------ //
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user = new User('Джек');
// console.log(user.name); // Джек
// console.log(user.isAdmin); // false

// ------------------------------ //
// function User(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log('Моє ім’я: ' + this.name);
//   };
// }
// let john = new User('Джон');
// john.sayHi();

// ------------------------------ //
// debugger;

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }

// console.log(showPrimes(6));
