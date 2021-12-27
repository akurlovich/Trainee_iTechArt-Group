export default function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

User.prototype.sayHi = function() {
  console.log(`Hello ${this.firstName} ${this.lastName}`)
};


