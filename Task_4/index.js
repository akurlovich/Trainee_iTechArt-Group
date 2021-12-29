import * as myModul from './module/index.js';
import Pupil from './classes/pupil.js';
import Teacher from './classes/teacher.js';

//---Examples---

// 1. Carry function
console.log('Carry function:')
function math(a, b, c, d) {
  return (a * b * c) + d;
};

const newCarry = myModul.carry(math, '-b', 3, 4, 5);

console.log(newCarry(6));

// 2. Memoizer function
console.log('Memoizer function:')

const memTest = myModul.memoizer(math);
console.log(memTest(1, 2, 3, 4));
console.log(memTest(1, 2, 3, 4));
console.log(memTest(1, 2, 3, 5));
console.log(memTest(1, 2, 3, 5));

// 3. Functions for arrays
console.log('Functions for arrays');
const array = [1, -5, 6, 87];
const someFunc = (item) => {
   console.log(item * item);
 };
const someFunc2 = (item) => {
  return item * item;
};
const someFunc3 = (item, acc) => {
  return item + acc;
};
const arrObj = [
  {
    name: 'ivsn',
  }, 
  {
    name: 'alex',
  }
] 
const matchObj = {
  name: 'alex',
}
console.log(myModul.arrMethods.voidEach(array, someFunc));
console.log(myModul.arrMethods.arrMap(array, someFunc2))
console.log(myModul.arrMethods.objReduce(array, someFunc3))
console.log(myModul.arrMethods.objFind(array, 8));
console.log(myModul.arrMethods.arrFilter(array, 6));
console.log(myModul.arrMethods.arrWhere(arrObj, matchObj));
console.log(myModul.arrMethods.first(array));
console.log(myModul.arrMethods.last(array));
console.log(myModul.arrMethods.min(array));
console.log(myModul.arrMethods.max(array));

// 4. Chaining
console.log('Chaining:');
const chain = new myModul.chaining(array);
chain.arrMap(someFunc2).voidEach(someFunc).print();

// 5. Data type
console.log('Data type:')
console.log(myModul.boolType.isUnderfined(undefined));
console.log(myModul.boolType.isNumber(6));
console.log(myModul.boolType.isBoolean(false));
console.log(myModul.boolType.isString('hi'));
console.log(myModul.boolType.isObject(matchObj));
console.log(myModul.boolType.isNull(null));
console.log(myModul.boolType.isFunction(someFunc));
console.log(myModul.boolType.isNAN(NaN));

// 6. Prototype inheritance
console.log('Prototype inheritance: ');

const puple = new Pupil('Ivan', 'Petrov', [], false);
puple.sayHi();
const teacher = new Teacher('Anna', 'Ivanovna', 5);
teacher.sayHi();
teacher.setMark(puple, 7);
console.log(puple.marks);






















