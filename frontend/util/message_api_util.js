module.exports = {

  fetchMessages(threadId, success){
    $.ajax({
      url: "/api/message_threads/" + threadId + "/messages/",
      type: "GET",
      success
    });
  },
  createMessage(messageData, success){
    $.ajax({
      url: "/api/message_threads/" + messageData.threadId + "/messages/",
      type: "POST",
      data: {message:messageData},
      success
    });
  },
  updateMessage(messageData, success){
    $.ajax({
      url: `/api/message_threads/${messageData.threadId}/messages/${messageData.id}`,
      type: "PATCH",
      data: {message:messageData},
      success
    });
  }
};
