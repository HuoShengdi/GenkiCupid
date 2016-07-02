const React = require('react');
const ReactRouter =require('react-router');
const hashHistory = ReactRouter.hashHistory;


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
        <span className='profile-tab' id='pnav-about'
          onClick={this.redirect(aboutPath)}>
          About
        </span>
        <span className='profile-tab' id='pnav-questions'
          onClick={this.redirect(questionsPath)}>
          Questions
        </span>
      </div>
    );
  }

});

module.exports = ProfileTabs;
