const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;


const SF_ZIPCODES = [94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110,
  94111, 94112, 94114, 94115, 94116, 94117, 94118, 94121, 94122, 94123, 94124,
  94127, 94129, 94130, 94131, 94132, 94133, 94134, 94158];


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
      hashHistory.push("/profiles/" + SessionStore.currentUser().username);
    }
  },

  handleSubmit(e){
    e.preventDefault();

    const randZip = SF_ZIPCODES[Math.random() * SF_ZIPCODES.length | 0];
    const formData = {
      username: this.state.username,
      password: this.state.password,
      verify_password: this.state.verify_password,
      birthdate: this.state.birthdate,
      postal_code: randZip,
      gender: this.state.gender,
      orientation: this.state.orientation,
      rel_status: "single"
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
      <div className="login-page-container">
        <div className='login-form-container'>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <h3>Welcome to GenkiCupid!</h3>
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
              </label>
              <label> <span className="spacer" />
                <input type="password"
                  value={this.state.verify_password}
                  onChange={this.update("verify_password")}
                  placeholder="Verify Password"
                  className="login-input" />
              </label>
              <br/>
              <br/>
              <label> Birthdate: {this.fieldErrors("birthdate")}
                <input type="date"
                  value={this.state.birthdate}
                  onChange={this.update("birthdate")}
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
              <br/>
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
              <div id='button-box'>
                <a href="#" id='login-submit'
                  className='login-form-button'
                  onClick={this.handleSubmit}>Sign Up</a>
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

module.exports = SignupForm;
