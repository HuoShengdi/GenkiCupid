
const AppDispatcher = require('../dispatcher/dispatcher');
const AnswerConstants = require('../constants/answer_constants');
const AnswerApiUtil = require('../util/answer_api_util');
const ErrorActions = require('./error_actions');


const AnswerActions = {
  fetchAnswer(params) {
    AnswerApiUtil.fetchAnswer(params, this.receiveAnswer);
  },
  receiveAnswer(answer) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer
    });
  },
  createAnswer(answerData) {
    AnswerApiUtil.createAnswer(answerData, this.receiveAnswer);
  },
  editAnswer(answerData) {
    AnswerApiUtil.updateAnswer(answerData, this.receiveAnswer);
  },
  fetchAnswers(username) {
    AnswerApiUtil.fetchAnswers(username, this.receiveAnswers);
  },
  receiveAnswers(answers) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  }


};


module.exports = AnswerActions;
