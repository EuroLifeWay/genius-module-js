// ------------------------------------------------------ //
// ------------------- Asynchronous Js ------------------ //
// ------------------------------------------------------ //

//#region -------------------------------- //
// ------- setTimeout setInterval -------- //
// --------------------------------------- //
// ---------- setTimeout ----------- //
// let timerId = setTimeout(func | code, [delay], [arg1], [arg2], ...);

// Параметри:
// func|code
// Функція або рядок коду для виконання. Зазвичай це функція. З історичних
// причин можна передати рядок коду, але це не рекомендується.
// delay
// Затримка перед запуском, у мілісекундах (1000 мс = 1 секунда), типове значення –
// 0.
// arg1, arg2…
// Аргументи, які передаються у функцію (не підтримується в IE9-)

// function sayHi() {
//   alert('Привіт');
// }

// setTimeout(sayHi, 1000);

// // wrong!
// setTimeout(sayHi(), 1000);

// ------- with args --------
// function sayHi(phrase, who) {
//   alert(phrase + ', ' + who);
// }

// setTimeout(sayHi, 1000, 'Привіт', 'Джон'); // Привіт, Джон

// ------- string to function --------
// setTimeout("alert('Привіт')", 1000);

// ------- arrow function --------
// setTimeout(() => alert('Привіт'), 1000);

// ---------- clearTimeout ----------- //
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// let timerId = setTimeout(() => alert('ніколи не відбувається'), 3000);
// alert(timerId); // ідентифікатор таймера

// // clearTimeout(timerId);

// ---------- setInterval ----------- //
// // повторити з інтервалом 2 секунди
// let timerId = setInterval(() => console.log('тік'), 1000);

// // // зупинити через 10 секунд
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log('стоп');
// }, 10000);

// ------- Nested setTimeout instead of setInterval ------- //
// instead of
// let timerId = setInterval(() => console.log('тік'), 2000);

// let timerId = setInterval(
//   (tick = () => {
//     console.log('tick');
//     timerId = setInterval(tick, 2000);
//   }),
//   2000,
// );

// clearInterval(timerId);

// ------- setInterval vs setTimeout -------- //
// // function func(...num) {
// //   console.log(`funk${num}`);
// // }

// let i = 1;
// let intervalId = setInterval(function () {
//   func(i++);
//   // console.log(i++);
// }, 1000);

// // let i = 1;
// // let intervalId = setTimeout(function run() {
// //   func(i++);
// //   // console.log(i++);
// //   intervalId = setTimeout(run, 1000);
// // }, 1000);

// setTimeout(() => {
//   clearTimeout(intervalId);
//   console.log('stop');
// }, 11000);

// --- setTimeout(func, 0) or setTimeout(func) --- //
// setTimeout(() => console.log('World'), 0);

// console.log('Hello');

//#region -------------------------------- //
// ----------------- Date ---------------- //
// --------------------------------------- //
// let start = Date.now();
// // console.log(start);
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember the delay from the previous call

//   if (start + 100 < Date.now())
//     console.log(times); // show delays after 100 ms
//   else setTimeout(run); // otherwise reschedule
// });

// ----------------- new Date() ---------------- //
// let today = new Date();
// let birthday = new Date("December 17, 1995 03:24:00");
// work in all runtimes
// let birthday = new Date("1995-12-17T03:24:00");
// will work reliably
// let birthday = new Date(1995, 11, 17);
// let birthday = new Date(1995, 11, 17, 3, 24, 0);
// const birthday5 = new Date(628021800000); // passing epoch timestamp

// let dateNow = Date.now();
// console.log(dateNow);

// let date = new Date(82, 3, 6);
// console.log(date);

// ----------- Year ----------- //
// // Deprecated method, 82 maps to 1982
// date.setYear(26);
// console.log(date);

// date.setFullYear(26);
// console.log(date);

// date.setYear(2026);
// console.log(date);

// --- Example: Calculating Time Elapsed --- //
// function func() {
//   for (i = 0; i < 100; i++) console.log(i);
// }

// --- Using Date objects --- //
// let start = Date.now();

// func();
// let end = Date.now();

// let elapsed = end - start;
// console.log(elapsed);

// // --- Using built-in methods --- //
// let start = new Date();

// func();
// let end = new Date();

// let elapsed = end.getTime() - start.getTime();
// console.log(elapsed);

