export default function memoizer(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo) {
      console.log('From cache: ')
      return memo[args];
    }
    else {
      console.log('New data: ')
      return (memo[args] = func.apply(this, args));
    };
  };
};

