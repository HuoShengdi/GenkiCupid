module.exports = {
  fetchThreads(success){
    $.ajax({
      url: "/api/message_threads/",
      type: "GET",
      success
    });
  },
  fetchThread(id, success){
    $.ajax({
      url: "/api/message_threads/" + id,
      type: "GET",
      success
    });
  },
  createThread(username, success){
    $.ajax({
      url: "/api/message_threads/",
      type: "POST",
      data: {username: username},
      success
    });
  }
};
