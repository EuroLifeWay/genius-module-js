// ------------------------------------------------------ //
// ------------------ OOP Object Class ------------------ //
// ------------------------------------------------------ //
// - encapsulation abstraction inheritance polymorphism - //
// ------------------------------------------------------ //

// https://drive.google.com/open?id=1LOyU0f2AxXQts-zx_nxQ_6BEvgG6WpXw&usp=drive_fs
// https://drive.google.com/open?id=1XgOj_3yWFhwMCqVRHKf5FXs_EXxhiNLD&usp=drive_fs
// Додаткові матеріали
// http://xn--80adth0aefm3i.xn--j1amh/%D0%9E%D0%9E%D0%9F
// https://www.pcmag.com/encyclopedia/term/spaghetti-code
// https://scaleyourapp.com/spaghetti-code-explained/
// https://uk.javascript.info/object
// https://uk.javascript.info/class
// https://uk.javascript.info/class-inheritance
// https://uk.javascript.info/static-properties-methods
// https://uk.javascript.info/private-protected-properties-methods
// https://uk.javascript.info/extend-natives

// #region
// ------------- Procedural Programming ------------ //
// const sum = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// };

// console.log(credit(sum, month, p));

//#region
// ------------- Object-Oriented Programming ------------ //
// const credit = {
//   sum: 20000,
//   month: 12,
//   p: 1000,
//   //   result: function () {
//   result() {
//     return this.sum + this.p * this.month;
//   },
// };

// console.log(credit.result());

//#region
// ------------------- Object() ------------------- //
// let user = new Object(); // синтаксис "конструктора об’єктів"
// let user = {};  // синтаксис "літералу об’єкта"
// ------------------------------------------------ //

// let ob = new Object();

// ob.property = 'тест';

// // alert(ob.property);
// console.log(ob);
// console.log(ob.property);

//#region
// ---------------- Object.create() ---------------- //
// var ob = Object.create(null, { property: { value: 'тест' } });
// // alert(ob.property);
// console.log(ob.property);

// // Object.create(proto, [descriptors]) – створює пустий об’єкт
// // з властивістю [[Prototype]], що
// // посилається на переданий об’єкт proto, та необов’язковими для передачі
// // дескрипторами властивостей descriptors.
// console.log(Object.getPrototypeOf(ob));

// ------ літеральний спосіб ------ //
// var ob = { property: 'тест' };
// // alert( ob.property );
// console.log(ob.property);

// ---------- Function - constructor ---------- //
// function myOb() {
//   this.property = 'тест';
// }
// var ob = new myOb();
// console.log(ob.property);

//#region
// ------------------- Class ------------------- //
class myOb {
  constructor() {
    this.property = 'тест'; // свойство
  }
}
var ob = new myOb();
// console.log(ob.property);

// ------------------- //
class User {
  constructor(name) {
    this.name = name; // свойство
  }

  // метод
  sayHi() {
    console.log(`Привет, я ${this.name}`);
  }
}

let user = new User('Иван'); // создание объекта (экземпляра)
user.sayHi(); // Привет, я Иван

const admin = new User('Алексей'); // создание объекта (экземпляра)
admin.sayHi(); // Привет, я Алексей

//#region
// -------------- NewClass extends (Super)Class -------------- //
// class Bank {
//   static type = 'Privat';
//   constructor(options) {
//     this.sum = options.sum;
//     this.month = options.month;
//     this.p = options.p;
//   }

//   credit() {
//     // return this.sum + this.p * this.month;
//     console.log(this.sum + this.p * this.month);
//     console.log("I'm Privat");
//   }
// }

// // const userBank = new Bank({
// //   sum: 3000,
// //   month: 5,
// //   p: 500,
// // });

// // console.log(userBank.credit());
// // userBank.credit();
// // console.log(Bank.type);

// -------------- Class extends -------------- //
// class NewBank extends Bank {
//   constructor(options) {
//     super(options);
//     this.card = options.card;
//   }

//   credit() {
//     super.credit();
//     // console.log(this.sum + this.p * this.month);
//     console.log("I'm Aval");
//   }
// }

// const aval = new NewBank({
//   sum: 3000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// // console.log(aval.card);
// aval.credit();

//#region
// ------------------- get & set ------------------- //

// class User {
//   constructor(props) {
//     this.name = props.name;
//     this.age = props.age;
//   }

//   firstName = '';
//   lastName = '';
//   age = '';
//   city = '';

//   set name(newName) {
//     const nameRow = newName.split(' ');
//     this.firstName = nameRow[0];
//     this.lastName = nameRow[1];
//   }

//   get name() {
//     return ` First name : ${this.firstName}, last name : ${this.lastName}`;
//   }
// }

// const Serhii = new User({
//   name: 'Serhii Voloshyn',
//   age: 44,
// });

// const Ivan = new User({
//   name: 'Ivan Ivanov',
//   age: 45,
// });

// console.log(Serhii);
// console.log(Serhii.name);
// console.log(Ivan);
// console.log(Ivan.name);

//#region
// ------------------- prototype ------------------- //
// https://uk.javascript.info/function-prototype

// const a = [1, 2, 3];
// console.log(a);

// ------------------- //
// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);

// console.log(b);
// console.log(b.x);

// // ------------------- //
// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// console.log(Rabbit.prototype);

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('Білий кролик'); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true
// console.log(rabbit.name); // Білий кролик

// ------------------- //
// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   //   this.sale = function () {
//   //     // this.sales++;
//   //     this.sales += 1;
//   //   };
// };

// const ann = new Manager('Anna', 5);
// const ivan = new Manager('Ivan', 10);

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// console.log(ann.sales);
// ann.sale();
// console.log(ann.sales);

// // console.dir(Manager);

//#region
// ------------------- Incapsulation Privatre variable ------------------- //
// function myOb() {
//   var zmina = 'приватна зміна';
//   this.property = 'тест';
//   this.getZmina = function () {
//     return zmina;
//   };
// }

// var ob = new myOb();
// console.log(ob.zmina); //undefined
// console.log(ob.getZmina());

// ---------- CofeeMachine ---------- //
// class CofeeMachine {
//   _water = 0;
//   #waterLimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     } else if (value > this.#waterLimit) {
//       value = this.#waterLimit;
//     }
//     this._water = value;
//   }
// }

// let cofeeMachine = new CofeeMachine(100);

// console.log(cofeeMachine);

// cofeeMachine.waterAmount = 20;
// console.log(cofeeMachine);

// cofeeMachine.waterAmount = -20;
// console.log(cofeeMachine);

// cofeeMachine.waterAmount = 600;
// console.log(cofeeMachine);

// ------------------- //
// class User {
//   constructor(name) {
//     // викликає сеттер
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log('Ім’я занадто коротке.');
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User('Іван');
// console.log(user.name); // Іван

// // user = new User(''); // Ім’я занадто коротке.
// // console.log(user.name); // undefined
