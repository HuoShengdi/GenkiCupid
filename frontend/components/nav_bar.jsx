const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const NavBar = React.createClass({
  handleLogout(){
    SessionActions.logOut();
  },
  redirect(path){
    return function() {
      hashHistory.push(path);
      return false;
    };
  },
  render () {
    const userProfilePath = ("/profiles/"+ SessionStore.currentUser().username);
    const logoutButton = (
      <a
        onClick={this.handleLogout}
        key='logout'
        className="navbar-button"
        id='logout'>
        Log Out
      </a>);
    const signUpButton = (
      <a
        onClick={this.redirect("/signup")}
        key='signup'
        className="navbar-button"
        id='signup'>
        Sign Up
      </a>);
    const loginButton = (
      <a
        onClick={this.redirect("/login")}
        key='login'
        className="navbar-button"
        id='login'>
        Log In
      </a>);
    const profileButton = (
      <a
        onClick={this.redirect(userProfilePath)}
        key='profile'
        className="navbar-button"
        id='profile'>
        Profile
      </a>);
    const logo = <h4 onClick={this.redirect("/")} className="navbar-logo">GenkiCupid</h4>;
    return <div className='navbar'>
      {logo}
      {SessionStore.isUserLoggedIn() ? [logoutButton, profileButton] : [signUpButton, loginButton]}
    </div>;
  }
});

module.exports = NavBar;
