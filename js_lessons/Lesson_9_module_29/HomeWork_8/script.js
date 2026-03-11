//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// Напишіть такий JavaScript, щоб після натискання
// на кнопку button, елемент <div id="text"> зникав.

//#region
// ------------- Problem 1/ Method 1 ------------- //
// debugger;

// const btn = document.querySelector('#btn');
// const text = document.querySelector('#text');

// const handleClick = () => {
//   if (text.style.display === 'none') {
//     text.style.display = 'block';
//   } else {
//     text.style.display = 'none';
//   }
// };

// btn.addEventListener('click', handleClick);

//#region
// ------------- Problem 1/ Method 2 ------------- //

// btn.addEventListener(
//   'click',
//   () => (text.style.display = text.style.display === 'none' ? 'block' : 'none'),
// );

//#region
// ------------- Problem 1/ Method 3 ------------- //
// debugger;

// btn.addEventListener('click', () => text.classList.toggle('is-hidden'));

//#region ------------------------------------------------------ //
// ------------------------- Problem 2 ------------------------- //
// ------------------------------------------------------------- //
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

//#region
// ------------- Problem 2/ Method 1 ------------- //
// debugger;

// // const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => btn.classList.toggle('is-hidden'));

//#region
// ------------- Problem 2/ Method 2 ------------- //
// btn.addEventListener('click', () => (btn.style.display = 'none'));

//#region ------------------------------------------------------ //
// ------------------------- Problem 3 ------------------------- //
// ------------------------------------------------------------- //
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

//#region
// ------------- Problem 3/ Method 1, 2, 3 ------------- //
// debugger;

const level = document.querySelector('#level');
const btnCancel = document.querySelector('#btnCancel');

// ------ Method 3.1 ------ //
// children returns HTMLCollection - has no method .forEach()
// Converting HTMLCollection to an Array
const handleClick = event => {
  [...event.target.children].forEach(child =>
    child.classList.toggle('is-hidden'),
  );
};

// ------ Method 3.2 ------ //
// Select all children of the current element
// const handleClick = event => {
//   event.target.querySelectorAll(':scope > *').forEach(child => {
//     child.classList.toggle('is-hidden');
//   });
// };

// ------ Method 3.3 ------ //
// for...of can work with HTMLCollection directly
// const handleClick = event => {
//   for (const child of event.target.children) {
//     child.classList.toggle('is-hidden');
//   }
// };

level.addEventListener('click', handleClick);

btnCancel.addEventListener('click', () =>
  document
    .querySelectorAll('.is-hidden')
    .forEach(element => element.classList.remove('is-hidden')),
);

// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
