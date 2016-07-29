const React = require('react');
const MatchStore = require('../stores/match_store');
const MatchActions = require('../actions/match_actions');
const SplashUserDetail = require('./splash_user_detail');

const Home = React.createClass({
  getInitialState(){
    return {matches: MatchStore.random(5)};
  },
  onChange(){
    this.getRandom();
  },
  getRandom(){
    this.setState({matches: MatchStore.random(5)});
  },
  componentDidMount(){
    this.listener = MatchStore.addListener(this.onChange);
    MatchActions.fetchMatches();
  },
  componentWillUnmount(){
    this.listener.remove();
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
          <i id='refresh'
            className="fa fa-refresh fa-2"
            onClick={this.getRandom}>
          </i>
        </div>
        <div className='tagline-container'>
          <h2 className='tagline tag-EN'>Enjoy the springtime of youth!</h2>
          <h2 className='tagline tag-JP'>青春お楽しみに!</h2>
        </div>
      </div>
    );
  }
});

module.exports = Home;
