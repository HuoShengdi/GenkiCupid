const AppDispatcher = require('../dispatcher/dispatcher');
const MatchConstants = require('../constants/match_constants');
const MatchApiUtil = require('../util/match_api_util');
const ErrorActions = require('./error_actions');


const MatchActions = {
  fetchMatches() {
    MatchApiUtil.fetchMatches(this.receiveMatches);
  },
  receiveMatches(matches) {
    AppDispatcher.dispatch({
      actionType: MatchConstants.MATCHES_RECEIVED,
      matches: matches
    });
  },
  getFilter() {
    MatchApiUtil.getFilter(this.setFilter);
  },
  setFilter(filter) {
    AppDispatcher.dispatch({
      actionType: MatchConstants.FILTER_SET,
      filter: filter
    });
  },
  updateFilter(filterData){
    MatchApiUtil.updateFilter(filterData, this.setFilter);
  }
};


module.exports = MatchActions;
