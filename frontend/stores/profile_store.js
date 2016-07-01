const ProfileConstants = require('../constants/profile_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _profile = {};

const ProfileStore = new Store(AppDispatcher);

function _loadProfile (profile) {
  _profile = profile;
}

ProfileStore.profile = function () {
  return Object.assign({},_profile);
};

ProfileStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case ProfileConstants.PROFILE_RECEIVED:
      _loadProfile(payload.profile);
      ProfileStore.__emitChange();
      break;
  }
};

module.exports = ProfileStore;
