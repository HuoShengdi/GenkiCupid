const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({
  getInitialState() {
    return {
      username: "",
      password: "",
      verify_password: "",
      birthdate:"",
      postal_code: "",
      gender: "",
      orientation: "",
      rel_status: ""
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
      password: this.state.password,
      verify_password: this.state.verify_password,
      birthdate: this.state.birthdate,
      postal_code: this.state.postal_code,
      gender: this.state.gender,
      orientation: this.state.orientation,
      rel_status: this.state.rel_status
    };
    SessionActions.signUp(formData);
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors('signup');

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
    let loginLink = <Link to="/login">login here</Link>;
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to GenkiCupid!
          <br/>
          If you have an account, {loginLink}.

          {this.fieldErrors("base")}
          <div className="signup-form">
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
              <input type="password"
                value={this.state.verify_password}
                onChange={this.update("verify_password")}
                placeholder="Verify Password"
                className="login-input" />
            </label>
            <br/>
            <label> Birthdate: {this.fieldErrors("birthdate")}
              <input type="date"
                value={this.state.birthdate}
                onChange={this.update("birthdate")}
                className="login-input" />
            </label>
            <br/>
            <label>ZIP Code: {this.fieldErrors("postal_code")}
              <input type="text"
                value={this.state.postal_code}
                onChange={this.update("postal_code")}
                className="login-input" />
            </label>
            <br/>
            <label>Gender: {this.fieldErrors("gender")}
              <select className="login-select"
                value={this.state.gender}
                onChange={this.update("gender")}>
                <option></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </label>
            <label>Orientation: {this.fieldErrors("orientation")}
              <select className="login-select"
                value={this.state.orientation}
                onChange={this.update("orientation")}>
                <option></option>
                <option value="straight">Straight</option>
                <option value="gay">Gay</option>
                <option value="bisexual">Bisexual</option>
              </select>
            </label>
            <br/>
            <label>Relationship Status: {this.fieldErrors("rel_status")}
              <select className="login-select"
                value={this.state.rel_status}
                onChange={this.update("rel_status")}>
                <option></option>
                <option value="single">Single</option>
                <option value="dating">In a Relationship</option>
                <option value="married">Married</option>
              </select>
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

});

module.exports = SignupForm;
