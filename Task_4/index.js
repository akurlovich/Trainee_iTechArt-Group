import arrays from './module/arrays.js';
import boolType from './module/boolType.js';
import memoizer from './module/memoizer.js';

console.log('import module')
console.log((boolType.isNAN(1)));
console.log(arrays.min([9, 7, 6, -3]))
console.log(arrays.max([9, 7, 6, -3]))

const funn = (a, b) => {
  return a * b;
};

const tryMem = memoizer(funn);

console.log(tryMem(2, 5));
console.log(tryMem(3, 5));
console.log(tryMem(2, 5));
console.log(tryMem(3, 5));





