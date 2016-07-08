const AppDispatcher = require('../dispatcher/dispatcher');
const ThreadConstants = require('../constants/thread_constants');
const ThreadApiUtil = require('../util/thread_api_util');
const ErrorActions = require('./error_actions');

const ThreadActions = {
  fetchThreads(){
    ThreadApiUtil.fetchThreads(this.receiveThreads);
  },
  receiveThreads(threads){
    AppDispatcher.dispatch({
      actionType: ThreadConstants.THREADS_RECEIVED,
      threads: threads
    });
  },
  createThread(username){
    ThreadApiUtil.createThread(username,this.receiveThread);
  },
  fetchThread(id){
    ThreadApiUtil.fetchThread(id, this.receiveThread);
  },
  receiveThread(thread){
    AppDispatcher.dispatch({
      actionType: ThreadConstants.THREAD_RECEIVED,
      thread: thread
    });
  }
};



module.exports = ThreadActions;
