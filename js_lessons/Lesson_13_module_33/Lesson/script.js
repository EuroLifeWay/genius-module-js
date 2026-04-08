// ------------------------------------------------------ //
// ------------------- TCP/IP ------------------ //
// ------------------- HTTP/ HTTPS ------------------ //
// ------------------- CRUD ------------------ //
// ------------------- REST API ------------------ //
// ------------------- Fetch ------------------ //
// ------------------- async/await ------------------ //
// ------------------- try...catch ------------------ //
// ------------------- WebSocket ------------------ //
// ------------------------------------------------------ //

//#region -------------------------------- //
// ------- HTTPS REST API -------- //
// --------------------------------------- //
// const btn = document.querySelector('.js-get-data');

// btn.addEventListener('click', getUrl);

// function getUrl() {
//   //   return fetch('https://api.monobank.ua/bank/currency');
//   //   return fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka');
// //   fetch(
// //     'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits',
// //   );
// }

// --------------------- fetch ---------------------- //
// let promise = fetch(url, {
//   method: "GET", // POST, PUT, DELETE та інші
//   headers: {
//     // значення цього заголовку зазвичай встановлюється автоматично,
//     // залежно від тіла запиту
//     "Content-Type": "text/plain;charset=UTF-8",
//   },
//   body: undefined, // string, FormData, Blob, BufferSource або URLSearchParams
//   referrer: "about:client", // або "", щоб не посилати заголовок Referer,
//   // або URL з поточного джерела
//   referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//   mode: "cors", // same-origin, no-cors
//   credentials: "same-origin", // omit, include
//   cache: "default", // no-store, reload, no-cache, force-cache або only-if-cached
//   redirect: "follow", // manual, error
//   integrity: "", // контрольна сума, наприклад "sha256-abcdef1234567890"
//   keepalive: false, // true
//   signal: undefined, // AbortController, щоб перервати запит
//   window: window, // null
// });

// ---------------- async/await ---------------- //
// async function f(params) {
//     return true;
// //   return Promise.resolve(true);
// }

// f().then(console.log);

// --- syntax
// let value = await promise

// -------------
// async function a() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   let result = await promise;

//   console.log(result);
// }
// a();

// -------------- await without async
// let response = await fetch('https://api.monobank.ua/bank/currency');

// const monoCurrency = async () => {
//   let response = await fetch('https://api.monobank.ua/bank/currency');
//   console.log(response);

//   if (response.ok) {
//     console.log('OK', response.status);
//   } else console.log('Err: ', response.status);
// };

// monoCurrency();

// -------------- Headers ---------------- //
// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// });
// headers.has('Content-Type');

// const postTest = async () => {
//     let user = {
//         name: "Ivan",
//         city: "Kyiv",
//     }

//     let response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
// }

// postTest().then()

// -------------- try...catch -------------- //
// https://uk.javascript.info/try-catch

// try {
//     console.log('Start');
//     // a;
//   console.log('Finish');
// } catch {
//   console.log('Err');
// }

// ---------
// try {
//   setTimeout(() => {
//     //   console.log('OK');
//     err; // if err into setTimeout - catch cannot intercept Err
//   }, 1000);
// } catch {
//   console.log('Err');
// }

// ---------
// setTimeout(function () {
//   try {
//     // console.log('OK');
//     err;
//   } catch (err) {
//     console.log('Err');
//   }
// }, 1000);

// --------- catch (err) --------- //
// try {
//   foo;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);

//   console.log(err);
// }

// --------- throw err --------- //
// let userJson = `{"name": "Ivan"}`;

// try {
//   let user = JSON.parse(userJson);
//   console.log('Name:', user.name);
//   //   console.log('Name:', user.city); // undefined
//   if (!user.city) {
//     throw new SyntaxError('No city');
//   }
//   console.log('Start'); // it won't arrive
// } catch (err) {
//   console.log('Err:', err.message);
// } finally {
//   console.log('finally');
// }

// --------- rethrowing --------- //
// let json = '{ "age": 30 }'; // неповні дані

// try {
//   user1 = JSON.parse(json);
//   console.log(user);
// } catch (err) {
//   if (err instanceof ReferenceError) {
//     console.log(err.name);
//     console.log(err.constructor.name);
//     console.log('ReferenceError: ', err.message); // "ReferenceError": помилка доступу до невизначеної змінної
//   }
// }

