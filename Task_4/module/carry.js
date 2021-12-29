export default function carry(fn, flag, ...args) {
  return (..._arg) => {
    if (flag === '-b') {
      return fn(..._arg, ...args)
    }
    return fn(...args, ..._arg);
  }
};



