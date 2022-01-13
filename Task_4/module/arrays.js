export default {
  voidEach(arr, action) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    }; 
    for (let i = 0; i < arr.length; i ++) {
      action(arr[i]);
    }
  },

  arrMap(arr, mapper) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(mapper(arr[i]))
    }
    return newArr;
  },

  objReduce(arr, reduceFuncWithAccumulatorParameter) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
      acc = reduceFuncWithAccumulatorParameter(arr[i], acc)
    }
    return acc;
  },

  objFind(arr, predicateToFindFirstMatchingElement) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    for (let i = 0; i < arr.length; i++) {
      if (predicateToFindFirstMatchingElement(arr[i])) {
        let foundData = arr[i];
        i = arr.length;
        return foundData;
      }
    };
    return 'Element not found!';
  },

  arrFilter(arr, filteringPredicate) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    let foundArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (filteringPredicate(arr[i])) {
        foundArr.push(arr[i])
      };
    };
    if (foundArr.length === 0) return false;
    return foundArr;
  },

  arrWhere(arr, matchingObject) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
 
    const foundArr = [];
    for (let i = 0; i < arr.length; i++) {
      for ( let key in matchingObject) {
        if (key in arr[i]) {
          if (matchingObject[key] === arr[i][key]) {
            foundArr.push(arr[i])
          }
        }
      }
    };
    return foundArr;
  },

  first(arr) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    return arr[0];
  },

  last(arr) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    }; 
    return arr[arr.length - 1];
  },

  min(arr) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    }; 
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  },

  max(arr) {
    if (arr.length === 0) {
      throw new Error('Empty array!')
    };
    if (!Array.isArray(arr)) {
      throw new Error("Is not array!")
    };
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },

 }