// // --- Tests a function and returns its return value --- //
// function printElapsedTime(fTest) {
//   let nStartTime = Date.now();
//   vReturn = fTest();
//   let nEndTime = Date.now();

//   console.log('Elapsed time: ' + String(nEndTime - nStartTime) + ' msec');

//   return vReturn;
// }

// yourFunctionReturn = printElapsedTime(func);
// console.log(yourFunctionReturn);

// // --- Get the number of seconds since the Unix epoch --- //
// let seconds = Math.floor(Date.now() / 1000);
// console.log(seconds);

// let days = Math.floor(Date.now() / 86400000);
// console.log(days);

// --- Get the number of seconds hours days month years since the Unix epoch --- //

//#region
// ---------- Dates: Date Basics ------------ //
// let date = new Date('1982-04-06'); // Tue Apr 06 1982 04:00:00 GMT+0400 (Восточная Европа, летнее время)
// console.log("new Date('1982-04-06')", date);

// let dateTimeStamp = Date.parse('1982-04-06'); // 386899200000
// console.log("Date.parse('1982-04-06')", dateTimeStamp);

// let dateFromTimeStamp = new Date(dateTimeStamp); // Tue Apr 06 1982 04:00:00 GMT+0400 (Восточная Европа, летнее время)
// console.log('Date(dateTimeStamp)', dateFromTimeStamp);

// console.log(new Date(dateTimeStamp).getFullYear());
// console.log(new Date(dateTimeStamp).getMonth());
// console.log(new Date(dateTimeStamp).getDay());
// console.log(new Date(dateTimeStamp).getDate());
// console.log(new Date(dateTimeStamp).getHours());
// console.log(new Date(dateTimeStamp).getMinutes());
// console.log(new Date(dateTimeStamp).getSeconds());
// console.log(new Date(dateTimeStamp).getMilliseconds());

// let fullYearFromTimeStamp = new Date(dateTimeStamp).getFullYear();
// console.log(fullYearFromTimeStamp);

// ---------
// const date = new Date('2020-05-12T23:50:21.817Z');
// console.log(date.toString()); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
// console.log(date.toDateString()); // Tue May 12 2020
// console.log(date.toTimeString()); // 18:50:21 GMT-0500 (Central Daylight Time)
// console.log(date[Symbol.toPrimitive]('string')); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

// console.log(date.toISOString()); // 2020-05-12T23:50:21.817Z
// console.log(date.toJSON()); // 2020-05-12T23:50:21.817Z

// console.log(date.toUTCString()); // Tue, 12 May 2020 23:50:21 GMT

// console.log(date.toLocaleString()); // 5/12/2020, 6:50:21 PM
// console.log(date.toLocaleDateString()); // 5/12/2020
// console.log(date.toLocaleTimeString()); // 6:50:21 PM

// // ---------
// const date = new Date('2000-01-17T16:45:30');
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// // [0, 17, 2000] as month are 0-indexed
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// // [16, 45, 30]
// console.log(month, day, year, hour, minutes, seconds);

// // // ------- toLocaleString() ------- //
// const today = new Date();
// // console.log(today.toLocaleString('default', { month: 'long' }));
// // console.log(today.toLocaleString('default', { month: 'short' }));
// console.log(today.toLocaleString('it-IT', { month: 'long' }));
// console.log(today.toLocaleString('uk-UK', { month: 'long' }));
// console.log(today.toLocaleString('uk-UK', { month: 'short' }));

// ------- Calculating the "digital root" of a number ------- //
// -------
// let sum = 0;
// for (let item of String(dateTimeStamp)) {
//   sum += Number(item);
// }

// console.log(sum);

// -------
// let n = String(dateTimeStamp);

// while (n.length > 1) {
//   console.log(n);
//   n = String(Array.from(n, Number).reduce((a, b) => a + b, 0));
// }

// console.log(n);

// // -------
// let n = dateTimeStamp;
// let sum = 0;
// while (n > 0) {
//   sum += n % 10;
//   n = Math.floor(n / 10);
// }

// console.log(sum);

// -------
// const sum = ((dateTimeStamp - 1) % 9) + 1;
// console.log(sum);

//#region ------------------------------ //
// ---------- Dates: Date Math --------- //
// ------------------------------------- //
// // --- Adding days to a date --- //
// const my_date = new Date();

// const throughWeek = my_date.setDate(my_date.getDate() + 7);
// console.log(new Date(throughWeek));

