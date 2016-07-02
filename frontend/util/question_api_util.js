module.exports = {
  fetchQuestion(id, success) {
    $.ajax( {
      url: '/api/questions/' + id,
      type: 'GET',
      success
    });
  },
  fetchRandomQuestion(username, success){
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      data: {username: username},
      success
    });
  }
};
