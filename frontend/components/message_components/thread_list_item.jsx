const React = require('react');
const cloudinary = require('cloudinary');

const ThreadListItem = React.createClass({

  render: function() {
    const avUrl = cloudinary.url(this.props.thread.avatar_url,
      {secure: true, width: 60, height: 60, crop: 'fill', gravity: 'face'});

    let klassName='thread-list-item';
    if (this.props.active) {
      klassName += ' active';
    }
    return (
      <div className={klassName}>
        <a className='open' href={`/#/messages/${this.props.thread.id}`}>
          <div className='photo'><img src={avUrl} /></div>
          <div className='subject'>{this.props.thread.username}</div>
          <div className='timestamp'>{this.props.thread.last_updated}</div>
        </a>
        <a className='profile' href={`/#/profiles/${this.props.thread.username}`}>
          <div className='link-text'>Profile</div>
        </a>
      </div>
    );
  }

});

module.exports = ThreadListItem;
