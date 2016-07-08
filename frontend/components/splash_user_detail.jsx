const React = require('react');
const cloudinary = require('cloudinary');
const PropTypes = React.PropTypes;

cloudinary.config({
  cloud_name: 'huoshengdi'
});

const SplashUserDetail = React.createClass({


  render: function() {
    const avUrl = cloudinary.url(this.props.match.profile_details.image,
      {secure: true, width: 160, height: 160, crop: 'fill', gravity: 'face'});
    return (
      <div className='splash-card'>
        <a className='image_link'
          href={'/#/profiles/'+this.props.match.profile_details.username}>
          <span className='image_wrapper'>
            <img className='match-avatar' src={avUrl}/>
          </span>
        </a>
      </div>
    );
  }

});

module.exports = SplashUserDetail;
