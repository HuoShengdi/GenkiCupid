const React = require('react');
const StringUtils = require('../../util/string_utils');

const ProfileHeader = React.createClass({
  render () {
    let genderStr = this.props.profile.gender;
    if (genderStr) {
      genderStr = StringUtils.capitalize(genderStr);
    }
    return (
        <header id='profile-header' className='profile-header'>
          <img id='profile-header-avatar' src={this.props.profile.avatar_url}/>
          <span id='profile-header-info'>
            <h2 id='mini-details-username'>{this.props.profile.username}</h2>
            <p id='mini-details'>
              {this.props.profile.age} • {this.props.profile.postal_code} • {genderStr}
            </p>
          </span>
        </header>);
  }
});

module.exports = ProfileHeader;
