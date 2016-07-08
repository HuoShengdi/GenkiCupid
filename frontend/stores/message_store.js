const MessageConstants = require('../constants/message_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _messages = {};

const MessageStore = new Store(AppDispatcher);

function _loadMessage (message) {
  _messages[message.id] = message;
}

function _resetMessages (messages) {
  _messages = {};
  messages.forEach((message)=>{
    _messages[message.id] = message;
  });
}

function _messagesArray(){
  let array = Object.keys(_messages).map((key)=>{
    return _messages[key];
  });
  return array;
}

function sortByCreatedAt(messageArr){
  return messageArr.sort(compareCreatedAt);
}

function compareCreatedAt(a, b){
  if (a.created_at > b.created_at){
    return 1;
  }
  if (a.created_at < b.created_at){
    return -1;
  }
  return 0;
}

MessageStore.messages = function () {
  return Object.assign({},_messages);
};

MessageStore.orderedMessages = function (){
  if ($.isEmptyObject(_messages)){
    return [];
  }else{
    return sortByCreatedAt(_messagesArray());
  }
};

MessageStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case MessageConstants.MESSAGE_RECEIVED:
      _loadMessage(payload.message);
      MessageStore.__emitChange();
      break;
    case MessageConstants.MESSAGES_RECEIVED:
      _resetMessages(payload.messages);
      MessageStore.__emitChange();
      break;
  }
};

module.exports = MessageStore;
