const React = require('react');

const MatchItem = React.createClass({

  render: function() {
    return (
      <div id={'usr-' + this.props.match.profile_details.username}
        className='match_card_wrapper'>
        <div className='match-card'>
          <a className='image_link'
            href={'/#/profiles/'+this.props.match.profile_details.username}>
            <span className='image_wrapper'>
              <img className='match-avatar' src={this.props.match.profile_details.image}/>
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
              {this.props.match.profile_details.age} • {this.props.match.profile_details.gender}
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
