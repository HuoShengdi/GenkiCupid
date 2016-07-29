const React = require('react');
const ProfileActions = require('../../actions/profile_actions');

const ProfileDetailsForm = React.createClass({
  getInitialState(){
    let profile = this.props.profile;
    return profile;
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});

  },
  // openModal(){
  //
  // },
  // hideModal(){
  //   this.setState({visible: false});
  //   document.getElementById('windowshade').classList.remove("show");
  // },
  handleSubmit(e){
    e.preventDefault();

    const formData = {
      username: this.state.username,
      birthdate: this.state.birthday,
      postal_code: this.state.postal_code,
      gender: this.state.gender,
      orientation: this.state.orientation,
      rel_status: this.state.rel_status
    };

    ProfileActions.editProfile(formData);
    this.props.close();
  },
  render () {
    return (
      <div id='details-edit'>
        <h3>Edit Your Details
          <a id='form-close' href="javascript:void[0]" onClick={this.props.close}>Close</a>
        </h3>

        <form>
          <label className='detail-field'> Birthdate:
            <input type="date"
              value={this.state.birthday}
              onChange={this.update("birthday")}
              className="detail-input" />
          </label>
          <br/>
          <label className='detail-field'>Gender:
            <select className="detail-select"
              value={this.state.gender}
              onChange={this.update("gender")}>
              <option></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <br/>
          <label className='detail-field'>Orientation:
            <select className="detail-select"
              value={this.state.orientation}
              onChange={this.update("orientation")}>
              <option></option>
              <option value="straight">Straight</option>
              <option value="gay">Gay</option>
              <option value="bisexual">Bisexual</option>
            </select>
          </label>
          <br/>
          <button className='details-form-button' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = ProfileDetailsForm;
