module.exports = {

  fetchEssays(username, success) {
    $.ajax( {
      url: '/api/profiles/' + username + '/answers',
      type: 'GET',
      success
    });
  },
  fetchQuestion(id, success) {
    $.ajax( {
      url: '/api/questions/' + id,
      type: 'GET',
      success
    });
  },
  updateAnswer(answerData, success) {
    $.ajax({
      url: '/api/profiles/' + answerData.username + '/answers/' + answerData.id,
      type: 'PATCH',
      data: answerData,
      success
    });
  }
};
