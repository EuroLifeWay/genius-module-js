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
//     constructor(props) {
//       this.profile = props;
//     }

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

//#region
// ------------- Problem 1/ Method 1.1 More clean!!! ------------- //
// class Abonent {
//   // Объявляем приватные поля
//   #name;
//   #tel;

//   constructor({ name, tel }) {
//     this.name = name; // вызывается сеттер
//     this.tel = tel; // вызывается сеттер
//   }

//   set name(newName) {
//     this.#name = newName;
//   }
//   get name() {
//     return this.#name;
//   }

//   set tel(newTel) {
//     this.#tel = newTel;
//   }
//   get tel() {
//     return this.#tel;
//   }

//   // Метод для красивого вывода в консоль
//   display() {
//     console.log(`Abonent -> Name: ${this.#name}, Tel: ${this.#tel}`);
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

// // Теперь можно получить просто имя
// console.log(Serhii.name, Serhii.tel); // "Serhii"
// console.log(Ivan.name, Ivan.tel); // "Ivan"
// console.log(Max.name, Max.tel); // "Max"

// // Или вызвать метод для полного вывода
// Serhii.display(); // "Abonent -> Name: Serhii, Tel: +380960000000"
// Ivan.display(); // "Abonent -> Name: Ivan, Tel: +380960000001"
// Max.display(); // "Abonent -> Name: Max, Tel: +380960000002"

// //#region
// // ------------- Problem 1/ Method 2 (for microservice..) ------------- //
// class Abonent {
//   #name;
//   #tel;

//   constructor(props) {
//     this.profile = props; // Используем сеттер
//   }

//   set name(val) {
//     this.#name = val;
//   }
//   get name() {
//     return this.#name;
//   }

//   set tel(val) {
//     this.#tel = val;
//   }
//   get tel() {
//     return this.#tel;
//   }

//   set profile({ name, tel }) {
//     this.#name = name;
//     this.#tel = tel;
//   }

//   get profile() {
//     return `Name : ${this.#name}; tel : ${this.#tel}`;
//   }
// }

// const usersData = {
//   Serhii: { name: 'Serhii', tel: '+380960000000' },
//   Ivan: { name: 'Ivan', tel: '+380960000001' },
//   Max: { name: 'Max', tel: '+380960000002' },
// };

// // const directory = {};
// // for (let key in usersData) {
// //   directory[key] = new Abonent(usersData[key]);
// // }

// // Более современный способ создания справочника
// const directory = Object.entries(usersData).reduce((acc, [key, value]) => {
//   acc[key] = new Abonent(value);
//   return acc;
// }, {});

// console.log(directory.Serhii.profile);
// console.log(directory.Ivan.profile);
// console.log(directory.Max.profile);

// console.log(directory.Serhii.name, directory.Serhii.tel);

// // 2. Меняем ТОЛЬКО телефон через отдельный сеттер
// directory.Serhii.tel = '+380001112233';

// // 3. Проверяем результат
// console.log(directory.Serhii.profile);

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
