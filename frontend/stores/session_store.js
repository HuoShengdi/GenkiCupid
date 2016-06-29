const SessionConstants = require('../constants/session_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _currentUser = {};
let _currentUserHasBeenFetched = false;

const SessionStore = new Store(AppDispatcher);

const _login = function (user) {
  _currentUser = user;
  _currentUserHasBeenFetched = true;
};

const _logout = function () {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

SessionStore.currentUser = function () {
  return Object.assign({},_currentUser);
};

SessionStore.isUserLoggedIn = function () {
  return Boolean(_currentUser.id);
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUserHasBeenFetched = function (){
  return Boolean(_currentUserHasBeenFetched);
};
module.exports = SessionStore;
