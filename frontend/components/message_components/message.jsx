const React = require('react');
const PropTypes = React.PropTypes;
const SessionStore = require('../../stores/session_store');
const cloudinary = require('cloudinary');

const Message = React.createClass({

  render: function() {
    const messageClass = (
      SessionStore.currentUser().username === this.props.message.username ?
      " self" : " other"
    );
    const avUrl = cloudinary.url(this.props.message.avatar_url,
      {secure: true, width: 60, height: 60, crop: 'fill', gravity: 'face'});
    return (
      <div className={'message-wrapper'+ messageClass}>
        <a className='message-avatar-wrapper' href={`/#/profiles/${this.props.message.username}`}>
          <img src={avUrl}/>
        </a>
        <div className='message-content'>
          <div className='message-body'>
            {this.props.message.body}
          </div>
          <div className='message-detail'>
            {this.props.message.message_time}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Message;
