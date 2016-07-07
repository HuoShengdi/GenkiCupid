const React = require('react');
const StringUtils = require('../../util/string_utils');
const ProfileActions = require('../../actions/profile_actions');
const cloudinary = require('cloudinary');

const UploadButton = require('./upload_button');

cloudinary.config({
  cloud_name: 'huoshengdi'
});

const ProfileHeader = React.createClass({
  postImage: function (image) {
    const data = {username: this.props.profile.username,
      avatar_url: this.processImageUrl(image.url)};
    ProfileActions.editProfile(data);
  },

  processImageUrl (url){
    const regex = /(GenkiCupid_Avatars\/[\w-]*\.[\w]{3})/;
    return url.match(regex)[1];
  },

  render () {
    let genderStr = this.props.profile.gender;
    if (genderStr) {
      genderStr = StringUtils.capitalize(genderStr);
    }
    const avUrl = cloudinary.url(this.props.profile.avatar_url, {secure: true, width: 225, height: 225, crop: 'fill', gravity: 'face'});
    return (
        <header id='profile-header' className='profile-header'>
          <div id='profile-avatar-wrapper'>
            <img id='profile-header-avatar' src={avUrl}/>
            <UploadButton postImage={this.postImage} />
          </div>

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
