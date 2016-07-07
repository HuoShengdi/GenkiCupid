const React = require('react');
const MatchList = require('./match_list');
const MatchStore = require('../../stores/match_store');
const MatchActions = require('../../actions/match_actions');
const MatchHeader = require('./match_header');


const MatchIndex = React.createClass({
  getInitialState(){
    return {matches: MatchStore.matches()};
  },
  onChange(){
    this.setState({matches: MatchStore.matches()});
  },
  componentDidMount(){
    this.matchListener = MatchStore.addListener(this.onChange);
    MatchActions.fetchMatches();
  },
  componentWillUnmount(){
    this.matchListener.remove();
  },
  render: function() {
    return (
      <div id='match-index-wrapper'>
        <MatchHeader />
        <div id='match-list-wrapper'>
          <MatchList matches={this.state.matches}/>
        </div>
      </div>
    );
  }

});

module.exports = MatchIndex;
