const React = require('react');
const ProfileActions = require('../../actions/profile_actions');

const ProfileDetailsForm = React.createClass({
  getInitialState(){
    return this.props.profile;
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();

    const formData = {
      username: this.state.username,
      birthdate: this.state.birthdate,
      postal_code: this.state.postal_code,
      gender: this.state.gender,
      orientation: this.state.orientation,
      rel_status: this.state.rel_status
    };

    ProfileActions.editProfile(formData);
  },
  render () {
    return (
      <div id='details-edit-modal' className="modal profile_modal">
        <form>
          <label> Birthdate:
            <input type="date"
              value={this.state.birthdate}
              onChange={this.update("birthdate")}
              className="login-input" />
          </label>
          <br/>
          <label>ZIP Code:
            <input type="text"
              value={this.state.postal_code}
              onChange={this.update("postal_code")}
              className="login-input" />
          </label>
          <br/>
          <label>Gender:
            <select className="login-select"
              value={this.state.gender}
              onChange={this.update("gender")}>
              <option></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <label>Orientation:
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
          <label>Relationship Status:
            <select className="login-select"
              value={this.state.rel_status}
              onChange={this.update("rel_status")}>
              <option></option>
              <option value="single">Single</option>
              <option value="dating">In a Relationship</option>
              <option value="married">Married</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
});

module.exports = ProfileDetailsForm;
