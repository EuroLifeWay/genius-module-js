//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// Створити телефонну книгу:
// - створити початковий клас Abonent, де зберігатимуться ім'я і номер
// - створити set який прийматиме телефон і номер
// - створити get який виводитиме данні про абонента
// - створити три різних юзери
// - вивести данні

//#region
// ------------- Problem 1/ Method 1 ------------- //
// debugger;

// class Abonent {
//   constructor(props) {
//     this.profile = props;
//   }

//   name = '';
//   tel = '';

//   set profile(data) {
//     if (data.name) this.name = data.name;
//     if (data.tel) this.tel = data.tel;
//   }

//   get profile() {
//     return `Name: ${this.name}; tel.: ${this.tel}`;
//   }
// }

// const Serhii = new Abonent({
//   name: 'Serhii',
//   tel: '+380960000000',
// });

// const Ivan = new Abonent({
//   name: 'Ivan',
//   tel: '+380960000001',
// });

// const Max = new Abonent({
//   name: 'Max',
//   tel: '+380960000002',
// });

// console.log(Serhii.profile);
// console.log(Ivan.profile);
// console.log(Max.profile);

//#region
// ------------- Problem 1/ Method 2 (for microservice..) ------------- //
// class Abonent {
//   constructor(props) {
//     this.profile = props;
//   }

//   name = '';
//   tel = '';

//   set profile(data) {
//     this.name = data.name;
//     this.tel = data.tel;
//   }

//   get profile() {
//     return `Name : ${this.name}; tel : ${this.tel}`;
//   }
// }

// const usersData = {
//   Serhii: { name: 'Serhii', tel: '+380960000000' },
//   Ivan: { name: 'Ivan', tel: '+380960000001' },
//   Max: { name: 'Max', tel: '+380960000002' },
// };

// const directory = {};
// for (let key in usersData) {
//   directory[key] = new Abonent(usersData[key]);
// }

// console.log(directory.Serhii.profile);
// console.log(directory.Ivan.profile);
// console.log(directory.Max.profile);

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
