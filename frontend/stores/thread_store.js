const ThreadConstants = require('../constants/thread_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _threads = {};

const ThreadStore = new Store(AppDispatcher);

function _loadThread (thread) {
  _threads[thread.id] = thread;
}

function _resetThreads (threads) {
  _threads = {};
  threads.forEach((thread)=>{
    _threads[thread.id] = thread;
  });
}

function _threadsArray(){
  let array = Object.keys(_threads).map((key)=>{
    return _threads[key];
  });
  return array;
}

function sortByUpdateTime(threadArr){
  return threadArr.sort(compareUpdateTime);
}

function compareUpdateTime(a, b){
  if (a.update_time > b.update_time){
    return 1;
  }
  if (a.update_time < b.update_time){
    return -1;
  }
  return 0;
}

ThreadStore.threadByUsername = function(username) {
  return Object.keys(_threads).find(key => _threads[key].username === username);
};

ThreadStore.threads = function () {
  return Object.assign({},_threads);
};

ThreadStore.sortedThreads = function (){
  if ($.isEmptyObject(_threads)){
    return [];
  }else{
    return sortByUpdateTime(_threadsArray());
  }
};

ThreadStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case ThreadConstants.THREAD_RECEIVED:
      _loadThread(payload.thread);
      ThreadStore.__emitChange();
      break;
    case ThreadConstants.THREADS_RECEIVED:
      _resetThreads(payload.threads);
      ThreadStore.__emitChange();
      break;
  }
};

module.exports = ThreadStore;
