
const AppDispatcher = require('../dispatcher/dispatcher');
const ProfileConstants = require('../constants/profile_constants');
const ProfileApiUtil = require('../util/profile_api_util');
const ErrorActions = require('./error_actions');


const ProfileActions = {
  fetchProfile(username) {
    ProfileApiUtil.fetchProfile(username, this.receiveProfile);
  },
  receiveProfile(profile) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },
  editProfile(profileData) {
    ProfileApiUtil.updateProfile(profileData, this.receiveProfile);
  }
};


module.exports = ProfileActions;
