export default function memoizer(fun) {
  let cache = {}
  return function (n){
      if (cache[n] != undefined ) {
        console.log('from cash')
        return cache[n]
      } else {
        let result = fun(n)
        cache[n] = result
        console.log('new data')
        return result
      }
  }
}

const funn = (a, b) => {
  return a * b;
};

const tryMem = memoizer(funn);

console.log(tryMem(2, 5));
console.log(tryMem(3, 5));
console.log(tryMem(2, 5));
console.log(tryMem(3, 5));


