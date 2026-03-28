//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

//#region
// ------------- Problem 1/ Method 1: setInterval ------------- //
// debugger;

// function printNumbers(from, to) {
//   let i = from;
//   let intervalId = setInterval(() => {
//     console.log(i);
//     if (i === to) clearInterval(intervalId);
//     i++;
//   }, 1000);
// }

// printNumbers(5, 10);

//#region
// ------------- Problem 1/ Method 2: setTimeout ------------- //
// debugger;

// function printNumbers(from, to) {
//   let i = from;
//   let timeoutId = setTimeout(
//     (run = () => {
//       console.log(i);
//       if (i < to) timeoutId = setTimeout(run, 1000);
//       i++;
//     }),
//     1000,
//   );
// }

// printNumbers(5, 10);

// ----------------- with the help of AI ----------------- //
//#region
// ------------- Problem 1/ Method 3: Promise ------------- //
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function printNumbers(from, to) {
//   for (let i = from; i <= to; i++) {
//     console.log(i);
//     if (i < to) {
//       await delay(1000); // Ждем 1 секунду перед следующей итерацией
//     }
//   }
// }

// printNumbers(5, 10);

//#region
// ------------- Problem 1/ Method 4: IIFE (Immediately Invoked Function Expression) ------------- //
// --- usage IIFE (Immediately Invoked Function Expression) & Promise --- //
// debugger;

// (async (f, t) => {
//   for (let i = f; i <= t; i++) {
//     console.log(i);
//     if (i < t) await new Promise(r => setTimeout(r, 1000));
//   }
// })(5, 10);

//#region
// ------------- Problem 1/ Method 5 ------------- //
// debugger;

//#region ------------------------------------------------------ //
// ------------------------- Problem 2 ------------------------- //
// ------------------------------------------------------------- //
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

//#region
// ------------- Problem 2/ Method 1 ------------- //
// debugger;

//#region
// ------------- Problem 2/ Method 2 ------------- //

//#region ------------------------------------------------------ //
// ------------------------- Problem 3 ------------------------- //
// ------------------------------------------------------------- //

//#region
// ------------- Problem 3/ Method 1 ------------- //
// debugger;

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert('виконалось через 3 секунди'));

// // ------ Method 3.1 ------ //

// // ------ Method 3.2 ------ //

// // ------ Method 3.3 ------ //

// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
