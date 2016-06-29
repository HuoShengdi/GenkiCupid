const React = require('react');
const SessionActions = require('../actions/session_actions');

const NavBar = React.createClass({
  handleLogout(){
    SessionActions.logOut();
  },
  render () {
    return <div>
      <button onClick={this.handleLogout}>Log Out</button>
    </div>;
  }
});

module.exports = NavBar;
