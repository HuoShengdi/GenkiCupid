const React = require('react');


const ProfileHeader = React.createClass({
  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  },
  render () {
    let genderStr = this.props.profile.gender;
    if (genderStr) {
      genderStr = this.capitalize(genderStr);
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
