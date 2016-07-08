const React = require('react');
const MatchStore = require('../stores/match_store');
const MatchActions = require('../actions/match_actions');
const SplashUserDetail = require('./splash_user_detail');

const Home = React.createClass({
  getInitialState(){
    return {matches: MatchStore.random(5)};
  },
  onChange(){
    this.setState({matches: MatchStore.random(5)});
  },
  componentDidMount(){
    this.listener = MatchStore.addListener(this.onChange);
    MatchActions.fetchMatches();
  },

  render () {
    const randomUsers = this.state.matches.map((match)=>{
      return <SplashUserDetail match={match} key={match.id}/>;
    });
    return (
      <div id='splash'>
        <div className='splash-title'>
          Featured Users
        </div>
        <div className='splash-card-container'>
          {randomUsers}
        </div>
      </div>
    );
  }
});

module.exports = Home;
