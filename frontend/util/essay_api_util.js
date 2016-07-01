module.exports = {

  fetchEssays(username, success) {
    $.ajax( {
      url: '/api/profiles/' + username + '/essays',
      type: 'GET',
      success
    });
  },
  fetchEssay(params, success) {
    $.ajax( {
      url: '/api/profiles/' + params.username + '/essays/' + params.id,
      type: 'GET',
      success
    });
  },
  updateEssay(essayData, success) {
    $.ajax({
      url: '/api/profiles/' + essayData.username + '/essays/' + essayData.id,
      type: 'PATCH',
      data: essayData,
      success
    });
  }
};
