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
