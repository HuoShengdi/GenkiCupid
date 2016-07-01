const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({
  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount(){
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn(){
    if (SessionStore.isUserLoggedIn()){
      hashHistory.push("/");
    }
  },

  handleSubmit(e){
    e.preventDefault();

    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    SessionActions.logIn(formData);
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors('login');

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i)=>{
      return <li key={i}>{errorMsg}</li>;
    });

    return <ul className='errors'>{messages}</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render () {
    let signupLink = <Link to="/signup">Sign up here!</Link>;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to GenkiCupid!
          <br/>
          New? {signupLink}

          {this.fieldErrors("base")}
          <div className="login-form">
            <label> Username: {this.fieldErrors("username")}
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
            </label>
            <br/>
            <label> Password: {this.fieldErrors("password")}
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
