const React = require('react');
const StringUtils = require('../../util/string_utils');

const ProfileHeader = React.createClass({
  render () {
    let genderStr = this.props.profile.gender;
    if (genderStr) {
      genderStr = StringUtils.capitalize(genderStr);
    }
    return (
        <header className='profile-header'>
          <img className='profile-header-avatar' src={this.props.profile.avatar_url}/>
          <span className='profile-header-info'>
            <h2>{this.props.profile.username}</h2>
            <p>{this.props.profile.age} • {this.props.profile.postal_code} • {genderStr}</p>
          </span>
        </header>);
  }
});

module.exports = ProfileHeader;