// ---------
// let json = '{ "age": 30 }'; // неповні дані
// // let json = '{ "age": 30, "name": "Ivan" }'; // неповні дані
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError('Неповні дані: відсутнє поле name');
//   }

//   blabla(); // непередбачувана помилка

//   console.log(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log('JSON Error: ' + err.message);
//   } else {
//     throw err; // повторне викидання (*)
//   }
// }

// ---------
// function readData() {
//   let json = '{ "age": 30 }';

//   try {
//     // ...
//     let user = JSON.parse(json);

//     if (!user.name) {
//       throw new SyntaxError('Неповні дані: відсутнє поле name');
//     }
//     // ...
//     blabla(); // помилка!

//     console.log(user.name);
//   } catch (err) {
//     // ...
//     if (!(err instanceof SyntaxError)) {
//       throw err; // повторне викидання (обробка іншого типу помилок не передбачена)
//     }
//     // Добавьте это, если хотите видеть SyntaxError снаружи:
//     console.log('Локально обработали синтаксис, но кидаем дальше...');
//     throw err;
//   }
// }

// try {
//   readData();
// } catch (err) {
//   console.log('Зовнішнє перехоплення: ' + err); // перехоплено!
// }

// --------- try…catch…finally --------- //
// try {
//    ... спроба виконати код ...
// } catch (err) {
//    ... обробка помилки ...
// } finally {
//    ... завжди буде виконано ...
// }

// ---------
// try {
//   console.log('try');
//   if (confirm('Помилка потрібна?')) BAD_CODE();
// } catch (err) {
//   console.log('catch');
// } finally {
//   console.log('finally');
// }

// ------------------- WebSocket ------------------ //
// let socket = new WebSocket("ws://")
// let socket = new WebSocket('wss://');

// / let socket = new WebSocket('ws://javascript.info');

// ------------
// let socket = new WebSocket(
//   'wss://javascript.info/article/websocket/demo/hello',
// );

// socket.onopen = function (e) {
//   console.log('🟢 Connected');
//   socket.send('HelloHello');
//   socket.send("I'm Ivan");
// };

// socket.onmessage = function (e) {
//   console.log('message', e.data);
// };

// socket.onclose = function (e) {
//   if (e.wasClean) {
//     console.log('Stopped', e.code, 'Cause', e.reason);
//   } else {
//     console.log('Is broken');
//   }
// };

// socket.onerror = function (err) {
//   console.log(err);
// };

// ----------- Chat example ----------- //
// let socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws');

// // send message from form
// document.forms.publish.onsubmit = function () {
//   let outgoinMassage = this.message.value;

//   socket.send(outgoinMassage);
//   return false;
// };

// // message received - show message in div#messages
// socket.onmessage = function (event) {
//   let message = event.data;

//   let messageElem = document.createElement('div');
//   messageElem.textContent = message;
//   document.getElementById('messages').prepend(messageElem);
// };

// ------------ XMLHttpRequest ------------ //
// let xhr = new XMLHttpRequest();

// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'test me!');

// // параметр 'q' закодований
// xhr.open('GET', url); // https://google.com/search?q=test+me%21

// xhr.send();

// // тіло відповіді {"message": "Привіт, світ!"}
// xhr.onload = function () {
//   let responseObj = xhr.response;
//   alert(responseObj.message); // Привіт, світ!
// };

// --------- event loop macrotasks microtasks --------- //
// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// 1 7 3 5 2 6 4

// --------------- API Fetch --------------- //
// https://developers.binance.com/docs/binance-spot-api-docs/faqs/market_data_only#restful-api

// async function getData() {
//   const url = 'https://example.org/products.json';
//   //   const url = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();
// -----------
// fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
//   .then(response => response.json())
//   .then(data => console.log(`Цена BTC: ${data.price} USDT`))
//   .catch(error => console.error('Ошибка:', error));

// -----------
// async function getFullBTCTicker() {
//   try {
//     // const response = await fetch('https://api.binance.com');
//     const response = await fetch(
//       'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',
//     );
//     const data = await response.json();

//     // console.log(`Response status: ${response.status}`);
//     console.log('Весь объект:', data);

//     // Пример обращения к конкретным значениям:
//     console.log(`Текущая цена: ${data.lastPrice}`); // Доступ через точку
//     console.log(`Максимум за сутки: ${data.highPrice}`);
//     console.log(`Объем торгов (USDT): ${data.quoteVolume}`);
//   } catch (error) {
//     console.error('Ошибка при получении данных:', error);
//   }
// }

// getFullBTCTicker();
