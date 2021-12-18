import arrays from './module/arrays.js';
import boolType from './module/boolType.js';

console.log('import module')
console.log((boolType.isNAN(1)));
arrays.voidEach([1, 5, 8], (item) => {
  return item * 2;
});
