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

  guestLogin(e){
    e.preventDefault();
    this.setState({username: "DiamondJoe", password:"franzkafka"});
    window.setTimeout(this.handleSubmit, 1000);
  },

  handleSubmit(e){
    if (e){
      e.preventDefault();
    }

    const formData = {
      username: this.state.username,
      password: this.state.password
    };

    SessionActions.logIn(formData);
    return false;
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
      <div className="login-page-container">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h3>Welcome to GenkiCupid!</h3>
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
              <div id='button-box'>
                <a href="#" id='login-submit'
                  className='login-form-button'
                  onClick={this.handleSubmit}>Login</a>
                <a href='#' id='guest-login'
                  className='login-form-button'
                  onClick={this.guestLogin}>Guest Login</a>
              </div>

            </div>
          </form>
        </div>
        <div id='site-info-container'>
          <h3>Information and Rules:</h3>
          <div id='site-info'>
            <p>GenkiCupid connects roleplayers by their characters
            to foster better roleplaying dynamics. We ask that you follow a few simple rules:</p>
            <ul id='rules-list'>
              <li>Don't make profiles for real people, including yourself (original characters welcome!).</li>
              <li>Respect people's boundaries.
                Don't harass people or otherwise be creepy.
                "I'm in character" is not a justification.</li>
              <li>Keep your images work-safe.</li>
              <li>Do your best to make friends!</li>
              <li>Have fun!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
