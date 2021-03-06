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
      data: {answer:answerData},
      success
    });
  },
  createAnswer(answerData, success) {
    $.ajax({
      url: '/api/profiles/' + answerData.username + '/answers',
      type: 'POST',
      data: {answer:answerData},
      success
    })
  }
};
