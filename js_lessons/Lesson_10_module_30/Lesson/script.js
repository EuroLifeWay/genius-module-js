// ------------------------------------------------------ //
// -------------------- localStorage -------------------- //
// ------------------------------------------------------ //
// localStorage.setItem('name', 'Serhii');
// const a = localStorage.getItem('name');
// console.log(a);

// --------
// localStorage.user = { name: 'John' };
// console.log(localStorage.user); // [object Object]

// --------
// localStorage.user = JSON.stringify({ name: 'Тарас' });
// // через деякий час
// let user = JSON.parse(localStorage.user);
// console.log(user.name); // Тарас

// // // додано параметри форматування до JSON.stringify, щоб об’єкт виглядав краще
// console.log(JSON.stringify(localStorage, null, 2));

// localStorage.clear();

// ---------- localStorage ----------- //
// function check() {
//   let val = document.getElementsByName('user-male');
//   if (val[0].checked) {
//     console.log('Male');
//   } else console.log('Female');
// }

// let form = document.querySelector('.form');
// let nameInput = document.querySelector('.input-name');
// let lastNameInput = document.querySelector('.input-last-name');
// let age = document.querySelector('#age');
// let male = document.getElementsByName('user-male');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.value,
//     // male: male[0].checked,
//     male: male[0].checked ? 'male' : 'female',
//   };
//   console.log(info);
//   localStorage.setItem('info', JSON.stringify(info));
// }

// if (localStorage.getItem('info')) {
//   const ls = JSON.parse(localStorage.getItem('info'));
//   console.log(ls);
//   nameInput.value = ls.name;
//   lastNameInput.value = ls.lastName;
// }

// ---------- formData localStorage ----------- //
// let form = document.querySelector('#form');
// let formData = {};

// form.addEventListener('input', function (event) {
//   console.log(event.target.value);
//   //   formData.country || (formData['country'] = form.country.value);
//   //   formData.country ||= form.country.value;
//   formData.country ??= form?.country?.value;
//   formData[event.target.name] = event.target.value;
//   console.log(formData);
// });

// // form.addEventListener('submit', event => {
// //   event.preventDefault();
// //   console.log(formData);
// // });

// ---------- formData ----------- //
// let form = document.querySelector('#form');
// let formData = {};

// form.addEventListener('input', function (event) {
//   formData.country ??= form?.country?.value;
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem('formData', JSON.stringify(formData));
// });

// if (localStorage.getItem('formData')) {
//   let ls = localStorage.getItem('formData');
//   formData = JSON.parse(ls);

//   for (let key in formData) {
//     // form.elements[key].value = formData[key];
//     form[key].value = formData[key];
//   }
// }

// localStorage.removeItem('formData');
// localStorage.clear();

// ---------- button Events ----------- //

// console.log("Hello, I'm JS");

// -------------------------------- //
// ------- Event delegation ------- //
// -------------------------------- //

// -------------------------------- //
// ---------- Drug & Drop --------- //
// -------------------------------- //
