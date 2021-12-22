class Chaining {
  constructor(array) {
    this.array = array;
  }
  voidEach(func) {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = func(this.array[i])
    } 
    console.log(this.array)
    return this;
  };

  find(func) {
    func(this.array);
    console.log(func(this.array));
    return this;
  };

  print() {
    console.log(this.array)
  }

};

const arr = [3, 6, 9];
const someFunc = (item) => {
  return item * item;
};
const someFunc2 = (item) => {
  return item[0]
}
const newChai = new Chaining(arr);
newChai.voidEach(someFunc).find(someFunc2).print();
// newChai.voidEach(someFunc);
