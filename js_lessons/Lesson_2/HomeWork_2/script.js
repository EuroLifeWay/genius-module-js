// ------------- Problem 1 ------------ //

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// const value = 1;
// const value = 0;
// const value = -3;

// value > 0 ? console.log(true) : console.log(false);

// ------------- Problem 2 ------------ //

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const value = 'test';
// const value = 'qwerty';
// const value = true;

// if (value === 'test') {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ------------- Problem 3 ------------ //

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const value = 1;
// const value = 10;
// const value = 13;

// if (value > 10) {
//   console.log(value - 5);
// } else if (value < 10) {
//   console.log(value + 5);
// } else {
//   console.log(
//     "The variable is equal to '0', which does not correspond to the conditions of the problem",
//   );
// }

// ------------- Problem 4 ------------ //

// Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = Number(prompt('Input month number'));

// switch (month) {
//   case 1:
//     console.log('Your month is "January"');
//     break;
//   case 2:
//     console.log('Your month is "February"');
//     break;
//   case 3:
//     console.log('Your month is "March"');
//     break;
//   case 4:
//     console.log('Your month is "April"');
//     break;
//   case 5:
//     console.log('Your month is "May"');
//     break;
//   case 6:
//     console.log('Your month is "June"');
//     break;
//   case 7:
//     console.log('Your month is "July"');
//     break;
//   case 8:
//     console.log('Your month is "August"');
//     break;
//   case 9:
//     console.log('Your month is "September"');
//     break;
//   case 10:
//     console.log('Your month is "October"');
//     break;
//   case 11:
//     console.log('Your month is "November"');
//     break;
//   case 12:
//     console.log('Your month is "December"');
//     break;

//   default:
//     console.log('Your month number is incorrect! Please try again.');
//     break;
// }

// ------------- Problem 5 ------------ //

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// ------------- Method 1 ------------ //
// let num = prompt('Please enter a 3-digit number');
// num = Number(Math.abs(num));

// if (num.toString().length === 3 && !isNaN(Number(num))) {
//   console.log('foo');
//   const a = Math.floor(num / 100);
//   //   console.log(a);
//   const b = Math.floor((num % 100) / 10);
//   //   console.log(b);
//   const c = Math.floor(num % 10);
//   //   console.log(c);
//   const sum = a + b + c;
//   console.log(`${a} + ${b} + ${c} = ${sum}`);
// } else {
//   console.log('Please try again.');
// }

// ------------- Method 2 ------------ //
// let num = prompt('Please enter a 3-digit number');
// num = Number(Math.abs(num));

// if (num.toString().length === 3 && !isNaN(Number(num))) {
//   console.log('foo');
//   const a = Number(num.toString().at(0));
//   const b = Number(num.toString().at(1));
//   const c = Number(num.toString().at(2));
//   const sum = a + b + c;
//   console.log(`${a} + ${b} + ${c} = ${sum}`);
// } else {
//   console.log('Please try again.');
// }

// ------------------------------------ //
