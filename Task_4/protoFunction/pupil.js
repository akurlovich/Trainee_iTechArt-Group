import User from './user.js';

export default function Pupil(marks = [], isAnswerForLastQuestionKnown) {
  User.apply(this, arguments);
  this.marks = marks;
  this.isAnswerForLastQuestionKnown = isAnswerForLastQuestionKnown;
};

Pupil.prototype = Object.create(User.prototype);

Pupil.prototype.isAnswerForLastQuestionKnown = function(boolean) {
  return boolean;
};

Pupil.prototype.answerQuestion = function(mark) {
  if (this.isAnswerForLastQuestionKnown) {
  this.marks.push(mark);
  }
};

