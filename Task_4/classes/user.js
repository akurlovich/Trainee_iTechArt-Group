export default class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Hello ${this.firstName} ${this.lastName}`)
  }
}
