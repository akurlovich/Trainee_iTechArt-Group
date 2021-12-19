import User from './user.js';

export default class Teacher extends User {
  constructor(firstName, lastName, lastSetMark = 0) {
    super(firstName, lastName)
    this.lastSetMark = lastSetMark;
  }
  
  askQuestion(Pupil) {
    
  };

  setMark(Pupil) {

  }
  
}
