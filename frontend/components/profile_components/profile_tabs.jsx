const React = require('react');
const hashHistory = require('react-router').hashHistory;


const ProfileTabs = React.createClass({
  redirect(path){
    return function() {
      hashHistory.push(path);
    };
  },

  render () {
    const aboutPath = "/profiles/" + this.props.profile.username + "/about";
    const questionsPath = "/profiles/" + this.props.profile.username + "/questions";
    return (
      <div className='profile-tab-container'>
        <span className='profile-tab'
          onClick={this.redirect(aboutPath)}>
          About
        </span>
        <span className='profile-tab'
          onClick={this.redirect(questionsPath)}>
          Questions
        </span>
      </div>
    );
  }

});

module.exports = ProfileTabs;
