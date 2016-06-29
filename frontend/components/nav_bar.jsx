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
    };
  },
  render () {
    const userProfilePath = ("/profiles/"+ SessionStore.currentUser().username);
    const logoutButton = (
      <button
        onClick={this.handleLogout}
        key='logout'
        className="navbar-button">
        Log Out
      </button>);
    const signUpButton = (
      <button
        onClick={this.redirect("/signup")}
        key='signup'
        className="navbar-button">
        Sign Up
      </button>);
    const loginButton = (
      <button
        onClick={this.redirect("/login")}
        key='login'
        className="navbar-button">
        Log In
      </button>);
    const profileButton = (
      <button
        onClick={this.redirect(userProfilePath)}
        key='profile'
        className="navbar-button">
        Profile
      </button>);
    const logo = <h4 onClick={this.redirect("/")} className="navbar-logo">GenkiCupid</h4>;
    return <div className='navbar'>
      {logo}
      {SessionStore.isUserLoggedIn() ? [logoutButton, profileButton] : [signUpButton, loginButton]}
    </div>;
  }
});

module.exports = NavBar;
