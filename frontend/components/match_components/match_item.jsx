const React = require('react');
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'huoshengdi'
});


const MatchItem = React.createClass({

  render: function() {

    const avUrl = cloudinary.url(this.props.match.profile_details.image,
      {secure: true, width: 280, height: 280, crop: 'fill', gravity: 'face'});
    return (
      <div id={'usr-' + this.props.match.profile_details.username}
        className='match_card_wrapper'>
        <div className='match-card'>
          <a className='image_link'
            href={'/#/profiles/'+this.props.match.profile_details.username}>
            <span className='image_wrapper'>
              <img className='match-avatar' src={avUrl}/>
            </span>
          </a>
        </div>
        <div className='match_card_text'>
          <div className='profile_info'>
            <div className='username'>
              <a href={'/#/profiles/'+this.props.match.profile_details.username}
                className='name'>
                {this.props.match.profile_details.username}
              </a>
            </div>
            <div className='userinfo'>
              {this.props.match.profile_details.age} • {this.props.match.profile_details.location}
            </div>
          </div>
          <div className='percentage'>
            {this.props.match.match_percent}%
            <span className='percentage_label'>
              Match
            </span>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MatchItem;
