module.exports = {
  fetchMatches(success) {
    $.ajax( {
      url: '/api/matches/',
      type: 'GET',
      success
    });
  }
};
