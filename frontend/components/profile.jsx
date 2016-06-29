const React = require('react');
const ProfileStore = require('../stores/profile_store');

const Profile = React.createClass({
  getInitialState(){
    const username = this.props.params.username;
    const profile = ProfileStore.find_by_username(username) || {};
    return { profile };
  },
  render () {
    return (
      <div className='profile-pane'>
        <header>
          <img src={this.state.profile.avatar_url}/>
        </header>
      </div>);
  }
});

module.exports = Profile;
