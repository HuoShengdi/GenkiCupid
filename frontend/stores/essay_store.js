const EssayConstants = require('../constants/essay_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _essays = {};

const EssayStore = new Store(AppDispatcher);

function _loadEssay (essay) {
  _essays[essay.id] = essay;
}

function _resetEssays (essays) {
  _essays = {};
  essays.forEach((essay)=>{
    _essays[essay.id] = essay;
  });
}

EssayStore.essays = function () {
  return Object.assign({},_essays);
};

EssayStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case EssayConstants.ESSAY_RECEIVED:
      _loadEssay(payload.essay);
      EssayStore.__emitChange();
      break;
    case EssayConstants.ESSAYS_RECEIVED:
      _resetEssays(payload.essays);
      EssayStore.__emitChange();
      break;
  }
};

module.exports = EssayStore;
