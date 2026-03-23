import * as _ from 'lodash';

export const greetingsSettings = 'Hello hello from helper-settings.js';

// console.log('Hello, its me, helper-settings.js');

const arr = [2, 4, 6, 8];
_.each(arr, function (val) {
  console.log('Output from Lodash _.each for Element ' + val);
});
