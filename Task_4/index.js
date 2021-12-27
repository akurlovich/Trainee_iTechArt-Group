import * as work from './module/index.js';

import Chaining from './module/chaining.js';

const chan = new Chaining([5, 84, 12, -3]);
function action(item) {
  console.log(item * 2)
};
function mapper(item) {
  return item * item;
};
function reducerArr(item, acc) {
  return acc += item;
}
// console.log(chan.array);
// chan.arrMap(mapper).print();
chan.objReducer(reducerArr)
