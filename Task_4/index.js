import * as myModul from './module/index.js';

function sum(a, b, c) {
  return a * b * c;
};
const trycarry = myModul.carry(sum);

console.log(trycarry(3, 4, 5));
console.log(trycarry(3, 4)(5));
console.log(trycarry(3)(4)(5));

