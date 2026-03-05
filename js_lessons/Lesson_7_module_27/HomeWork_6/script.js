//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

//#region
// ------------- Problem 1/ Method 1 ------------- //

// debugger;

// function Calculator() {
//   this.nums = read();

//   function read() {
//     a = +prompt('Input first number');
//     b = +prompt('Input second number');
//     return [a, b];
//   }

//   this.sum = function () {
//     console.log(
//       `${this.nums[0]} + ${this.nums[1]} = ${this.nums.reduce((prev, next) => prev + next)}`,
//     );
//   };

//   this.mul = function () {
//     console.log(
//       `${this.nums[0]} * ${this.nums[1]} = ${this.nums.reduce((prev, next) => prev * next)}`,
//     );
//   };

//   this.dif = function () {
//     console.log(
//       `${this.nums[0]} - ${this.nums[1]} = ${this.nums.reduce((prev, next) => prev - next)}`,
//     );
//   };

//   this.div = function () {
//     console.log(
//       `${this.nums[0]} / ${this.nums[1]} = ${this.nums.reduce((prev, next) => prev / next)}`,
//     );
//   };
// }

// const calc = new Calculator();

// calc.sum();
// calc.mul();
// calc.dif();
// calc.div();

//#region
// ------------- Problem 1/ Method 2 ------------- //

// debugger;

// function Calculator() {
//   this.nums = read();
//   this.a = this.nums.a;
//   this.b = this.nums.b;

//   function read() {
//     a = +prompt('Input first number');
//     b = +prompt('Input second number');
//     return { a, b };
//   }

//   this.sum = function () {
//     console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
//   };

//   this.mul = function () {
//     console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
//   };

//   this.dif = function () {
//     console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
//   };

//   this.div = function () {
//     console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
//   };
// }

// const calc = new Calculator();

// calc.sum();
// calc.mul();
// calc.dif();
// calc.div();

//#region
// ------------- Problem 1/ Method 3 ------------- //

// // ------ Method 1.1 ------ //

// // ------ Method 2.2 ------ //

// // ------ Method 2.3 ------ //

//#region ------------------------------------------------------ //
// ------------------------- Problem 2 ------------------------- //
// ------------------------------------------------------------- //

//#region ------------------------------------------------------ //
// ------------------------- Problem 3 ------------------------- //
// ------------------------------------------------------------- //

// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
