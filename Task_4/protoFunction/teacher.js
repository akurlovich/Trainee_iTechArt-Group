import User from './user.js';

export default function Teacher(lastSetMark = 0) {
  User.apply(this, arguments);
  this.lastSetMark = lastSetMark;
};

Teacher.prototype = Object.create(User.prototype);

Teacher.prototype.askQuestion = function(Pupil) {
  console.log(Pupil)
};

Teacher.prototype.setMark = function(Pupil) {
  console.log(Pupil)
}

const teach = new Teacher('ivan', 'popov', 5);
teach.sayHi();

