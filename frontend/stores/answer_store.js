const AnswerConstants = require('../constants/answer_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _answers = {};

const AnswerStore = new Store(AppDispatcher);

function _loadAnswer (answer) {
  _answers[answer.id] = answer;
}

function _resetAnswers (answers) {
  _answers = {};
  answers.forEach((answer)=>{
    _answers[answer.id] = answer;
  });
}

AnswerStore.answers = function () {
  return Object.assign({},_answers);
};

AnswerStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case AnswerConstants.ANSWER_RECEIVED:
      _loadAnswer(payload.answer);
      AnswerStore.__emitChange();
      break;
    case AnswerConstants.ANSWERS_RECEIVED:
      _resetAnswers(payload.answers);
      AnswerStore.__emitChange();
      break;
  }
};

module.exports = AnswerStore;
