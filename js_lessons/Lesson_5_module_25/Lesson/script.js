// ------------------------------------------------------- //
// ----------------------- Function ---------------------- //
// ------------------------------------------------------- //
// ------------- closure this call apply bind ------------ //
// ------------------------------------------------------- //

// https://drive.google.com/open?id=1lRPqZuOqsLzkCii--7xJmH6wJDKVgr2M&usp=drive_fs
// https://uk.javascript.info/closure
// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44
// https://uk.javascript.info/object-methods
// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
// https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript

// #region
// ------------- Functions closure ------------ //

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// createNewSum(5);
// // «не работает» (ничего не выводит),
// console.log(createNewSum(5));
// // потому что createNewSum возвращает новую функцию, но не выполняет её.

// // Вот что происходит пошагово:
// // 1. Вы вызываете createNewSum(5).
// // 2. Внутри создается «замыкание», где n = 5.
// // 2. Функция возвращает «коробку» с кодом console.log(10 * 5), но не открывает её.

// // ----- Classic method ----- //
// const calc = createNewSum(5); // Сохранили "коробку" с n = 5
// calc(); // Вызвали — в консоли 50

// // ----- Fast method ----- //
// createNewSum(5)();

// ------------------------ //
// function createNewNumber(n) {
//   return function (number) {
//     return n * number;
//   };
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10));

// ------------------------ //
// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl('com');
// const uaUrl = createUrl('ua');

// console.log(comUrl('google'));
// console.log(comUrl('fb'));
// console.log(uaUrl('google'));
// console.log(uaUrl('fb'));

// #region
// ------------------ this ------------------ //
// function hello() {
//   console.log('Hello', this);
// }

// hello();

// const user = {
//   name: 'Ivan',
//   city: 'Odesa',
//   // sayHello: hello,
//   sayHello: hello,
// };

// user.sayHello();

// ------------------------ //
// function abc() {
//   console.log('In function');
//   console.log(this);
// }

// abc();

// document.querySelector('p').onclick = abc;

// ------------------------ //
// function changeColor() {
//   // console.log(this);
//   this.style.background = 'green';
// }

// // document.querySelector('div').onclick = changeColor;

// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

//#region
// ------------ Arrow without this ------------ //
// const showList = () => {
//   console.log(this);
// };

// showList();

// const list = {
//   names: ['Ann', 'Stan', 'Ivan'],
//   showList: showList,
// };

// list.showList();

//#region
// ------------ bind ------------ //
// Метод bind створює копію функції fn з прив'язаним контекстом obj та
// аргументами arg1, arg2 тощо, після чого повертає її як результат своєї роботи. В
// результаті ми отримуємо копію функції з прив'язаним контекстом, яку можна
// передати куди завгодно і викликати будь-коли.
// Найчастіше метод bind використовується для прив'язки контексту передачі
// методів об'єкта як функцій зворотного виклику.

// // function hello() {
// //   console.log(this);
// // }

// const user = {
//   name: 'Ivan',
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// // user.hello();
// // user.sayHelloWindow();
// // user.info();

// const Ann = {
//   name: 'Anna',
//   age: 23,
// };

// const Stan = {
//   name: 'Stan',
//   age: 33,
// };

// user.info.bind(Ann)('Kyiv');

// // user.info.bind(Stan, 'Kyiv')();
// const StanInfo = user.info.bind(Stan, 'Kyiv')();

// StanInfo;

//#region
// ------------ call ------------ //
// метод call викличе функцію fn передавши їй це посилання на об'єкт obj,
// а також аргументи arg1, arg2 і т.д.

// const userInfo = {
//   name: 'name',
//   age: 34,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.groupEnd();
//   },
// };

// // userInfo.logInfo('Developer');

// const Vano = {
//   name: 'Ivan',
//   age: 33,
// };

// userInfo.logInfo.call(Vano, 'Developer');

//#region
// ------------ apply ------------ //
// Метод apply повний аналог методу call крім того, що синтаксис виклику
// аргументів вимагає не перерахування, а масив.

// const showUserInfo = {
//   name: name,
//   age: 34,
//   logInfo: function (job, city) {
//     console.group(`info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`City is ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: 'Ivan',
//   age: 33,
// };

// // showUserInfo.logInfo.call(Vano, 'Developer', 'Lviv');
// showUserInfo.logInfo.apply(Vano, ['Developer', 'Lviv']);

//#region
// ------------- Examples ------------ //
// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: 'Bukovel' };
// const Tourist = { hotel: 'Tourist' };

// message.bind(Bukovel, 'Ivan', '5')();
// message.bind(Tourist, 'Ivan', '3')();

// message.call(Bukovel, 'Ivan', '5');
// message.call(Tourist, 'Ivan', '3');

// message.apply(Bukovel, ['Ivan', '5']);
// message.apply(Tourist, ['Ivan', '3']);

