// ------------------------------------------------------ //
// ---------------------- DOM / BOM --------------------- //
// ------------------------------------------------------ //

// ---------- document.getElementById('elem') ----------- //
// let elem = document.getElementById('elem');

// elem.style.background = 'green';

// --------------- querySelectorAll(elem) --------------- //
// let elements = document.querySelectorAll('ul > li:last-child');

// for (element of elements) {
//   console.log(element);
// }

// --------------- querySelectorAll(elem) --------------- //
// let element = document.querySelector('li');
// console.log(element);

// ---------- document.getElementsByTagName('div') ----------- //
// let element = document.getElementsByTagName('div');
// console.log(element);

// --------------------- property hidden --------------------- //
// let textHidden = document.getElementById('textHidden');
// textHidden.hidden = true;
// textHidden.hidden = false;

// --------------------- textarea value --------------------- //
// let message = document.getElementById('message');
// console.log(message.value);

// -------------------- by class content -------------------- //
// let content = document.querySelector('.text-content');
// console.log(content.textContent);

// ---------------- by class change content ----------------- //
// let content = document.querySelector('.text-content');
// console.log(content.textContent);

// content.textContent = 'Hello, Hello!';
// console.log(content.textContent);

// ----------------- by class change style ------------------ //
// let btn = document.querySelector('.button');
// btn.style.backgroundColor = 'red';

// ----- by id contains remove add replace toggle class ----- //
// let content = document.querySelector('#p-text');
// console.log(content.classList);
// console.log(content.classList.contains('red'));

// content.classList.remove('red');
// console.log(content.classList);
// console.log(content.classList.contains('red'));

// content.classList.add('new');
// console.log(content.classList);
// console.log(content.classList.contains('new'));

// content.classList.replace('new', 'old');
// console.log(content.classList);
// console.log(content.classList.contains('new'));
// console.log(content.classList.contains('old'));

// content.classList.toggle('hidden');
// console.log(content.classList);
// console.log(content.classList.contains('hidden'));

// content.classList.toggle('hidden');
// console.log(content.classList);
// console.log(content.classList.contains('hidden'));

// content.classList.toggle('hidden');
// console.log(content.classList);
// console.log(content.classList.contains('hidden'));

// ----------------- Attribute ------------------ //
// let image = document.querySelector('.image');

// console.log(image.hasAttribute('src'));

// console.log(image.getAttribute('alt'));

// // console.log(image.setAttribute('src'));

// console.log(image.attributes);

// ----------------------------------------------------- //
// ------------------- .createElement ------------------ //
// ----------------------------------------------------- //

// const item = document.createElement('a');
// item.href = '#';
// item.classList.add('link');
// item.textContent = '3';

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h2');
// heading.textContent = 'Heading Hello';

// const container = document.querySelector('.container');
// container.insertBefore(heading, nav);

// // nav.removeChild(item);
// item.remove();

// ------------------ .innerHTML ------------------- //
// const container = document.querySelector('.container');
// const text = '<p>Sorry</p>';
// container.innerHTML += text; // renderihg all document

// --------------
// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML =
//   '<strong>Hello all!</strong> You have read an important message!';
// document.body.append(div);

// -------------- .insertAdjacentHTML -------------- //
const list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');
list.insertAdjacentHTML('beforeend', '<li>beforeend</li>');
list.insertAdjacentHTML('afterend', '<p>afterend</p>');

// --------------
// const body = document.body;
// body.insertAdjacentHTML('beforeend', "<button class='button'>Open</button>");

// ----------------- .clone element ------------------ //
// const text = document.querySelector('.text');
// const parent = document.querySelector('.parent');

// const clone = text.cloneNode(true);

// parent.appendChild(clone);
