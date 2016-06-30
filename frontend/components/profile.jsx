const React = require('react');

const ProfileActions = require('../actions/profile_actions');
const ProfileStore = require('../stores/profile_store');
const ProfileHeader = require('./profile_components/profile_header');
const ProfileTabs = require('./profile_components/profile_tabs');
const ProfileDetails = require('./profile_components/profile_details');

const Profile = React.createClass({
  getInitialState(){
    const profile = {};
    return { profile };
  },
  handleChange(){
    this.setState({ profile: ProfileStore.profile()});
  },
  componentDidMount(){
    this.profileListener = ProfileStore.addListener(this.handleChange);
    ProfileActions.fetchProfile(this.props.params.username);
  },
  componentWillUnmount(){
    this.profileListener.remove();
  },
  render () {
    return (
      <div className='profile-pane'>
        <ProfileHeader profile={this.state.profile}/>
        <div className='profile-info'>
          <ProfileTabs profile={this.state.profile}/>
          {this.props.children}
        </div>
        <ProfileDetails profile={this.state.profile}/>
      </div>);
  }
});

module.exports = Profile;
