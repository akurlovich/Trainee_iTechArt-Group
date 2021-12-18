import boolType from './boolType.js';
export default {
  voidEach(arr, action) {
    for (let i = 0; i < arr.length; i ++) {
      return action(i);
    }
  },

  first(arr) {
    if (arr.length === 0) return 'empty array';
    if (typeof arr !== 'array') return 'not array'; 
    return arr[0];
  },


}

