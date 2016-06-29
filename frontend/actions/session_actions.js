const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');

const SessionActions = {
  signUp (formData) {
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },
  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
    SessionActions.receiveCurrentUser, complete);
  },
  receiveCurrentUser(currentUser){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
    hashHistory.push("/");
  },
  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }
};

module.exports = SessionActions;
