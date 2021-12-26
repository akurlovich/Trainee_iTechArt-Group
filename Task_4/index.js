import arrays from './module/arrays.js';
import boolType from './module/boolType.js';
// import memoizer from './module/memoizer.js';

// console.log('import module')
// console.log((boolType.isNAN(1)));
// console.log(arrays.min([9, 7, 6, -3]))
// console.log(arrays.max([9, 7, 6, -3]))

const arrObj = [
  {
    name: 'alex',
    age: 25,
  },
  {
    name: 'igor',
    age: 12,
  },
];
const obj1 = {
  first: 'ale',
  age: 25,
}

console.log(arrays.arrWhere(arrObj, obj1));