// // --- Getting tomorrow’s date --- //
// const today = new Date();
// console.log(today);
// console.log(today.toDateString());

// const tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow.toDateString());

// // --- Getting yesterday’s date --- //
// const today = new Date();

// const yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);

// console.log(today.toDateString());
// console.log(yesterday.toDateString());

// // --- Calculating the time until your birthday --- //
// const today = new Date();
// console.log(today);
// const todayTimeStamp = Date.now();
// console.log(todayTimeStamp);

// console.log('-'.repeat(60));
// const birthDay = new Date('1982-04-06T00:00:00+02:00');
// console.log(birthDay);
// // const birthDayTimeStamp = Date.parse(birthDay); // 386899200000 // not recommended
// // const birthDayTimeStamp = Date.parse('1982-04-06T00:00:00+02:00'); // 386899200000
// // const birthDayTimeStamp = birthDay.getTime(); // recommended // 386899200000
// const birthDayTimeStamp = +birthDay; // 386899200000
// console.log(birthDayTimeStamp);

// console.log('-'.repeat(60));
// const msBeforeBirthDay = todayTimeStamp - birthDayTimeStamp; // 1387800105836
// console.log(msBeforeBirthDay);
// const daysBeforeBirthDay = Math.floor(msBeforeBirthDay / 86400000);
// console.log(daysBeforeBirthDay);

// console.log('-'.repeat(60));
// const futureBirthDay = new Date('2026-04-06T00:00:00+02:00');
// console.log(futureBirthDay);
// const futureBirthDayTimeStamp = futureBirthDay.getTime();
// console.log('futureBirthDayTimeStamp', futureBirthDayTimeStamp);

// console.clear();
// console.log('-'.repeat(60)); // console.log("".padStart(60, '-'));
// const msUntilFutureBirthDay = futureBirthDayTimeStamp - todayTimeStamp; // ms
// console.log('msUntilFutureBirthDay', msUntilFutureBirthDay);
// const fullDaysUntilFutureBirthDay = Math.floor(
//   msUntilFutureBirthDay / 86400000, // days
// );
// console.log('fullDaysUntilFutureBirthDay', fullDaysUntilFutureBirthDay);

// const msRestOfFutureBirthDay =
//   msUntilFutureBirthDay - fullDaysUntilFutureBirthDay * 86400000;
// console.log('msRestOfFutureBirthDay', msRestOfFutureBirthDay);
// // const secondRestOfDay = Math.floor(msRestOfFutureBirthDay / 1000);
// // console.log('secondRestOfDay', secondRestOfDay);
// const hoursRestOfDay = Math.floor(msRestOfFutureBirthDay / 3600000);
// console.log('hoursRestOfDay', hoursRestOfDay);
// const minutesRestOfHours = Math.floor(
//   (msRestOfFutureBirthDay % 3600000) / 60000,
// );
// console.log('minutesRestOfHours', minutesRestOfHours);
// const secondsRestOfMinutes = Math.floor(
//   ((msRestOfFutureBirthDay % 3600000) % 60000) / 1000,
// );
// console.log('secondsRestOfMinutes', secondsRestOfMinutes);

// -------------
// setInterval(() => {
//   // 1. Очистить консоль (необязательно, если нужна история)
//   console.clear();

//   // 2. Вывести обновленные данные
//   const now = new Date().toLocaleTimeString();
//   console.log(`Текущее время: ${now}`);
// }, 1000); // 1000 мс = 1 сек

// -------------
// // let currentTime;
// function time() {
//   // return Math.floor(new Date().getTime() / 1000);
//   console.clear();
//   console.log(Math.floor(new Date().getTime() / 1000));
// }
// // document.write(time());
// setInterval(time, 1000);

// // setInterval(function () {
// //   currentTime = time();
// // }, 1000);

//#region ------------------------------ //
// --------------- async --------------- //
// ------------------------------------- //
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i + ' second(s) elapsed (1)');
//   }, i * 3000);
//   console.log(i * 3000 + ' (1)');
// }

// for (var i = 1; i <= 3; i++) {
//   console.log(i + ' second(s) elapsed (2)');
// }

// for (var i = 1; i <= 3; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i + ' second(s) elapsed (3)');
//     }, i * 1000);
//   })(i);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i + ' second(s) elapsed');
//   }, i * 1000);
// }

