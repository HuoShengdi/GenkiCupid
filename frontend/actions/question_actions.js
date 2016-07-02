const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const AppDispatcher = require('../dispatcher/dispatcher');
const QuestionConstants = require('../constants/question_constants');
const QuestionApiUtil = require('../util/question_api_util');
const ErrorActions = require('./error_actions');


const QuestionActions = {
  fetchQuestion(id) {
    QuestionApiUtil.fetchQuestion(id, this.receiveQuestion);
  },
  fetchRandomQuestion(username) {
    QuestionApiUtil.fetchRandomQuestion(username, this.receiveQuestion);
  },
  receiveQuestion(question) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question
    });
  }
};


module.exports = QuestionActions;
