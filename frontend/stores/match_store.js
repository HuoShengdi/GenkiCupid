const MatchConstants = require('../constants/match_constants');
const SessionConstants = require('../constants/session_constants');
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

function _distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function _applyFilter (match) {
  let passed = true;
    if (_currentFilter.gender){
      if (_currentFilter.gender !== "everyone" && _currentFilter.gender !== match.profile_details.gender){
        passed = false;
      }
    }

    if (_currentFilter.min_age && match.profile_details.age < _currentFilter.min_age){
      passed = false;
    }
    if (_currentFilter.max_age && match.profile_details.age > _currentFilter.max_age){
      passed = false;
    }
    if (_currentFilter.distance && match.profile_details.distance > _currentFilter.distance){
      passed = false;
    }
  return passed;
}

function _resetDisplay (){
  _displayMatches = Object.keys(_matches).map((key)=>{
    return _matches[key];
  });
}

function _filterMatches (){
  if ($.isEmptyObject(_currentFilter)){
    return;
  } else {
    _displayMatches = _displayMatches.filter(_applyFilter);
  }
}

function compareMatchPercent(a, b){
  if (a.match_percent > b.match_percent){
    return -1;
  }
  if (a.match_percent < b.match_percent){
    return 1;
  }
  return 0;
}

function _sortByMatchPercent(){
  _displayMatches = _displayMatches.sort(compareMatchPercent);
}

function _clearStore(){
  _matches = {};
  _displayMatches = [];
  _currentFilter = {};
}

MatchStore.matches = function () {
  _resetDisplay();
  _filterMatches();
  _sortByMatchPercent();
  return _displayMatches.slice(0);
};

MatchStore.searchFilter = function() {
  return Object.assign({}, _currentFilter);
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
    case SessionConstants.LOGOUT:
      _clearStore();
      break;
  }
};

module.exports = MatchStore;
