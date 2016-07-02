const QuestionConstants = require('../constants/answer_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');


let _question = {};

const QuestionStore = new Store(AppDispatcher);

function _loadQuestion (question) {
  _question = question;
}

QuestionStore.question = function () {
  return Object.assign({},_question);
};

QuestionStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case QuestionConstants.QUESTION_RECEIVED:
      _loadQuestion(payload.question);
      QuestionStore.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
