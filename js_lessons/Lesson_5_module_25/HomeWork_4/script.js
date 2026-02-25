//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   //   studentId: 0,
//   //   name: 'name',
//   //   speciality: 'speciality',
//   infoStudent: function (averageScore, numberOfMissedLessons) {
//     console.group(`Student ${this.studentId}: `);
//     console.log(`Name: ${this.name}`);
//     console.log(`Speciality: ${this.speciality}`);
//     // console.log(`Average Score: ${this.averageScore}`);
//     console.log(`Average Score: ${averageScore}`);
//     // console.log(`Number of missed lessons: ${this.numberOfMissedLessons}`);
//     console.log(`Number of missed lessons: ${numberOfMissedLessons}`);
//     console.groupEnd();
//   },
// };

// const students = {
//   Serhii: {
//     studentId: 1,
//     name: 'Serhii',
//     speciality: 'Fullstack',
//     // averageScore: 10,
//     // numberOfMissedLessons: 4,
//   },
//   Ivan: {
//     studentId: 2,
//     name: 'Ivan',
//     speciality: 'Frontend',
//     // averageScore: 9,
//     // numberOfMissedLessons: 6,
//   },
//   Petro: {
//     studentId: 3,
//     name: 'Petro',
//     speciality: 'Backend',
//     // averageScore: 11,
//     // numberOfMissedLessons: 7,
//   },
// };

// // student.infoStudent.bind(students.Serhii)();
// // student.infoStudent.call(students.Ivan);
// // student.infoStudent.apply(students.Petro);

// student.infoStudent.bind(students.Serhii, 11, 5)();
// student.infoStudent.call(students.Ivan, 10, 5);
// student.infoStudent.apply(students.Petro, [12, 3]);

//#region
// ------------- Problem 1/ Method 2 ------------- //
// // ------ Method 1.1 ------ //
// const student = {
//   infoStudent: function (averageScore, numberOfMissedLessons) {
//     console.group(`Student ${this.studentId}: `);
//     consoleStudent = {
//       Name: this.name,
//       Speciality: this.speciality,
//       'Average Score': averageScore,
//       'Number of missed lessons': numberOfMissedLessons,
//     };
//     console.table(consoleStudent);
//     // console.table([consoleStudent]); //
//     console.groupEnd();
//   },
// };

// // ------ Method 2.2 ------ //
// // const student = {
// //   infoStudent: function (averageScore, numberOfMissedLessons) {
// //     console.group(`Student ${this.studentId}: `);
// //     consoleStudent = [
// //       { Description: 'Name', Meaning: this.name },
// //       { Description: 'Speciality', Meaning: this.speciality },
// //       { Description: 'Average Score', Meaning: averageScore },
// //       {
// //         Description: 'Number of missed lessons',
// //         Meaning: numberOfMissedLessons,
// //       },
// //     ];
// //     console.table(consoleStudent, ['Description', 'Meaning']);
// //     console.groupEnd();
// //   },
// // };

// // ------ Method 2.3 ------ //
// // const student = {
// //   infoStudent: function (averageScore, numberOfMissedLessons) {
// //     console.group(`Student ${this.studentId}: `);
// //     consoleStudent = {
// //       Name: this.name,
// //       Speciality: this.speciality,
// //       'Average Score': averageScore,
// //       'Number of missed lessons': numberOfMissedLessons,
// //     };
// //     // Преобразуем объект в массив объектов с нужными ключами
// //     const tableData = Object.entries(consoleStudent).map(([key, value]) => ({
// //       Description: key,
// //       Meaning: value,
// //     }));
// //     console.table(tableData);
// //     console.groupEnd();
// //   },
// // };

// const students = {
//   Serhii: {
//     studentId: 1,
//     name: 'Serhii',
//     speciality: 'Fullstack',
//     // averageScore: 10,
//     // numberOfMissedLessons: 4,
//   },
//   Ivan: {
//     studentId: 2,
//     name: 'Ivan',
//     speciality: 'Frontend',
//     // averageScore: 9,
//     // numberOfMissedLessons: 6,
//   },
//   Petro: {
//     studentId: 3,
//     name: 'Petro',
//     speciality: 'Backend',
//     // averageScore: 11,
//     // numberOfMissedLessons: 7,
//   },
// };

// student.infoStudent.bind(students.Serhii, 11, 5)();
// student.infoStudent.call(students.Ivan, 10, 5);
// student.infoStudent.apply(students.Petro, [12, 3]);

// // console.table(students.Serhii, ['Description', 'Meaning']);

//#region ------------------------------------------------------ //
// ------------------------- Problem 2 ------------------------- //
// ------------------------------------------------------------- //
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const description = {
//   showDescription() {
//     console.log(`${this.formulation}`);
//   },
// };

// const html = {
//   formulation:
//     'HTML (HyperText Markup Language) is a markup language used to\
//      create the structure and framework of web pages.',
// };

// const css = {
//   formulation:
//     'CSS (Cascading Style Sheets) is a stylesheet language used\
//      to style the appearance of HTML documents.',
// };

// // description.showDescription.bind(html)();

// document
//   .querySelector('#button-html')
//   .addEventListener('click', description.showDescription.bind(html));

// document
//   .querySelector('#button-css')
//   .addEventListener('click', description.showDescription.bind(css));

//#region ------------------------------------------------------ //
// ------------------------- Problem 3 ------------------------- //
// ------------------------------------------------------------- //
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function calculateCost(price, weight) {
//   //   return +(weight * price).toFixed(2);
//   return Math.round(weight * price * 100) / 100;
// }

// const Cost = {
//   costProduct(weight) {
//     const cost = calculateCost(this.price, weight);
//     console.log(`${this.name} cost ${cost} UAH per ${weight} kg.`);
//   },
// };

// const banana = {
//   name: 'banana',
//   price: 30,
// };

// const cherry = {
//   name: 'cherry',
//   price: 58,
// };

// const orange = {
//   name: 'orange',
//   price: 89,
// };

// Cost.costProduct.call(banana, 4.5);
// Cost.costProduct.call(cherry, 1.3);
// Cost.costProduct.call(orange, 3.4);

// ------------------------------------ //
// ------------------------------------ //
// ------------------------------------ //
