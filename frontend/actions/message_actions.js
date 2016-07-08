const AppDispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');
const MessageApiUtil = require('../util/message_api_util');
const ErrorActions = require('./error_actions');

const MessageActions = {
  fetchMessages(threadId){
    MessageApiUtil.fetchMessages(threadId, this.receiveMessages);
  },
  receiveMessages(messages){
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  },
  createMessage(messageData){
    MessageApiUtil.createMessage(messageData, this.receiveMessage);
  },
  fetchMessage(id){
    MessageApiUtil.fetchMessage(id, this.receiveMessage);
  },
  receiveMessage(message){
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGE_RECEIVED,
      message: message
    });
  },
  updateMessage(messageData){
    MessageApiUtil.updateMessage(messageData, this.receiveMessage);
  }
};



module.exports = MessageActions;
