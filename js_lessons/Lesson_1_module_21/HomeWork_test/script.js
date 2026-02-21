//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = 'Ivan';
// let city = 'Kyiv';
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = 'Olga';
// console.log(`привіт ${1}`); // 1
// console.log(`привіт ${'name'}`); // name
// console.log(`привіт ${name}`); // Olga

//***3***
//Видобути число зі змінних
// let a = '5';
// a = Number(a);
// console.log(a, typeof a);
// let b = '13cvb';
// b = Number.parseInt(b);
// console.log(b, typeof b);
// let c = '12.9sxdcfgv';
// c = Number.parseFloat(c);
// console.log(c, typeof c);
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);
// console.log(Math.random() * (8 - 3) + 3);

//***7**
//дізнатись довжину message
// const message = 'Welcome to Bahamas!';
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// console.log('message'.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = 'Ivan';
// user.age = 45;
// user.birthCity = 'Kyiv';
// console.log(user);

// // delete user.birthCity;
// // console.log(user);

// user['like flowers'] = true;
// console.log(user);

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in user) {
//   console.log(key + ': ' + user[key]);
// }

for (let key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(key + ': ' + user[key]);
  }
}
