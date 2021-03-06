const SessionStore = require('../stores/session_store');

module.exports = {
  fetchMatches(success) {
    $.ajax( {
      url: '/api/matches/',
      type: 'GET',
      success
    });
  },
  getFilter(success){
    const username = SessionStore.currentUser().username;
    $.ajax({
      url: '/api/profiles/' + username + '/filter',
      type: 'GET',
      success
    });
  },
  updateFilter(filterData, success){
    const username = SessionStore.currentUser().username;
    $.ajax({
      url: '/api/profiles/' + username + '/filter',
      type: 'PATCH',
      data: {search_filter: filterData},
      success
    });
  }
};
