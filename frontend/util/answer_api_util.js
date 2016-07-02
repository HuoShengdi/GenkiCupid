module.exports = {
  fetchAnswers(username, success) {
    $.ajax( {
      url: '/api/profiles/' + username + '/answers',
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