// ------------------------ //
// const card = {
//   showItems() {
//     console.log('In bag:', this.items);
//   },
// };

// const woman = {
//   items: ['Dress', 'Shoes'],
// };

// const man = {
//   items: ['Costume', 'Shirt'],
// };

// const child = {
//   items: ['Shorts', 'T-shirt'],
// };

// // card.showItems.bind(man)();

// document
//   .querySelector('#wom')
//   .addEventListener('click', card.showItems.bind(woman));

// document
//   .querySelector('#man')
//   .addEventListener('click', card.showItems.bind(man));

// document
//   .querySelector('#kid')
//   .addEventListener('click', card.showItems.bind(child));

// ------------------------ //
// const infoCar = {
//   name: 'BMW',
//   model: 'X5',
//   color: 'titanium',
//   showInfo: function () {
//     console.log(
//       'Car: ' + this.name + ', model: ' + this.model + ', color: ' + this.color,
//     );
//   },
// };

// const car2 = {
//   name: 'Audi',
//   model: 'A5',
//   color: 'black',
// };

// infoCar.showInfo();
// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);

// ------------- Example AI ------------ //
//#region
// 1. Создание специализированных функций
// Вместо того чтобы каждый раз передавать два числа, вы можете создать функцию
// «под конкретную задачу»:
// function createMultiplier(factor) {
//   return function (n) {
//     return n * factor;
//   };
// }

// const double = createMultiplier(2); // Запомнила factor = 2
// // console.log(double); // выведет функцию c factor 2
// const triple = createMultiplier(3); // Запомнила factor = 3
// // console.log(triple); // выведет функцию c factor 3

// console.log(double(5)); // передала 5 в функцию, как n и выполнила n * factor = 10
// console.log(triple(5)); // 15

// // Задание «на засыпку»:
// // Как вы думаете, что произойдет, если мы создадим функцию createMultiplier
// // (из предыдущего примера) и вызовем её так:
// const result = createMultiplier(5)(10);
// // console.log(createMultiplier(5)); // // выведет функцию c factor 5
// console.log(result);

// // Такой прием (вызов функции сразу после другой функции) называется
// // каррированием (currying) или просто последовательным вызовом.
// // Разбор механики:
// // Когда вы пишете createMultiplier(5)(10), JavaScript выполняет это в два этапа:
// // createMultiplier(5) — вызывается первая функция. Она возвращает
// // «внутреннюю» функцию, которая «запомнила», что factor равен 5.
// // ... (10) — вторые скобки тут же вызывают эту только что полученную
// // внутреннюю функцию, передавая ей аргумент n = 10.
// // В итоге: 5 * 10 = 50

//#region
// 2. Инкапсуляция (Приватные данные)
// Это позволяет скрыть переменную внутри функции, чтобы её нельзя было изменить
// извне напрямую. Только через возвращаемую функцию:
// function createCounter() {
//   let count = 0; // Эта переменная "спрятана"
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// // Доступа к переменной count напрямую нет. Она живет только внутри замыкания.

// 3. Отложенное выполнение
// В разработке интерфейсов (React, Vue) это часто используют,
// чтобы подготовить функцию к выполнию по клику, заранее «зарядив» её данными.

//#region
// 4. счётчик со сбросом,
// который может не только прибавлять, но и сбрасывать значение
// Чтобы сделать счётчик, который умеет и прибавлять, и сбрасывать, нам нужно
// вернуть не одну функцию, а объект с несколькими функциями. Все они будут иметь
// доступ к одной и той же «скрытой» переменной count.
// function createCounter() {
//   let count = 0; // Наше приватное состояние

//   return {
//     increment: function () {
//       count++;
//       console.log(`Текущий счет: ${count}`);
//     },
//     reset: function () {
//       count = 0;
//       console.log('Счет сброшен');
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// const myCounter = createCounter();

// myCounter.increment(); // Текущий счет: 1
// // createCounter().increment(); // Текущий счет: 1
// myCounter.increment(); // Текущий счет: 2
// console.log(myCounter.getCount()); // 2

// // myCounter.reset();     // Счет сброшен

// // myCounter.increment(); // Текущий счет: 1

// Почему это круто:
// Безопасность: Вы не можете случайно написать myCounter.count = 1000 в
// основном коде, потому что переменная count недоступна снаружи. Изменить её
// можно только через методы increment или reset.
// Независимость: Если вы создадите const counter2 = createCounter(), у него
// будет свой собственный, отдельный count. Они не будут мешать друг другу.

//#region
// 5. счётчик с автосбросом
// В JavaScript функции — это объекты. Мы можем добавить нашему счетчику
// возможность «автосброса», если значение станет слишком большим.
// Попробуйте догадаться, что выведет этот код, если мы добавим условие:
// function createSmartCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     if (count > 3) count = 0;
//     return count;
//   };
// }

// const counter = createSmartCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// console.log(counter()); // ? 0
// console.log(counter()); // 1
