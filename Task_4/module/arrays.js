import boolType from './boolType.js';
export default {
  voidEach(arr, action) {
    for (let i = 0; i < arr.length; i ++) {
      return action(i);
    }
  },

  first(arr) {
    if (arr.length === 0) return 'empty array';
    if (!Array.isArray(arr)) return 'not array'; 
    return arr[0];
  },

  last(arr) {
    if (arr.length === 0) return 'empty array';
    if (!Array.isArray(arr)) return 'not array'; 
    return arr[arr.length - 1];
  },

  min(arr) {
    if (arr.length === 0) return 'empty array';
    if (!Array.isArray(arr)) return 'not array'; 
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  },

  max(arr) {
    if (arr.length === 0) return 'empty array';
    if (!Array.isArray(arr)) return 'not array'; 
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },

 }

