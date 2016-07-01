module.exports = {
  fetchProfile(username, success) {
    $.ajax( {
      url: '/api/profiles/' + username,
      type: 'GET',
      success
    });
  },
  updateProfile(profileData, success) {
    $.ajax( {
      url: '/api/profiles/' + profileData.username,
      type: 'PATCH',
      data: {user: profileData},
      success
    });
  }
};