//#region ------------------------------ //
// -------------- Promise -------------- //
// ------------------------------------- //
// let promise = new Promise(function(resolve, reject) {
//   // код, котрий поверне результат (по аналогії код–"виробник", код-"співак")
// });

// Функція передана в new Promise називається виконавцем. Коли створюється new Promise вона запускається автоматично. В ній знаходиться код “виробник” котрий зрештою поверне результат. В контексті нашої аналогії: виконавець – це “співак”.

// Аргументи функції виконавця resolve і reject – це колбеки, які надає сам JavaScript. Наш код має бути тільки всередині функції виконавця.

// Після завершення своєї роботи функція виконавець повинна викликати один з цих колбеків:

// resolve(value) – якщо код успішно виконався, з результатом value. (resolve перекладається як вирішити, розв’язати)
// reject(error) – якщо виникла помилка, error – об’єкт помилки. (reject в перекладі відхилити, відмовити)
// Отже, функція виконавець запускається автоматично і намагається виконати роботу. А потім викликає перший аргумент (resolve) якщо спроба була успішною чи другий аргумент (reject) якщо виникла помилка.

// new Promise повертає об’єкт promise. В цього об’єкта є дві властивості: state і result:

// state – спочатку має значення "pending" (очікування). А далі значення змінюється або на "fulfilled" якщо функція виконавець викликала аргумент resolve, або на "rejected", якщо функція виконавець викликала reject.
// result – спочатку має значення undefined. А далі значення змінюється або на value якщо функція-виконавець викликала resolve(value), або ж на error, якщо функція виконавець викликала reject(error).

// --------------
// let promise = new Promise(function (resolve, reject) {
//   // функція-виробник викликається автоматично, при виклику new Promise

//   // через 1 секундну повідомляється що задача виконання з результатом "завершено"
//   setTimeout(() => resolve('завершено'), 1000);
//   resolve(123);
// });

// console.log(promise);
// promise.then(value => console.log(value));

// -------------- promise.then() --------------
// promise.then(
//   function (result) {
//     console.log(result); /* обробляє успішне виконання */
//   },
//   function (error) {
//     /* обробляє помилку */
//   },
// );

// -------------- result --------------
// // після запуску resolve запуститься перший аргумент в .then
// promise.then(
//   result => alert(result), // виведе "завершено!" через 1 секунду
//   error => alert(error), // не запуститься ніколи
// );

// -------------- error -------------- //
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('Ооооой!')), 1000);
// });

// // метод reject запустить другу функцію передану в .then
// promise.then(
//   result => alert(result), // не запуститься ніколи
//   error => alert(error), // виведе "Error: Ооооой!" через 1 секунду
// );

// -------------- if our need only to resolve -------------- //
// let promise = new Promise(resolve => {
//   setTimeout(() => resolve('завершено!'), 1000);
// });

// promise.then(console.log); // виведе "завершено!" через 1 секунду

// -------------- promise.catch() -------------- //
// -------------- if our need only to error -------------- //
// // .then(null, errorHandlingFunction)
// // or
// // .catch(errorHandlingFunction)
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Ооооой!')), 1000);
// });

// promise.then(null, alert);
// // .catch(f) те саме що й promise.then(null, f)
// promise.catch(alert); // виведе "Error: Ооооой!" через 1 секунду

// -------------- promise.finally() -------------- //
// new Promise((resolve, reject) => {
//   /* зробити щось, що займе час і потім викликати resolve/reject */
// })
//   // виконається коли проміс завершиться (стане "settled"), незалежно від того, успішно чи ні
//   .finally(() => зупинити індикатор завантаження)
//   // отож індикатор завантаження завжди зупинятиметься перед тим як ми будемо обробляти результат/помилку
//   .then(result => вивести результат, err => вивести помилку)

// // --- whith then --- //
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve('результат'), 2000);
// })
//   .finally(() => alert('Проміс завершений')) // запускається першим
//   .then(result => alert(result)); // <-- .then показує "резульат"

// --- whith catch --- //
// new Promise((resolve, reject) => {
//   throw new Error('помилка');
// })
//   .finally(() => alert('Проміс завершений')) // запускається першим
//   .catch(err => alert(err)); // <-- .catch обробляє об’єкт помилки

// --- we can add a handler at any time --- //
// // при створенні проміс одразу ж перейде в стан успішно завершений (`"resolved"`)
// let promise = new Promise(resolve => resolve('завершено!'));

// promise.then(alert); // виведе "завершено!"
