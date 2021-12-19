import User from './user.js';

export default class Pupil extends User {
  constructor(firstName, lastName, marks = [2, 5]) {
    super(firstName, lastName)
    this.marks = marks;
  }

  isAnswerForLastQuestionKnown() {

  };

  answerQuestion() {
    
  }

}

const nnn = new Pupil('Ivan', 'Popov');
nnn.sayHi();
