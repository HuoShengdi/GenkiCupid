const MatchConstants = require('../constants/match_constants');
const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _matches = {};
let _displayMatches = [];
let _currentFilter = {};

const MatchStore = new Store(AppDispatcher);

function _loadMatch (match) {
  _matches[match.id] = match;
}

function _resetMatches (matches) {
  _matches = {};
  matches.forEach((match)=>{
    _matches[match.id] = match;
  });
}

function _loadFilter(filter){
  _currentFilter = filter;
}

function _applyFilter (match) {
  let passed = true;
  Object.keys(_currentFilter).forEach((key)=>{
    if (!_currentFilter[key](match.profile_details[key])){
      passed = false;
    }
  });
  return passed;
}

function _filterMatches (){
  _displayMatches = _displayMatches.filter(_applyFilter);
}

function compareMatchPercent(a, b){
  if (a.match_percent > b.match_percent){
    return 1;
  }
  if (a.match_percent < b.match_percent){
    return -1;
  }
  return 0;
}

MatchStore.sortByMatchPercent = function() {
  let sorted = Object.keys(_matches).map((key)=>{
    return _matches[key];
  }).sort(compareMatchPercent);
  _displayMatches = sorted;
};

MatchStore.matches = function () {
  MatchStore.sortByMatchPercent();
  _filterMatches();
  return _displayMatches;
};

MatchStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case MatchConstants.MATCH_RECEIVED:
      _loadMatch(payload.match);
      MatchStore.__emitChange();
      break;
    case MatchConstants.MATCHES_RECEIVED:
      _resetMatches(payload.matches);
      MatchStore.__emitChange();
      break;
    case MatchConstants.FILTER_SET:
      _loadFilter(payload.filter);
      MatchStore.__emitChange();
      break;
  }
};

module.exports = MatchStore;
