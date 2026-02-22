
https://edu.genius.space/uk/courses/fullstack20/module/modul23/lesson/modul-23
https://drive.google.com/open?id=11q2ZB2LSDUiilHS6qBLWoGNCqZrwyx0M&usp=drive_fs
// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// }

// console.log("Global", b);

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;

// while (a < 5) {
//   a++;
//   console.log('a', a);
// }

// let a = 3;

// while (a) console.log(a--);

// let a = 0;

// do {
//   console.log(a);
//   a++;
//   //   console.log(a++);
// } while (a < 5);

// for

// for (let a = 0; a < 5; a++) {
//   console.log(a);
// }

// let a = 0;

// for (; a < 5; ) {
//   a++;
//   console.log(a);
// }

// let sum = 0;

// while (true) {
//   let value = +prompt('Input number');
//   console.log(value, typeof value);
//   if (!value) break;
//   sum += value;
// }

// console.log('Sum', sum);

// for (i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// for (i = 1; i < 11; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr = ['Apple', 'Orange', 'Plum'];

// arr[2] = 'Lemon';
// arr[3] = 'Cherry';
// console.log(arr);

// arr.push('Pear');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift('Pear');
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// console.log(b);

// a = 10;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// console.log(arr);

// arr.push(4);

// console.log(arr2);

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// ---------- splice ---------- //
// let arr = ['a', 'b', 'c', 'd', 'c'];

// // not correct
// delete arr[2];
// console.log(arr);
// console.log(arr.length);

// arr.splice(2, 1);
// console.log(arr);
// console.log(arr.length);

// ---------- slice ---------- //
// arr2 = arr.slice(1, 3);
// console.log(arr);
// console.log(arr2);

// ---------- concat ---------- //
// let arr2 = [1, 2, 3];
// console.log(arr.concat(arr2, 'test'));

// ---------- index ---------- //
// console.log(arr.indexOf('c', 3));
// console.log(arr.lastIndexOf('c', -2));

// ---------- includes ---------- //
// console.log(arr.includes('c'));

// ---------- array/object ---------- //
// const fruits = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Orange' },
//   { id: 2, name: 'Plum' },
//   { id: 3, name: 'Pear' },
//   { id: 4, name: 'Orange' },
//   { id: 5, name: 'Orange' },
// ];

// ---------- find ---------- //
// let fruit1 = fruits.find(item => item.id === 2);
// console.log(fruit1);

// let fruit2 = fruits.find(item => item.name === 'Orange');
// console.log(fruit2);

// console.log(fruits[2]);

// ---------- filter ---------- //
// let fruit = fruits.filter(item => item.name === 'Orange');
// console.log(fruit);
// console.log(fruit.length);

// let fruit = fruits.filter(item => item.id > 2);
// console.log(fruit);

// ---------- map ---------- //
// let result = fruits.map(item => item.name.length);
// console.log(result); // [5, 6, 4, 4, 6, 6]
// let red = result.reduce((accum, item) => accum + item);
// console.log(red);

// ---------- split ---------- //
// let names = 'Ann, Peter, John, Serhii';

// let arr = names.split(', ');
// console.log(arr);

// ---------- join ---------- //
// // let arr = ['Ann', 'Peter', 'John', 'Serhii'];

// let newString = arr.join(', ');
// console.log(newString);

// ---------- reduce ---------- //
// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((accum, item) => accum + item);
// console.log(red);

// let arr = [1, 2, 3, 4, 5];

// let avarage = arr.reduce((accum, item) => accum + item) / arr.length;
// console.log(avarage);
