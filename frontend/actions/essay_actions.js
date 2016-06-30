const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const AppDispatcher = require('../dispatcher/dispatcher');
const EssayConstants = require('../constants/essay_constants');
const EssayApiUtil = require('../util/essay_api_util');
const ErrorActions = require('./error_actions');


const EssayActions = {
  fetchEssay(params) {
    EssayApiUtil.fetchEssay(params, this.receiveEssay);
  },
  receiveEssay(essay) {
    AppDispatcher.dispatch({
      actionType: EssayConstants.ESSAY_RECEIVED,
      essay: essay
    });
  },
  editEssay(essayData) {
    EssayApiUtil.updateEssay(essayData, this.receiveEssay);
  },
  fetchEssays(username) {
    EssayApiUtil.fetchEssays(username, this.receiveEssays);
  },
  receiveEssays(essays) {
    AppDispatcher.dispatch({
      actionType: EssayConstants.ESSAYS_RECEIVED,
      essays: essays
    });
  }


};


module.exports = EssayActions;
