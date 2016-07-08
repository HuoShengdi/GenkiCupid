const React = require('react');
const StringUtils = require('../../util/string_utils');
const SessionStore = require('../../stores/session_store');
const ProfileActions = require('../../actions/profile_actions');
const ThreadActions = require('../../actions/thread_actions');
const hashHistory = require('react-router').hashHistory;
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

  openMessageThread (){
    hashHistory.push('/messages/new/'+this.props.profile.username);
  },

  render () {
    let genderStr = this.props.profile.gender;
    if (genderStr) {
      genderStr = StringUtils.capitalize(genderStr);
    }
    const messageButton = (
      <button id='message-button' className='standard-button'
        onClick={this.openMessageThread}>
        Message
      </button>
    );
    const avUrl = cloudinary.url(this.props.profile.avatar_url,
      {secure: true, width: 225, height: 225, crop: 'fill', gravity: 'face'});
    return (
        <header id='profile-header' className='profile-header'>
          <div id='profile-avatar-wrapper'>
            <img id='profile-header-avatar' src={avUrl}/>
            <UploadButton postImage={this.postImage} />
          </div>

          <span id='profile-header-info'>
            <h2 id='mini-details-username'>{this.props.profile.username}</h2>
            <p id='mini-details'>
              {this.props.profile.age} • {this.props.profile.location} • {genderStr}
            </p>
          </span>

          {(this.props.profile.username !== SessionStore.currentUser().username) ? messageButton : ""}
        </header>);
  }
});

module.exports = ProfileHeader;
