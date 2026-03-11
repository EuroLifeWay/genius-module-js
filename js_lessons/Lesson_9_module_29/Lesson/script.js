// ------------------------------------------------------ //
// ---------------------- Events --------------------- //
// ------------------------------------------------------ //

// ---------- .addEventListener ----------- //

// ---------- button Events ----------- //
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// const btn6 = document.querySelector('#btn6');

// btn1.addEventListener('click', () => console.log('click')); // When clicking a button
// btn2.addEventListener('contextmenu', () => console.log('contextmenu')); // When you right-click
// btn3.addEventListener('mouseover', () => console.log('mouseover')); // On hover
// // btn3.addEventListener('mouseout', () => console.log('mouseout')); // When the cursor leaves the button
// // btn4.addEventListener('mouseup', () => console.log('mouseup')); // When you release the click on the button
// btn4.addEventListener('mousedown', () => console.log('mousedown')); // When you press a button click
// btn5.addEventListener('mousemove', () => console.log('mousemove')); // When moving the cursor on the button
// btn6.addEventListener('keyup', () => console.log('keyup')); // When you press the keyboard
// // btn6.addEventListener('keydown', () => console.log('keydown')); // While holding down the key

// ---------- button add/remove Events ----------- //
// const addBtn = document.querySelector('#_add');
// const removeBtn = document.querySelector('#remove');
// const clickBtn = document.querySelector('#click');

// const handleClick = () => {
//   console.log('Hello');
// };

// addBtn.addEventListener('click', () => {
//   clickBtn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//   clickBtn.removeEventListener('click', handleClick);
// });

// ---------- infoClick event.type .target ... ----------- //
// const clickBtn = document.querySelector('#click');

// const infoClick = event => {
//   console.log('event:', event);
//   console.log('event.type:', event.type);
//   console.log('event.target:', event.target);
// };

// clickBtn.addEventListener('click', infoClick);

// ---------- form Events ----------- //
// const form = document.querySelector('.form');
// const loginInput = form.querySelector("input[type='text']");
// const passInput = form.querySelector("input[type='password']");

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const login = loginInput.value;
//   const password = passInput.value;
//   console.log(`Login: ${login}`);
//   console.log(`Password: ${password}`);
//   form.reset();
// }

// ----------
// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';
// form.innerHTML = '<input name="q" value="Тест speed">';
// // форма повинна бути в документі, щоб її надіслати
// document.body.append(form);
// form.submit();

// ---------- Parent Events ----------- //

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const item = document.querySelector('#item');

// -------  ------- //
// parent.addEventListener('click', () => console.log('Click parent'));
// child.addEventListener('click', () => console.log('Click child'));
// item.addEventListener('click', () => console.log('Click item'));

// -------  ------- //
const handleClick = event => {
  console.log('event:', event.target);
};

parent.addEventListener('click', handleClick);

// ------- event.stopPropagation() ------- //
// event.stopPropagation() останавливает всплытие событий в DOM,
// что ломает делегирование событий, аналитику и сторонние скрипты,
// зависящие от родительских обработчиков.
// Это создает трудноотлаживаемые ошибки, скрывая логику от родительских элементов.
// https://share.google/aimode/mfQq0uO5VPlxWY2v7
// const itemClick = event => {
//   console.log('item stop');
//   event.stopPropagation();
// };

// const childClick = event => {
//   console.log('child stop');
//   event.stopPropagation();
// };

// const parentClick = event => {
//   console.log('perent stop');
//   event.stopPropagation();
// };

// parent.addEventListener('click', parentClick);
// child.addEventListener('click', childClick);
// item.addEventListener('click', itemClick);

// -------------------------------- //
// ------- Event delegation ------- //
// -------------------------------- //

// const nav = document.querySelector('.nav-list');
// nav.addEventListener('click', handleClick);

// ------- classList classList.add classList.remove ------- //
// function handleClick(event) {
//   console.log(event.target);
//   //   event.target.classList.add('active');

//   const checkClass = nav.querySelector('.list-item.active');

//   if (checkClass) {
//     event.target.classList.remove('active');
//   } else {
//     event.target.classList.add('active');
//   }
// }

// ------- classList classList.toggle ------- //
// --- switching classes independently for each element --- //
// function handleClick(event) {
//   console.log(event.target);
//   if (event.target.classList.contains('list-item')) {
//     event.target.classList.toggle('active');
//   }
// }

// ------- selection of multiple elements
// - with a limit on their maximum number ------- //
// const nav = document.querySelector('.nav-list');
// const MAX_ACTIVE = 3;

// nav.addEventListener('click', handleClick);

// function handleClick(event) {
//   const target = event.target;

//   // 1. Проверяем, что кликнули по пункту списка
//   if (!target.classList.contains('list-item')) return;

//   // 2. Если хотим удалить/добавить — проверяем текущий лимит
//   const activeCount = nav.querySelectorAll('.list-item.active').length;

//   // 3. Если класс уже есть — просто удаляем через remove
//   if (target.classList.contains('active')) {
//     console.log(target);
//     console.log('activeCount', activeCount - 1);
//     target.classList.remove('active');
//     return;
//   }
//   // 3. Если класса нет — добавляем через add
//   else if (activeCount < MAX_ACTIVE) {
//     target.classList.add('active');
//     console.log(target);
//     console.log('activeCount', activeCount + 1);
//   } else {
//     console.warn(`Максимум можно выбрать: ${MAX_ACTIVE}`);
//     alert(`Максимум можно выбрать: ${MAX_ACTIVE}`);
//   }
// }

// -------
// const nav = document.querySelector('.nav-list');
// const MAX_ACTIVE = 3;

// nav.addEventListener('click', handleClick);

// function handleClick(event) {
//   // 1. Ищем ближайший родительский элемент с классом .list-item
//   const item = event.target.closest('.list-item');

//   // Если кликнули мимо пункта (в пустое место nav-list), ничего не делаем
//   if (!item) return;

//   // 2. Если элемент уже активен — всегда разрешаем его выключить
//   if (item.classList.contains('active')) {
//     item.classList.remove('active');
//     return;
//   }

//   // 3. Если хотим включить — проверяем текущее количество активных
//   const activeElements = nav.querySelectorAll('.list-item.active');

//   if (activeElements.length < MAX_ACTIVE) {
//     item.classList.add('active');
//   } else {
//     alert(`Можно выбрать не более ${MAX_ACTIVE} элементов`);
//   }
// }

// -------------------------------- //
// ---------- Drug & Drop --------- //
// -------------------------------- //
// const ball = document.querySelector('.ball');

// ball.onmousedown = function (event) {
//   function move(pageX, pageY) {
//     ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//     ball.style.top = pageY - ball.offsetWidth / 2 + 'px';
//   }

//   // move(event.pageX, event.pageY);

//   function onMouseMove(event) {
//     move(event.pageX, event.pageY);
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   ball.onmouseup = function () {
//     document.removeEventListener('mousemove', onMouseMove);
//   };
// };
