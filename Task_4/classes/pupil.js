import User from './user.js';

export default class Pupil extends User {
  constructor(firstName, lastName, marks = [], isAnswerForLastQuestionKnown) {
    super(firstName, lastName)
    this.marks = marks;
    this.isAnswerForLastQuestionKnown = isAnswerForLastQuestionKnown;
  };

  answerQuestion(boolean) {
    this.isAnswerForLastQuestionKnown = boolean; 
  };

};

