class foo extends Function {
  constructor() {
    super(arr);
    this.arr = arr;
    return this.bind(this);
  }
  
  bar(arg) {
    console.log(arg);
  }

  print() {
    console.log(this.arr)
    return this;
  }
}

const obj = new foo();

// let var1 = obj(['something ']);
// console.log(var1)

abj([1, 3]).print()

