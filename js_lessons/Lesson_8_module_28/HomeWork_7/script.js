//#region -------------------------------------------------------- //
// -------------------------- Problem 1 -------------------------- //
// --------------------------------------------------------------- //
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
//  <body>
//      <div data-widget-name="menu">Виберіть жанр</div>
//      <script>/* ваш код */</script>
//  </body>
// </html>

//#region
// ------------- Problem 1/ Method 1 ------------- //
// debugger;

// // const widgetElement = document.querySelector('[data-widget-name="menu"]');
// const widget = document.querySelector('[data-widget-name]');
// const attrName = widget.getAttribute('data-widget-name');
// console.log('Attribute Name is:', attrName);

// // Ig need textContent of element
// console.log('Content:', widget.textContent);

//#region
// ------------- Problem 1/ Method 2 ------------- //
// dataset.widgetName — сучасний стандарт для роботи з data-* атрибутами.
// Зверніть увагу: в JS назва перетворюється з kebab-case (data-widget-name)
// у camelCase (widgetName).

// debugger;

// const widget = document.querySelector('[data-widget-name]');
// const widgetName = widget.dataset.widgetName;

// console.log('Attribute Name is:', widgetName);
// console.log('Content:', widget.textContent);

//#region
// ------------- Problem 1/ Method 3 ------------- //
// debugger;

// const allDivs = document.getElementsByTagName('div');
// for (let div of allDivs) {
//   if (div.hasAttribute('data-widget-name')) {
//     console.log('Attribute Name is:', div.getAttribute('data-widget-name'));
//     console.log('Content:', div.textContent);
//   }
// }

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
