import arrayMethod from './arrays.js';

export default class Chaining {
  constructor(array) {
    this.array = array;
  }
  voidEach(action) {
    arrayMethod.voidEach(this.array, action);
    return this;
  };

  arrMap(mapper) {
    this.array = arrayMethod.arrMap(this.array, mapper);
    return this;
  };

  objReducer(reduceFunc) {
    const acc = arrayMethod.objReduce(this.array, reduceFunc);
    console.log(acc)
    return this;
  }

  objFind(func) {
    const foundElement = arrayMethod.objFind(this.array, func);
    console.log(foundElement);
    return this;
  };

  arrFilter(func) {
    this.array = arrayMethod.arrFilter(this.array, func);
    return this;
  };

  arrWhere(matchingObject) {
    this.array = arrayMethod.arrWhere(this.array, matchingObject);
    return this;
  };

  first() {
    const first = arrayMethod.first(this.array);
    console.log(first);
    return this;
  };

  last() {
    const last = arrayMethod.last(this.array);
    console.log(last);
    return this;
  };

  min() {
    const min = arrayMethod.min(this.array);
    console.log(min);
    return this;
  };

  max() {
    const max = arrayMethod.max(this.array);
    console.log(max);
    return this;
  }

  print() {
    console.log(this.array)
  }

};

// const arr = [3, 6, 9];
// const someFunc = (item) => {
//   return item * item;
// };
// const someFunc2 = (item) => {
//   return item[0]
// }
// const newChai = new Chaining(arr);
// newChai.voidEach(someFunc).find(someFunc2).print();
// newChai.voidEach(someFunc);
