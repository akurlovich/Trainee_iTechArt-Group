import boolType from './boolType.js';
export default {
  voidEach(arr, action) {
    for (let i = 0; i < arr.length; i ++) {
      action(i);
    }
  },

  arrMap(arr, mapper) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(mapper(arr[i]))
    }
    return newArr;
  },

  objReduce(arr, reduceFuncWithAccumulatorParameter) {
    let acc = arr[0];
    for (let i = 0; i < arr.length; i++) {
      reduceFuncWithAccumulatorParameter(arr[i], acc)
    }
    return acc;
  },

  objFind(arr, predicateToFindFirstMatchingElement) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === predicateToFindFirstMatchingElement) {
        let foundData = arr[i];
        i = arr.length;
        return foundData;
      }
    }
  },

  arrFilter(arr, filteringPredicate) {
    let foundArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === filteringPredicate) {
        foundArr.push(arr[i])
      };
    };
    return foundArr;
  },

  arrWhere(arr, matchingObject) {
    return arr.includes(matchingObject)
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

